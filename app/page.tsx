import { ArrowDownRight, ArrowUpRight, Cable, CircuitBoard, ScanLine } from "lucide-react";

const capabilities = [
  { n: "01", icon: <CircuitBoard size={21} />, title: "Automation & control", text: "Connected systems designed to make environments more responsive, efficient and easier to manage." },
  { n: "02", icon: <ScanLine size={21} />, title: "Security & visibility", text: "Integrated approaches to monitoring, access and situational awareness across the spaces that matter." },
  { n: "03", icon: <Cable size={21} />, title: "Infrastructure integration", text: "The technical thinking and coordination required to make individual systems work together." },
];

const steps = [
  ["01", "Understand", "We begin with the site, the people who use it and the outcome the system needs to deliver."],
  ["02", "Design", "Requirements become a practical scope, a considered design and a clear delivery plan."],
  ["03", "Integrate", "Installation and configuration are coordinated around quality, safety and the realities on site."],
  ["04", "Support", "Handover should leave people informed, equipped and clear on what happens next."],
];

export default function Home() {
  return (
    <main>
      <div className="notice">Concept preview · Company details and service scope awaiting final approval</div>
      <div className="wrap">
        <header className="header">
          <a className="brand" href="#" aria-label="TeeDee Edge Automations home"><span className="brand-mark"><span>TD</span></span><span>TEEDEE<span style={{color:"var(--lime)"}}>.</span></span></a>
          <nav className="nav" aria-label="Main navigation">
            <a href="#capabilities">Capabilities</a><a href="#approach">Approach</a><a href="#contact">Contact</a>
          </nav>
          <a className="nav-cta" href="#contact">Start a conversation <ArrowUpRight size={14}/></a>
          <details className="mobile-menu">
            <summary aria-label="Open navigation">Menu</summary>
            <nav aria-label="Mobile navigation">
              <a href="#capabilities">Capabilities</a>
              <a href="#approach">Approach</a>
              <a href="#contact">Contact</a>
            </nav>
          </details>
        </header>

        <section className="hero">
          <div className="hero-copy">
            <span className="eyebrow">TeeDee Edge Automations</span>
            <h1>Systems that work <span>better together.</span></h1>
            <p>Thoughtful integration. Practical engineering. Technology shaped around the way people, places and businesses actually operate.</p>
            <div className="hero-actions">
              <a className="button" href="#contact">Discuss a project <ArrowUpRight size={15}/></a>
              <a className="text-link" href="#capabilities">Explore our approach <ArrowDownRight size={14}/></a>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract illustration of connected systems">
            <div className="orbit"></div><div className="orbit two"></div><div className="orbit three"></div>
            <div className="core"></div><i className="node n1"></i><i className="node n2"></i><i className="node n3"></i>
            <span className="art-label">CONNECTED BY DESIGN / 001</span>
          </div>
          <span className="hero-index">01 — INTEGRATION, WITH INTENTION</span>
        </section>

        <section className="section" id="capabilities">
          <div className="section-head">
            <div><span className="eyebrow">What we focus on</span><h2>Complex systems.<br/>Clear outcomes.</h2></div>
            <p className="section-intro">Technology creates value when the parts work as one. Our proposed service story is built around integration, reliability and the experience of the people using the result.</p>
          </div>
          <div className="capabilities">
            {capabilities.map((item) => <article className="capability" key={item.n}>
              <span className="cap-number">{item.n} / CAPABILITY</span><div className="cap-icon">{item.icon}</div>
              <h3>{item.title}</h3><p>{item.text}</p>
            </article>)}
          </div>
        </section>
      </div>

      <section className="statement" id="approach">
        <div className="wrap">
          <span className="eyebrow">The TeeDee approach</span>
          <h2>Good technology is not just installed. <span>It is understood, integrated and looked after.</span></h2>
          <p>Every environment has its own constraints, priorities and people. The work starts by understanding those realities, then shaping a solution that makes sense beyond the installation day.</p>
        </div>
      </section>

      <div className="wrap">
        <section className="section">
          <div className="section-head">
            <div><span className="eyebrow">From brief to handover</span><h2>A process built<br/>around the details.</h2></div>
            <p className="section-intro">A considered delivery process helps reduce uncertainty, keep stakeholders informed and make the finished system easier to own.</p>
          </div>
          <div className="process">
            {steps.map(([n,title,text]) => <article className="step" key={n}><b>{n} /</b><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-copy">
            <span className="eyebrow">Start with a conversation</span>
            <h2>What are you trying to make work better?</h2>
            <p>Share a little about your environment, challenge or project. The team can use that context to understand the next useful conversation.</p>
          </div>
          <form className="form" name="project-enquiry" method="POST" data-netlify="true" action="/thank-you">
            <input type="hidden" name="form-name" value="project-enquiry"/>
            <div className="field"><label htmlFor="name">Your name</label><input id="name" name="name" autoComplete="name" required placeholder="Name"/></div>
            <div className="field"><label htmlFor="organisation">Organisation</label><input id="organisation" name="organisation" autoComplete="organization" placeholder="Company or organisation"/></div>
            <div className="field"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" autoComplete="email" required placeholder="you@company.com"/></div>
            <div className="field"><label htmlFor="interest">What is this about?</label><select id="interest" name="interest" defaultValue=""><option value="" disabled>Select an area</option><option>Automation and control</option><option>Security and monitoring</option><option>Infrastructure integration</option><option>General enquiry</option></select></div>
            <div className="field full"><label htmlFor="message">A little about the project</label><textarea id="message" name="message" required placeholder="What are you looking to achieve?"/></div>
            <p className="form-note">By submitting, you agree that TeeDee may use these details to respond to your enquiry. A privacy notice and named data controller must be approved before this form is enabled for production.</p>
            <div className="field full"><button className="button" type="submit">Send enquiry <ArrowUpRight size={15}/></button></div>
          </form>
        </section>
      </div>

      <footer className="wrap footer">
        <div><strong>TEEDEE EDGE AUTOMATIONS</strong><br/><span>Integrated systems. Thoughtfully delivered.</span></div>
        <div className="footer-links"><a href="#capabilities">Capabilities</a><a href="#approach">Approach</a><a href="#contact">Contact</a></div>
        <span>© {new Date().getFullYear()} TeeDee Edge Automations</span>
      </footer>
    </main>
  );
}
