import Link from "next/link";

export const metadata = {
  title: "Enquiry received",
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <main className="confirmation-page">
      <div className="confirmation-card">
        <p className="eyebrow">TEEDEE / ENQUIRY RECEIVED</p>
        <h1>Thank you.<br />We have your note.</h1>
        <p>Your enquiry has been submitted. The team can review the details and follow up using the contact information you provided.</p>
        <p className="confirmation-note">If your request is urgent, you can reach the team directly at <a href="tel:+2348068999442">+234 806 899 9442</a>.</p>
        <Link href="/" className="button">Back to the website <span aria-hidden="true">↗</span></Link>
      </div>
    </main>
  );
}
