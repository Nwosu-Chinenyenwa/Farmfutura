'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import AvatarNav from '../Components/AvaterNav';

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // profile fields
  const [fullName, setFullName] = useState('');
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(null); // null | true | false

  useEffect(() => {
    async function getUserAndProfile() {
      try {
        const supabase = createClient();
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (!session?.user) {
          setUser(null);
          setIsLoading(false);
          return;
        }

        setUser(session.user);

        // fetch profile row for this user (profiles table)
        const { data: profile, error: profileError } = await supabase
          .from('profiles')
          .select('full_name')
          .eq('id', session.user.id)
          .single();

        if (!profileError && profile) {
          setFullName(profile.full_name || '');
        } else {
          // no profile row found (trigger might not have run) — leave fullName empty
        }
      } catch (err) {
        console.error('Failed to load user/profile', err);
      } finally {
        setIsLoading(false);
      }
    }

    getUserAndProfile();
  }, []);

  if (isLoading) {
    return null; // keep same behavior
  }

  async function handleSave(e) {
    e.preventDefault();
    if (!user) return;

    setSaving(true);
    setSaveSuccess(null);

    try {
      const supabase = createClient();

      // Upsert profile row (will insert if missing, update if exists)
      const { data, error } = await supabase
        .from('profiles')
        .upsert(
          {
            id: user.id,
            email: user.email,
            full_name: fullName,
          },
          { returning: 'representation' } // get back the row
        )
        .select()
        .single();

      if (error) throw error;

      setSaveSuccess(true);
      // optional: reflect returned row (data) if you want
    } catch (err) {
      console.error('Save profile error', err);
      setSaveSuccess(false);
    } finally {
      setSaving(false);
      // auto-clear success/failure after a short time
      setTimeout(() => setSaveSuccess(null), 3000);
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Profile</h2>
        <p className="text-gray-500">Manage your account settings and preferences.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b">
            <h3 className="text-lg font-semibold">Personal Information</h3>
          </div>
          <form onSubmit={handleSave}>
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  id="email"
                  value={user?.email || ''}
                  disabled
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-200"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  id="name"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-200"
                />
              </div>

              <AvatarNav/>

              <button
                type="submit"
                className="w-full px-4 py-2 rounded-md inline-flex items-center justify-center bg-green-600 text-white"
                disabled={saving}
              >
                {saving ? 'Saving...' : 'Save Changes'}
              </button>

              {saveSuccess === true && (
                <div className="text-sm text-green-600">Saved successfully.</div>
              )}
              {saveSuccess === false && (
                <div className="text-sm text-red-600">Failed to save. Check console.</div>
              )}
            </div>
          </form>
        </div>

        {/* Security Settings (unchanged skeleton) */}
        <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b">
            <h3 className="text-lg font-semibold">Security</h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="space-y-2">
              <label htmlFor="current-password" className="block text-sm font-medium mb-1">Current Password</label>
              <input
                id="current-password"
                type="password"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-200"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="new-password" className="block text-sm font-medium mb-1">New Password</label>
              <input
                id="new-password"
                type="password"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-200"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="confirm-password" className="block text-sm font-medium mb-1">Confirm New Password</label>
              <input
                id="confirm-password"
                type="password"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-200"
              />
            </div>

            <button className="w-full px-4 py-2 rounded-md inline-flex items-center justify-center bg-green-600 text-white">
              Update Password
            </button>
          </div>
        </div>

        {/* Activity Chart (placeholder) */}
        <div className="md:col-span-2 bg-white border rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b">
            <h3 className="text-lg font-semibold">Login Activity</h3>
          </div>
          <div className="p-6">
            <p className="text-sm text-gray-500 mt-4">
              This chart shows your login activity over the past 30 days.
            </p>
          </div>
        </div>

        {/* Account Settings (skeleton) */}
        <div className="md:col-span-2 bg-white border rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b">
            <h3 className="text-lg font-semibold">Account Settings</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Two-Factor Authentication</p>
                  <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                </div>
                <button className="px-4 py-2 rounded-md inline-flex items-center justify-center border">Enable</button>
              </div>

              <div className="my-4 border-t" />

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-gray-500">Receive email notifications about account activity</p>
                </div>
                <button className="px-4 py-2 rounded-md inline-flex items-center justify-center border">Configure</button>
              </div>

              <div className="my-4 border-t" />

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-red-600">Delete Account</p>
                  <p className="text-sm text-gray-500">Permanently delete your account and all data</p>
                </div>
                <button className="px-4 py-2 rounded-md inline-flex items-center justify-center bg-red-600 text-white">Delete Account</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
