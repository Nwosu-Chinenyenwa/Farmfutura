// app/api/cart/add/route.js
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

export async function POST(request) {
  try {
    const supabase = createServerClient(SUPABASE_URL, SUPABASE_KEY, {
      cookies: {
        getAll() {
          return cookies().getAll();
        },
      },
    });

    const { data: userData, error: userError } = await supabase.auth.getUser();
    if (userError) throw userError;
    const user = userData?.user || null;
    if (!user) return NextResponse.json({ error: "Not authenticated" }, { status: 401 });

    const body = await request.json();
    const {
      product_id,
      name,
      unit_price = 0,
      quantity = 1,
      image_url = null,
      metadata = null,
    } = body;

    if (!product_id || !name) {
      return NextResponse.json({ error: "product_id and name required" }, { status: 400 });
    }

    const payload = {
      user_id: user.id,
      product_id: String(product_id),
      name,
      unit_price,
      quantity: Number(quantity || 1),
      image_url,
      metadata,
    };

    const { data: inserted, error: insertError } = await supabase
      .from("cart_items")
      .insert([payload])
      .select()
      .single();

    if (!insertError) {
      return NextResponse.json({ data: inserted });
    }

    const insertMessage = (insertError && (insertError.message || "")).toLowerCase();
    const isUniqueViolation =
      (insertError && insertError.code === "23505") || 
      insertMessage.includes("duplicate") ||
      insertMessage.includes("unique");

    if (isUniqueViolation) {
      const { data: existing, error: existingError } = await supabase
        .from("cart_items")
        .select("id, quantity")
        .eq("user_id", user.id)
        .eq("product_id", String(product_id))
        .single();

      if (existingError) {
        throw existingError;
      }

      const newQty = (existing.quantity || 0) + Number(payload.quantity || 1);

      const { data: updated, error: updateError } = await supabase
        .from("cart_items")
        .update({
          quantity: newQty,
          unit_price: payload.unit_price,
          name: payload.name,
          image_url: payload.image_url,
          metadata: payload.metadata,
        })
        .match({ id: existing.id, user_id: user.id })
        .select()
        .single();

      if (updateError) throw updateError;
      return NextResponse.json({ data: updated });
    }

    throw insertError;
  } catch (err) {
    return NextResponse.json({ error: err?.message || String(err) }, { status: 500 });
  }
}
