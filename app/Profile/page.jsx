"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import AvatarNav from "../Components/AvaterNav";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [fullName, setFullName] = useState("");
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(null);

  const [deleting, setDeleting] = useState(false);
  const [signingOut, setSigningOut] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false); // ✅ added for popup cart/modal

  const router = useRouter();

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

        const { data: profile, error: profileError } = await supabase
          .from("profiles")
          .select("full_name")
          .eq("id", session.user.id)
          .single();

        if (!profileError && profile) {
          setFullName(profile.full_name || "");
        }
      } catch (err) {
        console.error("Failed to load user/profile", err);
      } finally {
        setIsLoading(false);
      }
    }

    getUserAndProfile();
  }, []);

  if (isLoading) return null;

  async function handleSave(e) {
    e.preventDefault();
    if (!user) return;

    setSaving(true);
    setSaveSuccess(null);

    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("profiles")
        .upsert(
          { id: user.id, email: user.email, full_name: fullName },
          { returning: "representation" }
        )
        .select()
        .single();

      if (error) throw error;
      setSaveSuccess(true);
    } catch (err) {
      console.error("Save profile error", err);
      setSaveSuccess(false);
    } finally {
      setSaving(false);
      setTimeout(() => setSaveSuccess(null), 3000);
    }
  }

  async function handleSignOut() {
    try {
      setSigningOut(true);
      const supabase = createClient();
      const { error } = await supabase.auth.signOut();
      if (error) console.error("Sign out error:", error);
      router.push("/Home");
    } catch (err) {
      console.error("Sign out failed", err);
    } finally {
      setSigningOut(false);
    }
  }

  // ✅ actual delete logic
  async function handleDeleteAccountConfirmed() {
    if (!user) return;

    setDeleting(true);
    try {
      const res = await fetch("/api/account/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user.id }),
      });

      const json = await res.json();
      if (!res.ok) {
        console.error("Account delete failed:", json);
        setDeleting(false);
        return;
      }

      const supabase = createClient();
      await supabase.auth.signOut();
      router.push("/Home");
    } catch (err) {
      console.error("Delete account error:", err);
    } finally {
      setDeleting(false);
      setShowConfirmModal(false);
    }
  }

  return (
    <div className="space-y-6 relative">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Profile</h2>
        <p className="text-gray-500">Manage your account settings and preferences.</p>
      </div>

      {/* rest of your profile UI unchanged */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* personal info */}
        <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b">
            <h3 className="text-lg font-semibold">Personal Information</h3>
          </div>
          <form onSubmit={handleSave}>
            <div className="p-6 space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  value={user?.email || ""}
                  disabled
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-200"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-200"
                />
              </div>

              <AvatarNav />

              <button
                type="submit"
                className="w-full px-4 py-2 rounded-md inline-flex items-center justify-center bg-green-600 text-white"
                disabled={saving}
              >
                {saving ? "Saving..." : "Save Changes"}
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

        {/* account settings */}
        <div className="md:col-span-2 bg-white border rounded-lg shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b">
            <h3 className="text-lg font-semibold">Account Settings</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-red-600">Delete Account</p>
                  <p className="text-sm text-gray-500">
                    Permanently delete your account and all data
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowConfirmModal(true)} // ✅ open popup cart
                    className="px-4 py-2 rounded-md inline-flex items-center justify-center bg-red-600 text-white"
                    disabled={deleting}
                  >
                    Delete Account
                  </button>
                  <button
                    onClick={handleSignOut}
                    className="px-4 py-2 rounded-md inline-flex items-center justify-center bg-red-600 text-white"
                    disabled={signingOut}
                  >
                    {signingOut ? "Signing out..." : "Sign out"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showConfirmModal && (
        <div className="fixed inset-0 bg-[#000000bc] bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[350px] space-y-4 text-center">
            <h3 className="text-lg font-semibold text-red-600">Confirm Deletion</h3>
            <p className="text-sm text-gray-600">
              Are you sure you want to permanently delete your account? This action cannot be undone.
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={() => setShowConfirmModal(false)}
                className="px-4 py-2 rounded-md border text-gray-700 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAccountConfirmed}
                className="px-4 py-2 rounded-md bg-red-600 text-white"
                disabled={deleting}
              >
                {deleting ? "Deleting..." : "Yes, Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
