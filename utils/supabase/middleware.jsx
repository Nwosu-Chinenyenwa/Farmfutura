import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

export const updateSession = async (request) => {
  let supabaseResponse = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value, options }) => {
          request.cookies.set(name, value);
        });

        supabaseResponse = NextResponse.next({ request });

        cookiesToSet.forEach(({ name, value, options }) => {
          supabaseResponse.cookies.set(name, value, options);
        });
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const isNewPasswordPage = request.nextUrl.pathname === "/ResetPassword";

  // Redirects
   if (
    user &&
    request.nextUrl.pathname.startsWith("/Login") &&
    !isNewPasswordPage
  ) {
    return NextResponse.redirect(new URL("/Home", request.url));
  }
 
  if (!user && request.nextUrl.pathname.startsWith("/Checkout")) {
    return NextResponse.redirect(new URL("/Login", request.url));
  }

  if (!user && request.nextUrl.pathname.startsWith("/Profile")) {
    return NextResponse.redirect(new URL("/Login", request.url));
  }

  return supabaseResponse;
};
