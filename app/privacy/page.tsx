// app/privacy/page.tsx
import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

export const metadata: Metadata = {
  title: "Privacy Policy — Detours Fleet Management",
  description: "How Detours collects, uses, and protects your data. PIPEDA compliant.",
};

const privacyHtml = `
<p><strong>Last updated: April 22, 2026</strong></p>

<p>This Privacy Policy describes how Detours (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and protects your personal information when you use our services (&ldquo;Services&rdquo;), including when you:</p>
<ul>
  <li>Visit our website at <a href="https://detours-app.com" target="_blank">https://detours-app.com</a></li>
  <li>Use the Detours web or mobile application at <a href="https://app.detours-app.com" target="_blank">https://app.detours-app.com</a></li>
  <li>Engage with us in other related ways, including marketing or events</li>
</ul>

<p><strong>Questions or concerns?</strong> If you do not agree with our policies and practices, please do not use our Services. For questions, contact us at <a href="mailto:preetjassgill11@gmail.com">preetjassgill11@gmail.com</a>.</p>

<h2>TABLE OF CONTENTS</h2>
<ol>
  <li><a href="#infocollect">What Information Do We Collect?</a></li>
  <li><a href="#infouse">How Do We Process Your Information?</a></li>
  <li><a href="#legalbases">What Legal Bases Do We Rely On?</a></li>
  <li><a href="#whoshare">When and With Whom Do We Share Your Personal Information?</a></li>
  <li><a href="#cookies">Do We Use Cookies and Other Tracking Technologies?</a></li>
  <li><a href="#inforetain">How Long Do We Keep Your Information?</a></li>
  <li><a href="#infosafe">How Do We Keep Your Information Safe?</a></li>
  <li><a href="#infominors">Do We Collect Information From Minors?</a></li>
  <li><a href="#privacyrights">What Are Your Privacy Rights?</a></li>
  <li><a href="#DNT">Controls for Do-Not-Track Features</a></li>
  <li><a href="#clausea">Detours App and Website</a></li>
  <li><a href="#policyupdates">Do We Make Updates to This Notice?</a></li>
  <li><a href="#contact">How Can You Contact Us About This Notice?</a></li>
  <li><a href="#request">How Can You Review, Update, or Delete Your Data?</a></li>
</ol>

<h2 id="infocollect">1. WHAT INFORMATION DO WE COLLECT?</h2>

<h3>Personal information you disclose to us</h3>
<p><em>We collect personal information that you provide to us.</em></p>
<p>We collect personal information that you voluntarily provide when you register on the Services, express interest in our products, participate in activities, or contact us. The personal information we may collect includes:</p>
<ul>
  <li>Names</li>
  <li>Phone numbers</li>
  <li>Email addresses</li>
  <li>Mailing addresses</li>
  <li>Job titles</li>
  <li>Usernames and passwords</li>
  <li>Contact preferences</li>
  <li>Billing addresses</li>
  <li>Vehicle information</li>
  <li>Driver licence information</li>
  <li>Location data</li>
  <li>Mobile device information</li>
</ul>

<p><strong>Sensitive Information.</strong> When necessary and with your consent or as permitted by law, we may process financial data and government identifiers.</p>

<p><strong>Payment Data.</strong> We may collect data necessary to process your payment such as your payment instrument number and security code. All payment data is handled and stored by Stripe. See their privacy notice at <a href="https://stripe.com/privacy" target="_blank">https://stripe.com/privacy</a>.</p>

<p><strong>Application Data.</strong> If you use our application, we may collect:</p>
<ul>
  <li><em>Geolocation Information.</em> We may request permission to track location-based information from your mobile device to provide location-based services. You may revoke access in your device&rsquo;s settings.</li>
  <li><em>Mobile Device Access.</em> We may request access to your mobile device&rsquo;s camera, storage, and other features. You may revoke access in your device&rsquo;s settings.</li>
  <li><em>Mobile Device Data.</em> We automatically collect device information such as device ID, model, manufacturer, operating system, browser type, and IP address.</li>
  <li><em>Push Notifications.</em> We may request to send push notifications about your account. You may opt out in your device&rsquo;s settings.</li>
</ul>

<p>All personal information you provide must be true, complete, and accurate.</p>

<h3>Information automatically collected</h3>
<p><em>Some information is collected automatically when you visit our Services.</em></p>
<p>We automatically collect certain information when you visit, use, or navigate the Services, including IP address, browser and device characteristics, operating system, language preferences, referring URLs, and other technical information. We also collect:</p>
<ul>
  <li><em>Log and Usage Data.</em> Service-related, diagnostic, usage, and performance information our servers automatically collect, including IP address, device information, browser type, date/time stamps, pages viewed, and features used.</li>
  <li><em>Device Data.</em> Information about your computer, phone, tablet, or other device used to access the Services.</li>
  <li><em>Location Data.</em> Information about your device&rsquo;s location. You may opt out by disabling Location settings on your device.</li>
</ul>

<h3>Google API</h3>
<p>Our use of information received from Google APIs adheres to the <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank">Google API Services User Data Policy</a>, including the <a href="https://developers.google.com/terms/api-services-user-data-policy#limited-use" target="_blank">Limited Use requirements</a>.</p>

<h2 id="infouse">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
<p><em>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law.</em></p>
<p>We process your personal information for the following reasons:</p>
<ul>
  <li><strong>Account creation and authentication.</strong> To allow you to create and log in to your account.</li>
  <li><strong>Service delivery.</strong> To provide you with the requested services.</li>
  <li><strong>User support.</strong> To respond to your inquiries and resolve issues.</li>
  <li><strong>Administrative communications.</strong> To send details about products, services, and policy changes.</li>
  <li><strong>Order fulfillment.</strong> To fulfill and manage your orders and payments.</li>
  <li><strong>User-to-user communications.</strong> To facilitate communication between users where applicable.</li>
  <li><strong>Marketing communications.</strong> With your consent, to send marketing communications. You may opt out at any time.</li>
  <li><strong>Security.</strong> To keep our Services safe and prevent fraud.</li>
  <li><strong>Improvement.</strong> To identify usage trends and improve our Services.</li>
  <li><strong>Legal compliance.</strong> To comply with legal obligations and respond to legal requests.</li>
</ul>

<h2 id="legalbases">3. WHAT LEGAL BASES DO WE RELY ON?</h2>
<p><em>We only process your personal information when we have a valid legal reason to do so under applicable law.</em></p>
<p>We may process your information where you have given specific consent, or where your consent can be implied. You may withdraw your consent at any time by contacting us.</p>
<p>In some exceptional cases, we may process your information without consent as permitted by law, including:</p>
<ul>
  <li>Where collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</li>
  <li>For investigations and fraud detection and prevention</li>
  <li>For business transactions where certain conditions are met</li>
  <li>To comply with a subpoena, warrant, or court order</li>
  <li>If the information is publicly available and specified by regulation</li>
  <li>For approved research or statistics projects subject to ethics oversight</li>
</ul>

<h2 id="whoshare">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
<p><em>We may share information in specific situations and with specific third parties.</em></p>
<ul>
  <li><strong>Business Transfers.</strong> We may share your information in connection with a merger, sale, financing, or acquisition of all or part of our business.</li>
  <li><strong>Google Maps Platform APIs.</strong> We may share your information with Google Maps Platform APIs. We cache your location on your device for up to one (1) month. You may revoke consent by contacting us.</li>
  <li><strong>Business Partners.</strong> We may share your information with business partners to offer certain products, services, or promotions.</li>
</ul>

<h2 id="cookies">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
<p><em>We may use cookies and other tracking technologies to collect and store your information.</em></p>
<p>We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. These help maintain security, prevent crashes, save preferences, and support basic site functions.</p>
<p>We also permit third parties and service providers to use tracking technologies on our Services for analytics purposes. Specific information about how to refuse certain cookies is set out in our Cookie Notice.</p>

<h2 id="inforetain">6. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
<p><em>We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless otherwise required by law.</em></p>
<p>We will only keep your personal information for as long as necessary, unless a longer retention period is required by law (such as tax, accounting, or other legal requirements). We will not keep your personal information for longer than twelve (12) months past the termination of your account.</p>
<p>When we have no ongoing legitimate business need to process your personal information, we will delete or anonymize it, or securely store and isolate it until deletion is possible.</p>

<h2 id="infosafe">7. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
<p><em>We aim to protect your personal information through organizational and technical security measures.</em></p>
<p>We have implemented appropriate technical and organizational security measures to protect your personal information. However, no electronic transmission over the Internet or information storage technology can be guaranteed 100% secure. Transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</p>

<h2 id="infominors">8. DO WE COLLECT INFORMATION FROM MINORS?</h2>
<p><em>We do not knowingly collect data from or market to children under 18 years of age.</em></p>
<p>We do not knowingly collect, solicit data from, or market to children under 18 years of age. By using the Services, you represent that you are at least 18, or that you are the parent or guardian of a minor and consent to such minor&rsquo;s use of the Services. If we learn that personal information from users under 18 has been collected, we will deactivate the account and promptly delete such data. If you become aware of any such data, please contact us at <a href="mailto:preetjassgill11@gmail.com">preetjassgill11@gmail.com</a>.</p>

<h2 id="privacyrights">9. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
<p><em>In Canada, you have rights that allow you greater access to and control over your personal information.</em></p>
<p>Under applicable data protection laws (including PIPEDA), you have the right to:</p>
<ul>
  <li>Request access to and obtain a copy of your personal information</li>
  <li>Request rectification or erasure of your personal information</li>
  <li>Restrict the processing of your personal information</li>
  <li>Data portability where applicable</li>
  <li>Object to the processing of your personal information</li>
</ul>
<p>To exercise these rights, contact us using the details in Section 13.</p>

<h3>Withdrawing your consent</h3>
<p>If we rely on your consent to process your personal information, you may withdraw consent at any time by contacting us. Withdrawal does not affect the lawfulness of processing before withdrawal.</p>

<h3>Account Information</h3>
<p>To review or change your account information or terminate your account, you may:</p>
<ul>
  <li>Log in to your account settings and update your user account</li>
  <li>Contact us using the contact information provided in Section 13</li>
</ul>
<p>Upon your request to terminate your account, we will deactivate or delete your account from our active databases. We may retain some information to prevent fraud, troubleshoot problems, or comply with legal requirements.</p>

<p><strong>Cookies and similar technologies:</strong> Most web browsers accept cookies by default. You can usually set your browser to remove or reject cookies, though this may affect certain features of our Services.</p>
<p>For questions about your privacy rights, email us at <a href="mailto:preetjassgill11@gmail.com">preetjassgill11@gmail.com</a>.</p>

<h2 id="DNT">10. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
<p>Most web browsers and some mobile operating systems include a Do-Not-Track (&ldquo;DNT&rdquo;) feature. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals. If a standard is adopted that we must follow, we will inform you in a revised version of this Privacy Policy.</p>

<h2 id="clausea">11. DETOURS APP AND WEBSITE</h2>
<p>This policy applies to both the Detours marketing website at <a href="https://detours-app.com" target="_blank">detours-app.com</a> and the Detours web application at <a href="https://app.detours-app.com" target="_blank">app.detours-app.com</a>.</p>

<h2 id="policyupdates">12. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
<p><em>Yes, we will update this notice as necessary to stay compliant with relevant laws.</em></p>
<p>We may update this Privacy Policy from time to time. The updated version will be indicated by an updated date at the top of this page. If we make material changes, we may notify you by posting a prominent notice or sending you a notification directly. We encourage you to review this Privacy Policy frequently.</p>

<h2 id="contact">13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
<p>If you have questions or comments about this notice, you may email us at <a href="mailto:preetjassgill11@gmail.com">preetjassgill11@gmail.com</a> or contact us by post at:</p>
<p>
  Detours<br>
  52 Bearberry<br>
  Minesing, Ontario L9X2E1<br>
  Canada
</p>

<h2 id="request">14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
<p>Based on applicable laws, you may have the right to request access to the personal information we collect from you, request corrections, or request deletion. You may also have the right to withdraw your consent to our processing of your personal information.</p>
<p>To submit a data access, correction, or deletion request, please email us at <a href="mailto:preetjassgill11@gmail.com">preetjassgill11@gmail.com</a> with the subject line &ldquo;Data Request&rdquo; and a description of your request. We will respond within 30 days in accordance with applicable data protection laws.</p>
`;

export default function PrivacyPage() {
  return (
    <>
      <div className="relative isolate max-w-3xl mx-auto px-8 lg:px-12 pt-10 pb-28">
        <AnimatedSection instant className="mb-12 pt-1">
          <p
            className="font-mono text-xs uppercase tracking-[0.2em] mb-5"
            style={{ color: "#ff7a1a" }}
          >
            Legal
          </p>
          <h1
            className="font-display leading-[1.08] mb-4"
            style={{ fontSize: "clamp(2.4rem, 5vw, 3.5rem)" }}
          >
            Privacy Policy
          </h1>
          <p className="text-text-muted text-sm">
            Last updated: April 22, 2026 &middot; Governing law: Ontario, Canada (PIPEDA)
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <GlassCard hover={false} className="p-8">
            <div
              className="privacy-body"
              style={{ color: "#f1f5f9", lineHeight: 1.7, fontSize: 14 }}
              dangerouslySetInnerHTML={{ __html: privacyHtml }}
            />
          </GlassCard>
        </AnimatedSection>
      </div>
    </>
  );
}
