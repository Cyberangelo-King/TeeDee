import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Camera,
  Check,
  CircuitBoard,
  ClipboardCheck,
  Cable,
  Sun,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Camera,
    title: "Security & surveillance",
    description:
      "A clearer view of the spaces that matter, with surveillance systems planned around coverage, usability and dependable day-to-day operation.",
    tags: ["CCTV systems", "Remote visibility", "System integration"],
  },
  {
    number: "02",
    icon: Cable,
    title: "Network infrastructure",
    description:
      "The connected foundation behind modern workplaces: structured cabling, network equipment and reliable links between devices and spaces.",
    tags: ["Structured cabling", "Connectivity", "Network setup"],
  },
  {
    number: "03",
    icon: Sun,
    title: "Power & energy systems",
    description:
      "Practical power solutions designed around the demands of the environment, equipment and people who depend on them.",
    tags: ["Solar systems", "Backup power", "Power planning"],
  },
  {
    number: "04",
    icon: Workflow,
    title: "Integrated technology",
    description:
      "Bringing separate technologies into a more coherent system, with the right configuration, documentation and handover.",
    tags: ["System coordination", "Configuration", "Technical support"],
  },
];

const process = [
  ["01", "Understand", "We learn how the site works, what matters to you and what the system needs to achieve."],
  ["02", "Plan", "We translate the brief into a practical scope, site requirements and a considered delivery plan."],
  ["03", "Deliver", "Installation and configuration are coordinated with attention to workmanship, safety and detail."],
  ["04", "Handover", "You receive a clear handover, with the information needed to understand and use the system."],
];

const faqs = [
  ["Can TeeDee assess an existing installation?", "Yes. Share the location, the system involved and what is not working as expected. The team can review the request and advise on the next step."],
  ["Do you work with homes and businesses?", "Tell us about the property, organisation or project. The appropriate scope depends on the site, requirements and service needed."],
  ["What should I include in a project enquiry?", "A location, a short description of the challenge, the type of system involved and your preferred timeline are a useful starting point."],
];

