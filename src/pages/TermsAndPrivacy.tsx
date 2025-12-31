const TermsAndPrivacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-foreground">
          Terms and Conditions & Privacy Policy
        </h1>
        
        {/* Terms and Conditions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-primary">Terms and Conditions</h2>
          
          <div className="space-y-8 text-muted-foreground">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">1. Introduction and Acceptance of Terms</h3>
              <p>
                Welcome to Mayday AI. By engaging our services, you agree to be bound by these Terms and Conditions. 
                Mayday AI provides AI-powered voice agents, automation systems, and CRM integration solutions designed 
                to help businesses streamline operations, reduce costs, and improve customer engagement. Please read 
                these terms carefully before using our services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">2. Description of Services</h3>
              <p className="mb-3">Mayday AI offers the following services:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>AI Voice Agents:</strong> Intelligent voice-based systems that handle inbound and outbound calls, customer inquiries, appointment scheduling, and lead qualification.</li>
                <li><strong>Automation Systems:</strong> Custom workflow automation solutions including email sequences, task management, and business process optimization.</li>
                <li><strong>CRM Integrations:</strong> Seamless integration of AI tools with existing Customer Relationship Management systems to enhance data flow and customer tracking.</li>
                <li><strong>Consultation Services:</strong> Strategic guidance on implementing AI solutions tailored to your business needs.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">3. Service Engagement Process</h3>
              <p className="mb-3">Our engagement follows a structured approach:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Discovery Call:</strong> Initial consultation to understand your business needs and goals.</li>
                <li><strong>Proposal and Agreement:</strong> Detailed scope of work, timeline, and pricing provided for your approval.</li>
                <li><strong>Build Phase:</strong> Design and development of your custom AI solution.</li>
                <li><strong>Testing and Deployment:</strong> Thorough testing before going live with your system.</li>
                <li><strong>Optimization:</strong> Ongoing refinement based on performance data and feedback.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">4. Client Responsibilities</h3>
              <p className="mb-3">As a client, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate and complete information necessary for service delivery.</li>
                <li>Grant appropriate access to systems, platforms, and tools required for integration.</li>
                <li>Respond to requests for feedback and approvals in a timely manner.</li>
                <li>Ensure compliance with applicable laws regarding AI communications and data handling in your jurisdiction.</li>
                <li>Use the AI systems in accordance with ethical guidelines and applicable regulations.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">5. Intellectual Property Rights</h3>
              <p>
                Upon full payment, clients receive a license to use the custom AI solutions built for their business. 
                Mayday AI retains ownership of underlying technologies, frameworks, and methodologies used in development. 
                Any proprietary business data, scripts, or content provided by clients remains their property. Mayday AI 
                may use anonymized case studies and performance metrics for marketing purposes unless otherwise agreed.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">6. Payment Terms</h3>
              <p>
                Payment terms will be outlined in individual service agreements. Deposits may be required before 
                commencement of work. Recurring services may be billed monthly or as agreed upon. Late payments may 
                result in service suspension. All fees are non-refundable unless otherwise specified in writing.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">7. Limitation of Liability</h3>
              <p>
                Mayday AI shall not be liable for indirect, incidental, special, consequential, or punitive damages 
                arising from the use of our services. Our total liability shall not exceed the amounts paid by you 
                for the specific service in question. We are not responsible for third-party service outages, 
                including but not limited to telephony providers, CRM platforms, or cloud services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">8. Warranty Disclaimer</h3>
              <p>
                Services are provided "as is" without warranties of any kind, either express or implied. While we 
                strive for optimal performance, we do not guarantee specific results, conversion rates, or cost 
                savings. AI systems may require ongoing optimization and may not perform identically in all scenarios.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">9. Termination</h3>
              <p>
                Either party may terminate services with written notice as specified in individual agreements. 
                Upon termination, access to AI systems and related tools will be discontinued. Clients are 
                responsible for exporting any data they wish to retain before termination. Outstanding payments 
                remain due upon termination.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">10. Governing Law</h3>
              <p>
                These Terms and Conditions shall be governed by and construed in accordance with applicable laws. 
                Any disputes arising from these terms or our services shall be resolved through good-faith 
                negotiation, and if necessary, binding arbitration or appropriate legal proceedings.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Policy */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-primary">Privacy Policy</h2>
          
          <div className="space-y-8 text-muted-foreground">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">1. Information We Collect</h3>
              <p className="mb-3">We collect the following types of information:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Contact Information:</strong> Name, email address, phone number, and business details provided during consultations and service agreements.</li>
                <li><strong>Business Data:</strong> Information about your business operations, customer base, and workflows necessary for building custom AI solutions.</li>
                <li><strong>Call Data:</strong> Recordings and transcripts from AI voice agent interactions for quality assurance, training, and optimization purposes.</li>
                <li><strong>Usage Data:</strong> Analytics and performance metrics from AI system usage.</li>
                <li><strong>Technical Data:</strong> API credentials, integration settings, and system configuration data.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">2. How We Use Your Information</h3>
              <p className="mb-3">Your information is used to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Design, build, and deploy custom AI solutions for your business.</li>
                <li>Optimize AI performance and improve response accuracy.</li>
                <li>Provide customer support and technical assistance.</li>
                <li>Communicate about service updates, features, and relevant opportunities.</li>
                <li>Ensure compliance with legal obligations.</li>
                <li>Generate anonymized analytics for service improvement.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">3. Third-Party Integrations</h3>
              <p className="mb-3">
                Our services may integrate with third-party platforms including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>CRM systems (e.g., HubSpot, Salesforce, GoHighLevel)</li>
                <li>Scheduling tools (e.g., Calendly)</li>
                <li>AI and voice service providers</li>
                <li>Cloud infrastructure providers</li>
                <li>Communication platforms</li>
              </ul>
              <p className="mt-3">
                These integrations are necessary for service functionality. Each third-party service has its own 
                privacy policy, and we encourage you to review them. We only share data with third parties as 
                necessary to provide our services.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">4. Data Security</h3>
              <p>
                We implement industry-standard security measures to protect your information, including encryption 
                of data in transit and at rest, secure access controls, regular security assessments, and limited 
                access on a need-to-know basis. However, no method of transmission over the Internet is 100% 
                secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">5. Data Retention</h3>
              <p>
                We retain your data for as long as necessary to provide our services and fulfill legal obligations. 
                Call recordings and transcripts are retained according to agreed-upon terms in service agreements. 
                Upon service termination, data may be retained for a limited period for legal and operational 
                purposes before secure deletion.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">6. Your Rights</h3>
              <p className="mb-3">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access the personal data we hold about you.</li>
                <li>Request correction of inaccurate data.</li>
                <li>Request deletion of your data (subject to legal retention requirements).</li>
                <li>Object to certain processing activities.</li>
                <li>Request data portability where applicable.</li>
                <li>Withdraw consent where processing is based on consent.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">7. Cookies and Analytics</h3>
              <p>
                Our website may use cookies and analytics tools to improve user experience and understand how 
                visitors interact with our content. You can control cookie preferences through your browser 
                settings. Disabling cookies may affect certain website functionality.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">8. AI Voice Agent Disclosures</h3>
              <p>
                When using Mayday AI voice agents, callers will be informed they are speaking with an AI-powered 
                assistant where required by law. Conversations may be recorded for quality assurance and service 
                improvement. Clients are responsible for ensuring compliance with recording consent laws in their 
                jurisdictions.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">9. Contact Us</h3>
              <p>
                For privacy-related inquiries, data access requests, or concerns about our data practices, 
                please contact us through our website or schedule a consultation. We are committed to addressing 
                your privacy concerns promptly and transparently.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">10. Policy Updates</h3>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal 
                requirements. Significant changes will be communicated to active clients. Continued use of our 
                services after updates constitutes acceptance of the revised policy.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-16 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>Last updated: December 2024</p>
          <p className="mt-2">© {new Date().getFullYear()} Mayday AI. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndPrivacy;
