"use client"

import { GlassCard } from '@developer-hub/liquid-glass';
import ScrollSection from "../../components/ScrollSection";

export default function About() {
	return (
	<>

 <ScrollSection className="min-h-screen flex items-center justify-center px-6 py-24">
          <div className="max-w-4xl mx-auto w-full">
<div className="max-w-4xl mx-auto px-6 py-12 prose prose-lg">
  <h1>Privacy Policy for Keep Latin Alive</h1>
  <p className="text-sm text-gray-500">
    Effective date: <time dateTime="2025-12-08">December 8, 2025</time><br />
    Last updated: <time dateTime="2025-12-08">December 8, 2025</time>
  </p>

  <p>
    Keep Latin Alive (“we,” “our,” or “us”) operates the website <a href="https://keeplatinalive.com">https://keeplatinalive.com</a> (the “Service”), an educational platform offering free introductory Latin lessons and prayers.
  </p>

  <p>This Privacy Policy explains how we collect, use, and protect your personal information when you use our Service.</p>

  <h2>1. Information We Collect</h2>
  <p>When you sign up or log in using “Sign in with Google”:</p>
  <ul>
    <li>We receive only your <strong>name</strong> and <strong>email address</strong> from Google.</li>
    <li>We do <strong>not</strong> request or receive any other information from your Google account (no profile picture, contacts, Gmail access, etc.).</li>
  </ul>

  <p>All authentication (creating accounts, sessions, password management, etc.) is handled securely by <strong>Clerk</strong> (<a href="https://clerk.com">https://clerk.com</a>), our third-party authentication provider.</p>

  <p>We do <strong>not</strong> collect:</p>
  <ul>
    <li>Payment information</li>
    <li>Location data</li>
    <li>IP addresses (beyond standard web server logs)</li>
    <li>Any usage analytics or tracking cookies</li>
  </ul>

  <h2>2. How We Use Your Information</h2>
  <p>The only purposes for which we use your name and email are:</p>
  <ul>
    <li>To create and manage your account</li>
    <li>To let you log in</li>
    <li>To display your name in the app (e.g., “Welcome, Marcus”)</li>
    <li>To contact you if we ever need to (e.g., important service updates) — we have never sent marketing emails and do not plan to.</li>
  </ul>

  <h2>3. Data Storage and Security</h2>
  <p>Your name and email are stored securely by Clerk and in our database only as needed to operate your account. We use industry-standard encryption and security practices (TLS, hashed passwords handled by Clerk, etc.).</p>

  <h2>4. Sharing Your Information</h2>
  <p>We do <strong>not</strong> sell, trade, or share your personal information with anyone except:</p>
  <ul>
    <li>Clerk (our authentication provider) — see their privacy policy: <a href="https://clerk.com/privacy">https://clerk.com/privacy</a></li>
    <li>As required by law (e.g., court order)</li>
  </ul>

  <h2>5. Data Retention</h2>
  <p>We keep your account information for as long as you have an active account. If you delete your account, all personal data is permanently removed within 30 days.</p>

  <h2>6. Your Rights</h2>
  <p>You can:</p>
  <ul>
    <li>Access or delete your account at any time in the app settings</li>
    <li>Contact us at any time to request deletion or to ask questions</li>
  </ul>

  <h2>7. Children’s Privacy</h2>
  <p>Our Service is not intended for children under 13. We do not knowingly collect data from children under 13.</p>

  <h2>8. Changes to This Policy</h2>
  <p>We may update this policy occasionally. We will notify you of any material changes by posting the new policy here and updating the “Last updated” date.</p>

  <h2>9. Contact Us</h2>
  <p>If you have any questions about this Privacy Policy, please contact us at:<br />
    <a href="mailto:contact@keeplatinalive.com">contact@keeplatinalive.com</a>
  </p>

  <hr className="my-12" />

  <p className="italic">Thank you for helping keep Latin alive! 🏛️</p>
</div>

</div>
</ScrollSection>		
	</>
			);
}
