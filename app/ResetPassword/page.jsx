'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { newPasswordSchema } from '@/lib/utils/validation';
import { updatePassword } from '@/lib/utils/auth-helpers';
import Link from 'next/link';
import { createClient } from '@/utils/supabase/client';

export default function NewPasswordForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [userEmail, setUserEmail] = useState(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(newPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  useEffect(() => {
    const supabase = createClient();

    async function checkSession() {
      try {
        const { data } = await supabase.auth.getSession();

        if (!data.session) {
          router.push('/ForgottenPassword');
          return;
        }

        if (data.session.user?.email) {
          setUserEmail(data.session.user.email);
        }
      } catch (err) {
        router.push('/ForgottenPassword');
      }
    }

    checkSession();
  }, [router]);

  async function onSubmit(formData) {
    if (!userEmail) return;

    setIsLoading(true);
    setError(null);

    try {
      await updatePassword(formData.password);

      if (userEmail) {
        await fetch('/api/resend', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: 'password-reset-confirmation',
            email: userEmail,
            origin: window.location.origin,
          }),
        });
      }

      const supabase = createClient();
      await supabase.auth.signOut();

      setIsSuccess(true);

      sessionStorage.removeItem('isPasswordReset');
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'An error occurred. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="text-center space-y-4">
        <div className="text-green-600 text-xl font-medium">Password Updated</div>
        <p>
          Your password has been successfully updated. You can now sign in with
          your new password.
        </p>
        <div className="mt-4">
          <Link href="/Login">
            <p className="inline-block px-6 py-2 bg-green-600 text-white rounded-md">
              Sign in
            </p>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {error && (
        <div
          role="alert"
          className="border border-red-200 bg-red-50 text-red-700 px-4 py-3 rounded-md"
        >
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col space-y-1">
          <label className="font-medium">New Password</label>
          <input
            {...register('password')}
            type="password"
            placeholder="••••••••"
            className="w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-green-300"
            aria-invalid={errors.password ? 'true' : 'false'}
            aria-describedby={errors.password ? 'password-error' : undefined}
          />
          {errors.password && (
            <p id="password-error" className="text-sm text-red-600 mt-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="flex flex-col space-y-1">
          <label className="font-medium">Confirm New Password</label>
          <input
            {...register('confirmPassword')}
            type="password"
            placeholder="••••••••"
            className="w-full p-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-green-300"
            aria-invalid={errors.confirmPassword ? 'true' : 'false'}
            aria-describedby={
              errors.confirmPassword ? 'confirmPassword-error' : undefined
            }
          />
          {errors.confirmPassword && (
            <p id="confirmPassword-error" className="text-sm text-red-600 mt-1">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full inline-flex items-center justify-center px-4 py-3 bg-green-600 text-white rounded-md disabled:opacity-60"
          disabled={isLoading}
        >
          {isLoading ? 'Updating password...' : 'Update password'}
        </button>
      </form>
    </div>
  );
}
