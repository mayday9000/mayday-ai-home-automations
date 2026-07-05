import type { Metadata } from "next";
import { LegalContact, LegalPage } from "@/components/legal";

export const metadata: Metadata = { title: "Privacy Policy — Mayday AI" };

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" effectiveDate="July 4, 2026">
      <p>
        This Privacy Policy describes how Mayday AI (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
        &ldquo;our&rdquo;) collects, uses, and shares personal information when you visit
        maydayautomation.com or engage our AI automation services.
      </p>

      <h2>Information We Collect</h2>
      <ul>
        <li>Contact information you provide voluntarily: name, business name, email address, mobile phone number, and city or state of residence.</li>
        <li>Communication records you submit when interacting with our services, including voice and text interactions with AI assistants we operate on your behalf.</li>
        <li>Technical information automatically collected when you visit our site: IP address, browser type, device information, pages visited, and timestamps.</li>
        <li>Consent records: when you opt in to receive text messages, we record the date and time, IP address, user agent, the exact consent language shown at that time, and the contact information you submitted.</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To deliver and operate AI assistant and automation services you have engaged.</li>
        <li>To place the demonstration callback you request through our website form.</li>
        <li>To send text message notifications you have explicitly opted in to receive.</li>
        <li>To respond to inquiries and provide customer support.</li>
        <li>To improve our services and develop new features.</li>
        <li>To comply with legal obligations and enforce our Terms of Service.</li>
      </ul>

      <h2>How We Share Information</h2>
      <p>We do not sell your personal information. We share information only with:</p>
      <ul>
        <li>Service providers who process data on our behalf to deliver our services, including telecommunications providers (Twilio) for SMS and voice, AI model providers (Anthropic, OpenAI) for assistant intelligence, hosting and database providers, and email delivery providers.</li>
        <li>Legal authorities when required by law, court order, or to protect our rights, your safety, or the safety of others.</li>
      </ul>
      <p>We do not share phone numbers or message content with third parties for marketing purposes.</p>

      <h2>SMS Communications</h2>
      <p>
        If you opt in to receive text messages from Mayday AI, your phone number is used only to
        deliver service notifications you have requested. Message frequency varies based on your
        service usage. Message and data rates may apply. You can opt out at any time by replying
        STOP to any message. Reply HELP for assistance.
      </p>
      <p>
        We retain consent records for as long as you remain subscribed, and for a reasonable period
        after opt-out to comply with regulatory requirements.
      </p>

      <h2>Data Retention</h2>
      <p>
        We retain personal information for as long as needed to provide our services and as
        required by law. You may request deletion of your personal information at any time by
        emailing masondavisai@gmail.com.
      </p>

      <h2>Your Rights</h2>
      <p>Depending on your location, you may have the right to:</p>
      <ul>
        <li>Access the personal information we hold about you</li>
        <li>Correct inaccurate personal information</li>
        <li>Request deletion of your personal information</li>
        <li>Opt out of communications</li>
        <li>Object to or restrict certain processing</li>
      </ul>
      <p>To exercise any of these rights, email masondavisai@gmail.com.</p>

      <h2>Security</h2>
      <p>
        We implement reasonable technical and organizational measures to protect personal
        information against unauthorized access, alteration, disclosure, or destruction. No method
        of transmission or storage is fully secure, and we cannot guarantee absolute security.
      </p>

      <h2>Children</h2>
      <p>
        Our services are not directed to children under 13. We do not knowingly collect personal
        information from children under 13.
      </p>

      <h2>Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. The effective date at the top of this
        page reflects the most recent revision. Material changes will be communicated by posting an
        updated policy on this page.
      </p>

      <h2>Contact</h2>
      <LegalContact />
    </LegalPage>
  );
}
