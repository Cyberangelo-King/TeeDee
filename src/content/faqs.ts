import { FaqItem } from "@/types";

export const faqs: FaqItem[] = [
  {
    id: "cctv-planning",
    question: "What information should I prepare before requesting a CCTV site assessment?",
    answer: "It is helpful to identify your primary security goals: are you looking to monitor external boundary walls, vehicle license plates at the gate, interior cash registers, or general compound activity? Note whether your property has reliable lighting at night, the size of the compound, and whether backup power (inverter/solar) is available to keep the cameras recording during power outages.",
    category: "security",
  },
  {
    id: "installation-cost",
    question: "What factors determine the overall cost of a security or power installation?",
    answer: "Costs depend primarily on equipment scale and environmental conditions: the number of cameras or perimeter fence length, resolution requirements (4MP, 5MP, or 4K), cable run distances, conduit installation type (surface vs concealed underground), and the capacity of inverter and lithium battery storage needed to support the load during blackouts. We provide transparent, itemized quotes following our initial survey.",
    category: "general",
  },
  {
    id: "existing-upgrades",
    question: "Can TeeDee Edge assess, repair, or upgrade my existing security systems?",
    answer: "Yes. Many clients engage us to troubleshoot malfunctioning cameras, re-tension loose electric fences, replace aging lead-acid batteries with high-capacity lithium iron phosphate (LiFePO4) storage, or replace obsolete analog cameras with high-definition IP network systems while preserving functional infrastructure.",
    category: "security",
  },
  {
    id: "solar-sizing",
    question: "How do you calculate the right inverter and solar capacity for my building?",
    answer: "We carry out a dedicated load audit measuring both peak wattage and daily kilowatt-hour (kWh) consumption. We segregate heavy inductive appliances (such as large air conditioners or pumping machines) from essential continuous loads (security cameras, lighting, servers, WiFi routers, and refrigeration) to engineer a resilient, cost-effective battery storage system.",
    category: "power",
  },
  {
    id: "integrated-systems",
    question: "Can your security, gate automation, and smart locks work together?",
    answer: "Yes, this is our core engineering specialty. We integrate video intercom stations with automated sliding gates, link CCTV motion triggers with alarm sirens, and design centralized smart home automation where lighting and access control communicate seamlessly over a unified, protected network.",
    category: "automation",
  },
  {
    id: "handover-support",
    question: "What happens after installation and testing are completed?",
    answer: "Upon completion, our engineering team conducts rigorous commissioning tests on every camera, energizer circuit, and inverter switchover. We train you and your designated staff on operating the mobile apps, managing access credentials, and routine maintenance checks, providing full documentation and warranty support.",
    category: "general",
  },
];
