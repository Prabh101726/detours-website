// app/terms/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Detours Fleet Management",
  description: "Terms governing your use of the Detours fleet management platform.",
};

const termsHtml = `
<div style="color:#f1f5f9">

<h2>ACCEPTANCE OF TERMS</h2>
<p>Detours (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) operates a fleet management platform and related services. By accessing or using our Services, you confirm that you have read, understood, and accept these terms in full. If you disagree with any part of these terms, you must stop using the Services immediately.</p>
<p>We may update these terms at any time. The &ldquo;Last Updated&rdquo; date will reflect any changes. Continued use of the Services after updates means you accept the revised terms.</p>

<h2>TABLE OF CONTENTS</h2>
<ol>
  <li><a href="#services">Our Services</a></li>
  <li><a href="#ip">Intellectual Property</a></li>
  <li><a href="#representations">User Representations</a></li>
  <li><a href="#prohibited">Prohibited Activities</a></li>
  <li><a href="#contributions">User Contributions</a></li>
  <li><a href="#license">Contribution License</a></li>
  <li><a href="#management">Service Management</a></li>
  <li><a href="#termination">Term &amp; Termination</a></li>
  <li><a href="#modifications">Changes &amp; Interruptions</a></li>
  <li><a href="#governing">Governing Law</a></li>
  <li><a href="#disputes">Dispute Resolution</a></li>
  <li><a href="#corrections">Corrections</a></li>
  <li><a href="#disclaimer">Disclaimer</a></li>
  <li><a href="#liability">Limitation of Liability</a></li>
  <li><a href="#indemnification">Indemnification</a></li>
  <li><a href="#userdata">Your Data</a></li>
  <li><a href="#electronic">Electronic Communications</a></li>
  <li><a href="#misc">General Provisions</a></li>
  <li><a href="#contact">Contact</a></li>
</ol>

<h2 id="services">1. OUR SERVICES</h2>
<p>Our Services are intended for lawful use only. If you access the Services from outside Canada, you are responsible for ensuring your use complies with your local laws.</p>

<h2 id="ip">2. INTELLECTUAL PROPERTY</h2>
<h3>Our Content</h3>
<p>All content within the Services &mdash; including code, design, text, graphics, audio, video, and branding &mdash; belongs to Detours or its licensors and is protected by applicable intellectual property laws. You are granted a limited, personal, non-commercial license to access and use the Services. Any other use requires our prior written consent.</p>
<h3>Your Submissions</h3>
<p>Any feedback, ideas, or suggestions you send us become our property. By submitting them, you assign all related rights to us and acknowledge you will receive no compensation for such submissions.</p>
<p>You are solely responsible for anything you submit and agree not to submit anything unlawful, harmful, false, or infringing on another party&rsquo;s rights.</p>

<h2 id="representations">3. USER REPRESENTATIONS</h2>
<p>By using our Services, you confirm that:</p>
<ul>
  <li>You have the legal capacity to agree to these terms</li>
  <li>You are not a minor in your jurisdiction</li>
  <li>You will not use automated tools (bots, scripts, etc.) to access the Services</li>
  <li>Your use will comply with all applicable laws</li>
</ul>

<h2 id="prohibited">4. PROHIBITED ACTIVITIES</h2>
<p>You agree not to:</p>
<ul>
  <li>Scrape or harvest data from the Services without written permission</li>
  <li>Attempt to obtain other users&rsquo; passwords or sensitive information</li>
  <li>Interfere with or bypass security features</li>
  <li>Upload malicious software or harmful code</li>
  <li>Impersonate another user or person</li>
  <li>Use the Services to harass, harm, or stalk anyone</li>
  <li>Use automated tools to interact with the Services</li>
  <li>Reverse engineer or decompile any part of the Services</li>
  <li>Compete with Detours using our own platform without consent</li>
  <li>Violate any applicable laws or regulations</li>
</ul>

<h2 id="contributions">5. USER CONTRIBUTIONS</h2>
<p>If you submit any content to the Services, you represent that:</p>
<ul>
  <li>You own the content or have the rights to share it</li>
  <li>The content does not infringe on any third party&rsquo;s rights</li>
  <li>The content is accurate and not misleading</li>
  <li>The content complies with all applicable laws</li>
</ul>

<h2 id="license">6. CONTRIBUTION LICENSE</h2>
<p>You retain ownership of any content you contribute. By sharing feedback or suggestions, you grant us the right to use them freely without compensation. We are not responsible for statements made in your contributions.</p>

<h2 id="management">7. SERVICE MANAGEMENT</h2>
<p>We reserve the right to monitor the Services, take action against violations, remove content, restrict access, and manage the platform as we see fit to protect its integrity and our rights.</p>

<h2 id="termination">8. TERM &amp; TERMINATION</h2>
<p>These terms remain in effect as long as you use the Services. We may suspend or terminate your access at any time, for any reason, without notice. If your account is terminated, you may not create a new account without our permission.</p>

<h2 id="modifications">9. CHANGES &amp; INTERRUPTIONS</h2>
<p>We may modify, suspend, or discontinue the Services at any time without notice or liability. We do not guarantee uninterrupted availability of the Services.</p>

<h2 id="governing">10. GOVERNING LAW</h2>
<p>These terms are governed by the laws of the Province of Ontario and applicable federal laws of Canada. Any legal disputes will be handled exclusively by the courts of Ontario.</p>

<h2 id="disputes">11. DISPUTE RESOLUTION</h2>
<h3>Informal Resolution</h3>
<p>Before pursuing formal legal action, both parties agree to attempt to resolve any dispute informally for at least 30 days from the date written notice is given.</p>
<h3>Formal Proceedings</h3>
<p>If informal resolution fails, disputes will be submitted to the courts of Ontario, Canada, conducted in English under Ontario law.</p>
<h3>No Class Actions</h3>
<p>All disputes must be handled on an individual basis. No class-action or representative proceedings are permitted.</p>

<h2 id="corrections">12. CORRECTIONS</h2>
<p>We may correct errors, inaccuracies, or outdated information on the Services at any time without prior notice.</p>

<h2 id="disclaimer">13. DISCLAIMER</h2>
<p>THE SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; WITHOUT ANY WARRANTIES OF ANY KIND. WE DISCLAIM ALL IMPLIED WARRANTIES, INCLUDING MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. WE ARE NOT RESPONSIBLE FOR ERRORS, INACCURACIES, UNAUTHORIZED ACCESS, SERVICE INTERRUPTIONS, OR ANY DAMAGES RESULTING FROM YOUR USE OF THE SERVICES.</p>

<h2 id="liability">14. LIMITATION OF LIABILITY</h2>
<p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY TO YOU FOR ANY CLAIM WILL NOT EXCEED THE GREATER OF THE AMOUNT YOU PAID US IN THE THREE MONTHS PRIOR TO THE CLAIM OR $100 CAD. WE ARE NOT LIABLE FOR INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES OF ANY KIND. SOME PROVINCES MAY NOT ALLOW THESE LIMITATIONS, SO THEY MAY NOT FULLY APPLY TO YOU.</p>

<h2 id="indemnification">15. INDEMNIFICATION</h2>
<p>You agree to defend, indemnify, and hold harmless Detours and its affiliates, employees, and partners from any claims, damages, or costs (including legal fees) arising from your use of the Services, breach of these terms, or violation of any third party&rsquo;s rights.</p>

<h2 id="userdata">16. YOUR DATA</h2>
<p>We store data you provide in connection with your use of the Services. While we perform routine backups, you are ultimately responsible for your own data. We are not liable for any data loss or corruption.</p>

<h2 id="electronic">17. ELECTRONIC COMMUNICATIONS</h2>
<p>By using our Services, you consent to receiving communications electronically. You agree that electronic agreements, notices, and records have the same legal effect as written ones.</p>

<h2 id="misc">18. GENERAL PROVISIONS</h2>
<p>These terms represent the entire agreement between you and Detours. If any provision is found unenforceable, the remaining provisions remain in effect. We may transfer our rights and obligations under these terms to another party at any time. No partnership, agency, or employment relationship is created by these terms.</p>

<h2 id="contact">19. CONTACT US</h2>
<p>For questions or concerns, reach us at:</p>
<p>
  <strong>Detours</strong><br>
  Barrie, Ontario, Canada<br>
  <a href="mailto:preetjassgill11@gmail.com">preetjassgill11@gmail.com</a>
</p>

</div>
`;

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-8 lg:px-12 pt-10 pb-28">
      <div className="mb-12 pt-1">
        <p
          className="font-mono text-xs uppercase tracking-[0.2em] mb-5"
          style={{ color: "#ff7a1a" }}
        >
          Legal
        </p>
        <h1
          className="font-display leading-[1.08] mb-4"
          style={{ fontSize: "clamp(2.4rem, 5vw, 3.5rem)", color: "#eef2ff" }}
        >
          Terms of Service
        </h1>
        <p style={{ color: "#64748b", fontSize: 14 }}>
          Last updated: April 22, 2026 &middot; Governing law: Ontario, Canada
        </p>
      </div>

      <div
        className="glass p-8 terms-body"
        style={{ color: "#f1f5f9", lineHeight: 1.7, fontSize: 14 }}
        dangerouslySetInnerHTML={{ __html: termsHtml }}
      />
    </div>
  );
}
