import Link from "next/link";

export default function NotFound() {
  return (
    <main className="confirmation-page">
      <div className="confirmation-card">
        <p className="eyebrow">TEEDEE / 404</p>
        <h1>This page<br /><em>isn't here.</em></h1>
        <p>The address may have changed, or the page may not be part of this website.</p>
        <Link href="/" className="button">Return to the website <span aria-hidden="true">↗</span></Link>
      </div>
    </main>
  );
}