export default function Home() {
  return (
    <main>
      <div className="topline">
        <div className="wrap topline-inner">
          <span><i className="status-dot" /> Technology, thoughtfully connected.</span>
          <span className="topline-right">TEEDEE EDGE AUTOMATIONS LTD <span className="topline-divider">/</span> PROJECT ENQUIRIES OPEN</span>
        </div>
      </div>

      <div className="wrap">
        <header className="header">
          <a className="brand" href="#home" aria-label="TeeDee Edge Automations home">
            <span className="brand-mark"><CircuitBoard size={20} strokeWidth={1.5} /></span>
            <span className="brand-name">TEEDEE<span>.</span><small>EDGE AUTOMATIONS</small></span>
          </a>
          <nav className="nav" aria-label="Main navigation">
            <a href="#services">What we do</a>
            <a href="#approach">Our approach</a>
            <a href="#about">Why TeeDee</a>
          </nav>
          <a className="nav-cta" href="#contact">Discuss a project <ArrowUpRight size={15} /></a>
          <details className="mobile-menu">
            <summary aria-label="Open navigation">Menu <span>+</span></summary>
            <nav aria-label="Mobile navigation">
              <a href="#services">What we do</a>
              <a href="#approach">Our approach</a>
              <a href="#about">Why TeeDee</a>
              <a href="#contact">Contact</a>
            </nav>
          </details>
        </header>

        <section className="hero" id="home">
          <div className="hero-copy">
            <span className="eyebrow">Integrated technology. Real-world thinking.</span>
            <h1>Make every<br />connection <em>count.</em></h1>
            <p className="hero-lede">Technology should make a space work better. We bring security, connectivity and power systems together through considered planning and practical installation.</p>
            <div className="hero-actions">
              <a className="button" href="#contact">Talk to our team <ArrowUpRight size={16} /></a>
              <a className="text-link" href="#services">Explore capabilities <ArrowDownRight size={15} /></a>
            </div>
            <div className="hero-footnote"><span className="hero-line" /> From first conversation to final handover.</div>
          </div>

          <div className="hero-visual" aria-label="Abstract visual representing connected technology systems">
            <div className="visual-grid" />
            <div className="visual-ring ring-a" />
            <div className="visual-ring ring-b" />
            <div className="visual-ring ring-c" />
            <div className="visual-core"><span>TD</span><i /></div>
            <div className="visual-node node-a"><Camera size={16} /><span>SECURITY</span></div>
            <div className="visual-node node-b"><Cable size={16} /><span>NETWORK</span></div>
            <div className="visual-node node-c"><Sun size={16} /><span>POWER</span></div>
            <div className="visual-caption"><span>01 / 04</span><span>SYSTEMS, CONNECTED</span></div>
            <div className="visual-coordinate">06°27&apos; N&nbsp; 03°24&apos; E</div>
          </div>
          <div className="hero-bottom">
            <span>BUILT AROUND YOUR ENVIRONMENT</span>
            <span className="scroll-cue">SCROLL TO EXPLORE <ArrowDownRight size={13} /></span>
          </div>
        </section>
      </div>

      <section className="intro-band" id="about">
        <div className="wrap intro-grid">
          <div className="intro-label"><span className="eyebrow dark-eyebrow">The TeeDee perspective</span><span className="intro-index">01 — A BETTER WAY TO CONNECT</span></div>
          <div className="intro-content">
            <h2>Good technology is more than equipment. <span>It is how everything works together.</span></h2>
            <p>Every site has its own demands. The right solution starts by understanding the environment, selecting what fits and making sure the finished system is practical to use, maintain and build on.</p>
            <div className="intro-points">
              <div><ShieldCheck size={18} /><span>Considered system planning</span></div>
              <div><ClipboardCheck size={18} /><span>Clear delivery and handover</span></div>
              <div><CircuitBoard size={18} /><span>Connected thinking</span></div>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <section className="section services-section" id="services">
          <div className="section-heading">
            <div><span className="eyebrow">What we work on</span><h2>Technology with<br /><em>a job to do.</em></h2></div>
            <p>From a single system to a more connected environment, the work begins with your requirements — not a one-size-fits-all package.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return <article className="service-card" key={service.number}>
                <div className="service-top"><span>{service.number} / CAPABILITY</span><Icon size={22} strokeWidth={1.5} /></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-tags">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <a href="#contact" aria-label={`Enquire about ${service.title}`} className="service-link"><ArrowUpRight size={17} /></a>
              </article>;
            })}
          </div>
          <p className="scope-note">The exact scope, specifications and availability of each service are confirmed during project discovery.</p>
        </section>

        <section className="section approach-section" id="approach">
          <div className="section-heading">
            <div><span className="eyebrow">How we work</span><h2>Clarity at every<br /><em>stage.</em></h2></div>
            <p>A good installation is the result of good decisions made before, during and after the work itself.</p>
          </div>
          <div className="process-grid">
            {process.map(([number, title, description]) => <article className="process-step" key={number}>
              <span className="step-number">{number}</span>
              <div className="step-rule" />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>)}
          </div>
        </section>

        <section className="commitment">
          <div className="commitment-mark"><Check size={22} /></div>
          <div><span className="eyebrow">The standard we work towards</span><h2>Installed with care.<br /><em>Understood by the people who use it.</em></h2></div>
          <p>We believe the job is not finished when the equipment is switched on. A useful result is one that people can operate confidently and maintain with clarity.</p>
        </section>

        <section className="section faq-section">
          <div className="section-heading faq-heading">
            <div><span className="eyebrow">A few useful answers</span><h2>Before we<br /><em>get started.</em></h2></div>
            <p>Have a different question? Send the team a note and tell us what you are trying to solve.</p>
          </div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => <details className="faq-item" key={question}>
              <summary><span className="faq-number">0{index + 1}</span><strong>{question}</strong><span className="faq-toggle">+</span></summary>
              <p>{answer}</p>
            </details>)}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy">
            <span className="eyebrow">Start a conversation</span>
            <h2>Tell us what<br />needs to <em>work better.</em></h2>
            <p>Share a little about your site, your requirements or the challenge you are facing. We will use the details to understand the request and identify a sensible next step.</p>
            <div className="contact-aside"><span className="contact-aside-line" /><span>NO PRESSURE. JUST A USEFUL FIRST CONVERSATION.</span></div>
          </div>
          <form className="form" name="project-enquiry" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/thank-you">
            <input type="hidden" name="form-name" value="project-enquiry" />
            <p className="hidden-field"><label>Leave this field empty: <input name="bot-field" /></label></p>
            <div className="form-heading"><span>PROJECT ENQUIRY</span><span>01 — 04</span></div>
            <div className="field"><label htmlFor="name">Your name <b>*</b></label><input id="name" name="name" autoComplete="name" required placeholder="How should we address you?" /></div>
            <div className="field"><label htmlFor="email">Email address <b>*</b></label><input id="email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></div>
            <div className="field"><label htmlFor="organisation">Company / organisation</label><input id="organisation" name="organisation" autoComplete="organization" placeholder="Where are you based?" /></div>
            <div className="field"><label htmlFor="interest">What do you need? <b>*</b></label><select id="interest" name="interest" defaultValue="" required><option value="" disabled>Select a service area</option><option>Security and surveillance</option><option>Network infrastructure</option><option>Power and energy systems</option><option>Integrated technology</option><option>Existing system support</option><option>Not sure yet</option></select></div>
            <div className="field full"><label htmlFor="message">Tell us a little more <b>*</b></label><textarea id="message" name="message" required rows={3} placeholder="What are you looking to achieve?" /></div>
            <label className="consent"><input type="checkbox" name="consent" value="I agree to be contacted about this enquiry" required /><span>I agree that TeeDee may use these details to respond to this enquiry.</span></label>
            <div className="field full submit-field"><button className="button" type="submit">Send project enquiry <ArrowRight size={16} /></button><span className="form-footnote">Your information is used to respond to this request.</span></div>
          </form>
        </section>
      </div>

      <footer className="footer">
        <div className="wrap footer-main">
          <a className="brand footer-brand" href="#home"><span className="brand-mark"><CircuitBoard size={20} strokeWidth={1.5} /></span><span className="brand-name">TEEDEE<span>.</span><small>EDGE AUTOMATIONS</small></span></a>
          <p>Integrated technology.<br />Thoughtfully delivered.</p>
          <div className="footer-nav"><a href="#services">Capabilities</a><a href="#approach">Our approach</a><a href="#contact">Contact</a></div>
          <a href="#home" className="back-top">BACK TO TOP <ArrowUpRight size={14} /></a>
        </div>
        <div className="wrap footer-bottom"><span>© {new Date().getFullYear()} TeeDee Edge Automations Ltd.</span><span>BUILT AROUND THE WAY YOU WORK.</span></div>
      </footer>
    </main>
  );
}
