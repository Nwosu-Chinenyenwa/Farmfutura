'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';

export default function AvatarNav() {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [initials, setInitials] = useState('');

  useEffect(() => {
    async function fetchProfile() {
      const supabase = createClient();
      const { data: { session } } = await supabase.auth.getSession();

      if (session?.user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('avatar_url, email')
          .eq('id', session.user.id)
          .single();

        if (profile?.avatar_url) setAvatarUrl(profile.avatar_url);
        if (profile?.email) {
          const namePart = profile.email.split('@')[0];
          setInitials(namePart.substring(0, 2).toUpperCase());
        }
      }
    }

    fetchProfile();
  }, []);

  return (
    <Link href="/Profile" style={{ textDecoration: 'none' }}>
      {avatarUrl ? (
        <img
          src={avatarUrl}
          alt="Avatar"
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            objectFit: 'cover',
            cursor: 'pointer',
          }}
        />
      ) : (
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            backgroundColor: '#4B5563',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          {initials || 'NC'}
        </div>
      )}
    </Link>
  );
}
