import Link from "next/link";

export const metadata = {
  title: "Privacy notice",
  description: "How TeeDee Edge Automations handles information submitted through this website.",
};

export default function PrivacyPage() {
  return (
    <main className="policy-page">
      <div className="policy-wrap">
        <Link href="/" className="policy-back">← Back to TeeDee</Link>
        <p className="eyebrow">TEEDEE EDGE AUTOMATIONS LTD / PRIVACY</p>
        <h1>Your information.<br /><em>Handled with care.</em></h1>
        <p className="policy-intro">This notice explains how information submitted through the TeeDee website is used. It applies to enquiries made through the project form on this presentation website.</p>

        <section>
          <h2>Information you submit</h2>
          <p>The project form may ask for your name, email address, organisation, the service you are interested in and a description of your requirements. Please do not submit passwords, financial account details or other sensitive information through the form.</p>
        </section>
        <section>
          <h2>Why we use it</h2>
          <p>The information is used to understand your request, review the proposed work and respond using the contact details you provide. It is not needed for any unrelated purpose to process an enquiry.</p>
        </section>
        <section>
          <h2>Website and form processing</h2>
          <p>This website is hosted on Netlify. When the project form is enabled on the live Netlify site, Netlify processes and stores form submissions as part of its form-handling service. Its own privacy terms also apply to that processing.</p>
        </section>
        <section>
          <h2>Retention and your choices</h2>
          <p>Enquiry details should be kept only for as long as they are needed to respond, manage the resulting business conversation and meet applicable record-keeping requirements. You can request access to or correction of information you submitted by contacting TeeDee.</p>
        </section>
        <section>
          <h2>Contact</h2>
          <p>For a privacy question or a request about information submitted through this website, contact <a href="mailto:info@teedeeedgeautomations.com">info@teedeeedgeautomations.com</a>.</p>
        </section>
        <p className="policy-disclaimer">This is a practical website privacy notice for the presentation build. TeeDee should review it against its actual data-handling practices and obtain appropriate legal review before treating it as its final privacy policy.</p>
        <p className="policy-updated">Last updated: 15 November 2026</p>
      </div>
    </main>
  );
}
