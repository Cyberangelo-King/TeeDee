import Link from "next/link";

export default function ThankYou() {
  return <main style={{minHeight:"100vh",display:"grid",placeItems:"center",padding:24,background:"#111714",color:"#f3f2ec",fontFamily:"Manrope, sans-serif"}}>
    <div style={{maxWidth:560}}>
      <p style={{fontFamily:"monospace",letterSpacing:".14em",color:"#c5f36a",fontSize:11}}>TEEDEE / ENQUIRY RECEIVED</p>
      <h1 style={{fontSize:"clamp(42px,8vw,72px)",letterSpacing:"-.07em",lineHeight:1}}>Thank you.<br/>We have your note.</h1>
      <p style={{color:"#aab5aa",lineHeight:1.8}}>Your enquiry has been submitted. The team can review the details and follow up using the contact information you provided.</p>
      <Link href="/" style={{display:"inline-block",marginTop:24,background:"#c5f36a",color:"#111714",padding:"14px 18px",fontSize:12,fontWeight:800}}>Back to home ↗</Link>
    </div>
  </main>;
}
