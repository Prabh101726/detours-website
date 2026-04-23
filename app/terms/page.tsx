// app/terms/page.tsx
import type { Metadata } from "next";
import AnimatedSection from "@/components/AnimatedSection";
import GlassCard from "@/components/GlassCard";

export const metadata: Metadata = {
  title: "Terms of Service — Detours Fleet Management",
  description: "Terms governing your use of the Detours fleet management platform.",
};

const termsHtml = `
<h2>AGREEMENT TO OUR LEGAL TERMS</h2>
<p>We are <strong>Detours</strong> ("Detours," "we," "us," "our"). We operate the Detours fleet management platform, as well as any other related products and services that refer or link to these legal terms (the "Legal Terms") (collectively, the "Services").</p>
<p>You can contact us by email at <a href="mailto:preetjassgill11@gmail.com">preetjassgill11@gmail.com</a> or by mail to: 52 Bearberry, Minesing, Ontario L9X2E1, Canada.</p>
<p>These Legal Terms constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you"), and Detours, concerning your access to and use of the Services. You agree that by accessing the Services, you have read, understood, and agreed to be bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.</p>
<p>Supplemental terms and conditions or documents that may be posted on the Services from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Legal Terms at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of these Legal Terms, and you waive any right to receive specific notice of each such change. It is your responsibility to periodically review these Legal Terms to stay informed of updates. You will be subject to, and will be deemed to have been made aware of and to have accepted, the changes in any revised Legal Terms by your continued use of the Services after the date such revised Legal Terms are posted.</p>
<p>We recommend that you print a copy of these Legal Terms for your records.</p>

<h2>TABLE OF CONTENTS</h2>
<ol>
  <li><a href="#services">OUR SERVICES</a></li>
  <li><a href="#ip">INTELLECTUAL PROPERTY RIGHTS</a></li>
  <li><a href="#representations">USER REPRESENTATIONS</a></li>
  <li><a href="#prohibited">PROHIBITED ACTIVITIES</a></li>
  <li><a href="#contributions">USER GENERATED CONTRIBUTIONS</a></li>
  <li><a href="#license">CONTRIBUTION LICENSE</a></li>
  <li><a href="#management">SERVICES MANAGEMENT</a></li>
  <li><a href="#termination">TERM AND TERMINATION</a></li>
  <li><a href="#modifications">MODIFICATIONS AND INTERRUPTIONS</a></li>
  <li><a href="#governing">GOVERNING LAW</a></li>
  <li><a href="#disputes">DISPUTE RESOLUTION</a></li>
  <li><a href="#corrections">CORRECTIONS</a></li>
  <li><a href="#disclaimer">DISCLAIMER</a></li>
  <li><a href="#liability">LIMITATIONS OF LIABILITY</a></li>
  <li><a href="#indemnification">INDEMNIFICATION</a></li>
  <li><a href="#userdata">USER DATA</a></li>
  <li><a href="#electronic">ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</a></li>
  <li><a href="#misc">MISCELLANEOUS</a></li>
  <li><a href="#contact">CONTACT US</a></li>
</ol>

<h2 id="services">1. OUR SERVICES</h2>
<p>The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.</p>

<h2 id="ip">2. INTELLECTUAL PROPERTY RIGHTS</h2>
<h3>Our intellectual property</h3>
<p>We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").</p>
<p>Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties around the world.</p>
<p>The Content and Marks are provided in or through the Services "AS IS" for your personal, non-commercial use or internal business purpose only.</p>

<h3>Your use of our Services</h3>
<p>Subject to your compliance with these Legal Terms, including the "PROHIBITED ACTIVITIES" section below, we grant you a non-exclusive, non-transferable, revocable license to:</p>
<ul>
  <li>access the Services; and</li>
  <li>download or print a copy of any portion of the Content to which you have properly gained access,</li>
</ul>
<p>solely for your personal, non-commercial use or internal business purpose.</p>
<p>Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.</p>
<p>If you wish to make any use of the Services, Content, or Marks other than as set out in this section, please address your request to <a href="mailto:preetjassgill11@gmail.com">preetjassgill11@gmail.com</a>. If we ever grant you permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.</p>
<p>We reserve all rights not expressly granted to you in and to the Services, Content, and Marks. Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.</p>

<h3>Your submissions</h3>
<p>By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services ("Submissions"), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.</p>
<p>You are responsible for what you post or upload. By sending us Submissions through any part of the Services you:</p>
<ul>
  <li>confirm that you have read and agree with our "PROHIBITED ACTIVITIES" and will not post, send, publish, upload, or transmit through the Services any Submission that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening to any person or group, sexually explicit, false, inaccurate, deceitful, or misleading;</li>
  <li>to the extent permissible by applicable law, waive any and all moral rights to any such Submission;</li>
  <li>warrant that any such Submission is original to you or that you have the necessary rights and licenses to submit such Submissions and that you have full authority to grant us the above-mentioned rights; and</li>
  <li>warrant and represent that your Submissions do not constitute confidential information.</li>
</ul>
<p>You are solely responsible for your Submissions and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of this section, any third party's intellectual property rights, or applicable law.</p>

<h2 id="representations">3. USER REPRESENTATIONS</h2>
<p>By using the Services, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Legal Terms; (2) you are not a minor in the jurisdiction in which you reside; (3) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (4) you will not use the Services for any illegal or unauthorized purpose; and (5) your use of the Services will not violate any applicable law or regulation.</p>
<p>If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).</p>

<h2 id="prohibited">4. PROHIBITED ACTIVITIES</h2>
<p>You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
<p>As a user of the Services, you agree not to:</p>
<ul>
  <li>Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
  <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
  <li>Circumvent, disable, or otherwise interfere with security-related features of the Services.</li>
  <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.</li>
  <li>Use any information obtained from the Services in order to harass, abuse, or harm another person.</li>
  <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
  <li>Use the Services in a manner inconsistent with any applicable laws or regulations.</li>
  <li>Engage in unauthorized framing of or linking to the Services.</li>
  <li>Upload or transmit viruses, Trojan horses, or other material that interferes with any party's uninterrupted use and enjoyment of the Services.</li>
  <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.</li>
  <li>Delete the copyright or other proprietary rights notice from any Content.</li>
  <li>Attempt to impersonate another user or person or use the username of another user.</li>
  <li>Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.</li>
  <li>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.</li>
  <li>Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services.</li>
  <li>Copy or adapt the Services' software, including but not limited to HTML, JavaScript, or other code.</li>
  <li>Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.</li>
  <li>Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email.</li>
  <li>Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise without our consent.</li>
</ul>

<h2 id="contributions">5. USER GENERATED CONTRIBUTIONS</h2>
<p>The Services do not offer users the ability to submit or post public content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions").</p>
<p>When you create or make available any Contributions, you thereby represent and warrant that:</p>
<ul>
  <li>the creation, distribution, transmission, public display, or performance of your Contributions does not infringe the proprietary rights of any third party;</li>
  <li>you are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us to use your Contributions;</li>
  <li>your Contributions are not false, inaccurate, or misleading;</li>
  <li>your Contributions are not unsolicited or unauthorized advertising, promotional materials, spam, or any other form of solicitation; and</li>
  <li>your Contributions do not violate any applicable law, regulation, or rule.</li>
</ul>

<h2 id="license">6. CONTRIBUTION LICENSE</h2>
<p>You and Detours agree that we may access, store, process, and use any information and personal data that you provide and your choices (including settings). By submitting suggestions or other feedback regarding the Services, you agree that we can use and share such feedback for any purpose without compensation to you.</p>
<p>We do not assert any ownership over your Contributions. You retain full ownership of all of your Contributions and any intellectual property rights or other proprietary rights associated with your Contributions. We are not liable for any statements or representations in your Contributions provided by you in any area on the Services. You are solely responsible for your Contributions to the Services and you expressly agree to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your Contributions.</p>

<h2 id="management">7. SERVICES MANAGEMENT</h2>
<p>We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.</p>

<h2 id="termination">8. TERM AND TERMINATION</h2>
<p>These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.</p>
<p>If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.</p>

<h2 id="modifications">9. MODIFICATIONS AND INTERRUPTIONS</h2>
<p>We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.</p>
<p>We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. Nothing in these Legal Terms will be construed to obligate us to maintain and support the Services or to supply any corrections, updates, or releases in connection therewith.</p>

<h2 id="governing">10. GOVERNING LAW</h2>
<p>These Legal Terms shall be governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein. You irrevocably consent that the courts of Ontario shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Legal Terms.</p>

<h2 id="disputes">11. DISPUTE RESOLUTION</h2>
<h3>Informal Negotiations</h3>
<p>To expedite resolution and control the cost of any dispute, controversy, or claim related to these Legal Terms (each a "Dispute"), the parties agree to first attempt to negotiate any Dispute informally for at least 30 days before initiating any formal proceedings. Such informal negotiations commence upon written notice from one party to the other.</p>
<h3>Governing Jurisdiction</h3>
<p>If informal negotiations fail, any Dispute shall be submitted to the exclusive jurisdiction of the courts of Ontario, Canada. The language of the proceedings shall be English. The governing law shall be the substantive law of Ontario, Canada.</p>
<h3>Restrictions</h3>
<p>The parties agree that any proceedings shall be limited to the Dispute between the parties individually. To the full extent permitted by law: (a) no proceeding shall be joined with any other proceeding; (b) there is no right or authority for any Dispute to be heard on a class-action basis; and (c) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.</p>

<h2 id="corrections">12. CORRECTIONS</h2>
<p>There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.</p>

<h2 id="disclaimer">13. DISCLAIMER</h2>
<p>THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES.</p>

<h2 id="liability">14. LIMITATIONS OF LIABILITY</h2>
<p>IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE LESSER OF THE AMOUNT PAID, IF ANY, BY YOU TO US IN THE THREE (3) MONTHS PRIOR TO THE CLAIM OR $100 CAD, WHICHEVER IS GREATER. CERTAIN CANADIAN PROVINCIAL LAWS DO NOT ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.</p>

<h2 id="indemnification">15. INDEMNIFICATION</h2>
<p>You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of: (1) use of the Services; (2) breach of these Legal Terms; (3) any breach of your representations and warranties set forth in these Legal Terms; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Services with whom you connected via the Services. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.</p>

<h2 id="userdata">16. USER DATA</h2>
<p>We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data.</p>

<h2 id="electronic">17. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</h2>
<p>Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES.</p>

<h2 id="misc">18. MISCELLANEOUS</h2>
<p>These Legal Terms and any policies or operating rules posted by us on the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services.</p>

<h2 id="contact">19. CONTACT US</h2>
<p>In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:</p>
<p>
  <strong>Detours</strong><br>
  52 Bearberry<br>
  Minesing, Ontario L9X2E1<br>
  Canada<br>
  <a href="mailto:preetjassgill11@gmail.com">preetjassgill11@gmail.com</a>
</p>
`;

export default function TermsPage() {
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
            Terms of Service
          </h1>
          <p className="text-text-muted text-sm">
            Last updated: April 22, 2026 &middot; Governing law: Ontario, Canada
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <GlassCard hover={false} className="p-8">
            <div
              className="terms-body"
              style={{ color: "#f1f5f9", lineHeight: 1.7, fontSize: 14 }}
              dangerouslySetInnerHTML={{ __html: termsHtml }}
            />
          </GlassCard>
        </AnimatedSection>
      </div>
    </>
  );
}
