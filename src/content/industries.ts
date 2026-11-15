import { Industry } from "@/types";

export const industries: Industry[] = [
  {
    slug: "residential",
    name: "Residential Estates & Private Homes",
    headline: "Uncompromising family protection and silent backup energy.",
    description: "From detached duplexes to private compounds and gated communities, we deploy perimeter electric fences, automated sliding gates, crystal-clear CCTV, and pure sine wave solar inverters so your family stays secure and powered regardless of external conditions.",
    challenges: [
      "Frequent utility grid blackouts causing security vulnerability at night",
      "Perimeter intrusion risks from low or unmonitored compound walls",
      "Manual gate opening delays exposing drivers on the street",
      "Messy exposed wiring compromising home aesthetics",
    ],
    recommendedSolutions: [
      "Hybrid Inverter + Lithium Battery for 24/7 security continuity",
      "Perimeter Electric Fencing with siren trip triggers",
      "Automated Gate Systems with remote key fobs and video intercoms",
      "Smart Fingerprint Door Locks for keyless convenience",
    ],
    image: "/images/industries/residential.svg",
  },
  {
    slug: "commercial",
    name: "Commercial Offices & Retail Plazas",
    headline: "Audit-ready access control, inventory surveillance, and power stability.",
    description: "Ensure smooth business operations. We provide networked access control for sensitive office doors, high-definition customer and cash-point surveillance, and structured data networking to keep your business running smoothly without interruption.",
    challenges: [
      "Internal shrinkage, unaccounted inventory, and unauthorized staff entry",
      "Point of sale and server downtime from sudden power cuts",
      "Cumbersome physical keys and lack of time-attendance audit logs",
      "Poor WiFi signal distribution across multi-office suites",
    ],
    recommendedSolutions: [
      "Biometric Time & Attendance Access Control on all key doors",
      "Multi-angle NVR surveillance with 30-day recorded retention",
      "Pure Sine Inverter banks dedicated to server racks and workstations",
      "Cat6 Structured Cabling and enterprise WiFi mesh",
    ],
    image: "/images/industries/commercial.svg",
  },
  {
    slug: "property-hospitality",
    name: "Hotels, Short-Lets & Multi-Tenants",
    headline: "Automated guest check-in, keycard management, and energy savings.",
    description: "Deliver a modern, frictionless experience for hotel guests and short-let visitors. Our smart locks, room energy-saving switches, and comprehensive common-area surveillance give owners complete peace of mind and lower operational expenses.",
    challenges: [
      "Guest key loss and lock re-keying costs",
      "Excessive energy waste when air conditioning runs in vacant rooms",
      "Disputes regarding luggage handling or parking lot incidents",
      "Need for remote PIN generation for Airbnb / short-let guests",
    ],
    recommendedSolutions: [
      "Hotel RFID Keycard System with centralized reception encoder",
      "Smart Locks with temporary timed passcodes for short-let bookings",
      "Common area HD CCTV monitoring parking, lobbies, and corridors",
      "Energy management switches linked to room card insertion",
    ],
    image: "/images/industries/hospitality.svg",
  },
  {
    slug: "institutions",
    name: "Industrial Facilities, Schools & Projects",
    headline: "Heavy-duty perimeter defense, fire protection, and site-wide monitoring.",
    description: "Large footprints require engineered security. We design and install high-joule industrial electric fences, fire alarm systems, fiber/Cat6 campus networking, and multi-tenant gate automation built to withstand continuous operational demands.",
    challenges: [
      "Extensive perimeters that are impossible to patrol manually",
      "Fire and smoke hazards in storage warehouses and laboratory spaces",
      "High vehicular traffic requiring regulated barrier arm access",
      "Strict regulatory compliance and safety audit requirements",
    ],
    recommendedSolutions: [
      "Multi-zone Industrial Electric Fencing with sector zoning",
      "Addressable Fire & Smoke Alarm Systems with high-decibel horns",
      "Heavy-duty Automated Sliding Gates & Boom Barriers",
      "Technical training for in-house facilities maintenance teams",
    ],
    image: "/images/industries/industrial.svg",
  },
];
