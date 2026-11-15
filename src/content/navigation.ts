export interface NavItem {
  title: string;
  href: string;
  description?: string;
  children?: { title: string; href: string; description?: string }[];
}

export const navigationConfig: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Services",
    href: "/services",
    children: [
      {
        title: "CCTV & Surveillance",
        href: "/services/cctv-systems",
        description: "HD IP cameras, NVR storage & remote mobile monitoring",
      },
      {
        title: "Solar & Inverter Systems",
        href: "/services/solar-and-inverter",
        description: "Hybrid pure sine inverters & lithium energy storage",
      },
      {
        title: "Access Control & Biometrics",
        href: "/services/access-control-biometrics",
        description: "Fingerprint, facial recognition & RFID card readers",
      },
      {
        title: "Fire & Burglar Alarms",
        href: "/services/fire-burglar-alarm",
        description: "Perimeter intrusion, optical smoke & siren warning systems",
      },
      {
        title: "Electric Fencing & Wiring",
        href: "/services/electric-fencing-wiring",
        description: "High-voltage perimeter fences & structured electrical conduit",
      },
      {
        title: "Automated Gate Systems",
        href: "/services/automated-gates",
        description: "Sliding and swing gate motors with wireless remote fobs",
      },
      {
        title: "Smart Locks & Hotel Locks",
        href: "/services/smart-locks",
        description: "Keyless entry, PIN codes & centralized keycard encoders",
      },
      {
        title: "Networking & Intercoms",
        href: "/services/intercoms-networking",
        description: "Cat6 cabling, server racks & video door intercoms",
      },
      {
        title: "Smart Homes & Automation",
        href: "/services/building-automation",
        description: "Centralized lighting, climate & energy management",
      },
      {
        title: "Technical Training",
        href: "/services/training",
        description: "Hands-on installation engineering & certification training",
      },
    ],
  },
  {
    title: "Industries",
    href: "/industries",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
