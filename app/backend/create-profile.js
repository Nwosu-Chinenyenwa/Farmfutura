import nodemailer from "nodemailer";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

const supabaseServer = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const { id, email } = req.body;
  if (!id || !email)
    return res.status(400).json({ error: "Missing id or email" });

  try {
    // 1) Insert profile (if not exists)
    const { error: insertError } = await supabaseServer
      .from("profiles")
      .insert(
        [
          {
            id,
            email,
            created_at: new Date().toISOString(),
            projects_count: 0,
          },
        ],
        { returning: "minimal" }
      );

    if (insertError) {
      // If conflict (profile already exists) we can ignore it
      // but return the real error if it's severe
      console.error("Profile insert error:", insertError);
      // if conflict: code 409 may come through; continue
    }

    // 2) Optionally create an initial cart or other rows
    await supabaseServer
      .from("carts")
      .insert([{ user_id: id, items: [] }], { returning: "minimal" })
      .catch((e) => {
        console.error("Cart insert error:", e);
      });

    // 3) Send welcome email via Nodemailer (SMTP). Requires SMTP env vars.
    // If SMTP not configured, skip email gracefully.
    if (
      process.env.SMTP_HOST &&
      process.env.SMTP_PORT &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS
    ) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT, 10),
        secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions = {
        from:
          process.env.EMAIL_FROM || `"FarmFutura" <${process.env.SMTP_USER}>`,
        to: email,
        subject: "🎉 Welcome to FarmFutura — We're Excited to Have You!",
        html: `
    <div style="font-family: Arial, Helvetica, sans-serif; background-color: #f9fafb; padding: 40px 20px;">
      <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
        
        <div style="background: linear-gradient(135deg, #1e3a8a, #3b82f6); color: white; padding: 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 26px;">Welcome to FarmFutura 👋</h1>
        </div>
        
        <div style="padding: 30px; color: #333;">
          <p style="font-size: 16px;">Hi there,</p>
          <p style="font-size: 16px;">
            We’re thrilled to have you join <strong>FarmFutura</strong>! You’ve successfully signed up using:
          </p>
          
          <p style="font-size: 16px; background: #f1f5f9; padding: 10px; border-radius: 8px; text-align: center; color: #1e293b;">
            <strong>${email}</strong>
          </p>
          
          <p style="font-size: 16px; line-height: 1.6;">
            Your new dashboard is ready — explore your projects, manage your account, and enjoy full access to our features.
          </p>
          
          <div style="text-align: center; margin: 25px 0;">
            <a href="${
              process.env.APP_URL || "https://farmfutura.com"
            }/dashboard" 
               style="background: #3b82f6; color: white; text-decoration: none; padding: 12px 25px; border-radius: 6px; font-size: 16px;">
              Go to Your Dashboard
            </a>
          </div>
          
          <p style="font-size: 14px; color: #64748b;">
            If you didn’t create this account, please ignore this message or contact us immediately.
          </p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;">
          
          <p style="font-size: 14px; color: #94a3b8; text-align: center;">
            — The FarmFutura Team 🌿<br>
            <a href="${
              process.env.APP_URL || "https://farmfutura.com"
            }" style="color: #3b82f6; text-decoration: none;">Visit our website</a>
          </p>
        </div>
      </div>
    </div>
  `,
      };

      try {
        await transporter.sendMail(mailOptions);
      } catch (mailErr) {
        console.error("Failed to send welcome email:", mailErr);
      }
    } else {
      console.warn("SMTP not configured — skipping welcome email.");
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("create-profile error:", err);
    return res.status(500).json({ error: "Server error" });
  }
}
