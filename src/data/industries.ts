export interface Industry {
  slug: string;
  name: string;
  icon: string;
  shortDesc: string;
  heroDesc: string;
  challenges: { title: string; desc: string }[];
  approach: string[];
  relatedServices: string[];
}

export const industries: Industry[] = [
  {
    slug: "financial-services",
    name: "Financial Services",
    icon: "bank",
    shortDesc: "Protecting transaction systems and core banking infrastructure from targeted intrusion.",
    heroDesc:
      "Financial institutions face constant, well-resourced targeting. We secure the transaction systems, core banking platforms, and customer-facing applications that cannot tolerate compromise.",
    challenges: [
      { title: "High-value target profile", desc: "Financial institutions face persistent targeting from organized crime and nation-state actors alike." },
      { title: "Regulatory complexity", desc: "PCI-DSS, SOX, GLBA, and regional banking regulations demand overlapping, rigorous control sets." },
      { title: "Legacy core systems", desc: "Core banking platforms often predate modern security architecture and require careful, non-disruptive hardening." },
    ],
    approach: [
      "We assess transaction processing systems, customer-facing applications, and core banking infrastructure with the rigor a financial regulator and a real attacker would both apply.",
      "Engagements are scoped to minimize disruption to live trading and transaction systems, with testing windows and rollback plans agreed before work begins.",
    ],
    relatedServices: ["penetration-testing", "compliance", "secops"],
  },
  {
    slug: "healthcare",
    name: "Healthcare & Life Sciences",
    icon: "pulse",
    shortDesc: "Safeguarding patient data and connected clinical systems under HIPAA and beyond.",
    heroDesc:
      "From electronic health records to connected clinical devices, we secure the systems healthcare organizations depend on to protect patient data and maintain continuity of care.",
    challenges: [
      { title: "Connected medical devices", desc: "IoT and clinical devices expand the attack surface in ways traditional IT security models don't cover." },
      { title: "HIPAA & regulatory exposure", desc: "PHI mishandling carries significant regulatory and reputational consequences." },
      { title: "Uptime-critical systems", desc: "Security testing must account for systems where downtime directly affects patient care." },
    ],
    approach: [
      "We test EHR platforms, patient portals, and connected clinical systems with careful attention to environments where availability is a patient-safety concern, not just an SLA.",
      "Our HIPAA-aligned assessments map technical findings directly to safeguard requirements, so remediation work serves both security and compliance outcomes.",
    ],
    relatedServices: ["compliance", "penetration-testing", "cloud-security"],
  },
  {
    slug: "saas-technology",
    name: "SaaS & Technology",
    icon: "layers",
    shortDesc: "Securing the applications and cloud platforms your customers trust with their data.",
    heroDesc:
      "For SaaS companies, security posture is a sales asset. We help technology organizations build the assessment history and control maturity their enterprise customers demand.",
    challenges: [
      { title: "Multi-tenant data isolation", desc: "Tenant boundary failures are among the most severe risks in SaaS architecture." },
      { title: "Rapid release cycles", desc: "Security testing needs to keep pace with continuous deployment without becoming a bottleneck." },
      { title: "Enterprise procurement requirements", desc: "SOC 2 reports and penetration test attestations are frequently prerequisites for enterprise deals." },
    ],
    approach: [
      "We test multi-tenant architecture specifically for isolation failures, alongside standard application and API testing across your platform.",
      "Assessment cadence and reporting formats are built to slot directly into your enterprise sales and procurement cycles.",
    ],
    relatedServices: ["penetration-testing", "secure-code-review", "compliance"],
  },
  {
    slug: "critical-infrastructure",
    name: "Critical Infrastructure",
    icon: "factory",
    shortDesc: "Hardening the industrial and operational systems that cannot tolerate disruption.",
    heroDesc:
      "Operational technology environments demand a different testing discipline. We assess industrial control systems and OT networks with methodologies built for environments where safety comes first.",
    challenges: [
      { title: "IT/OT convergence risk", desc: "Bridging corporate IT and operational technology networks creates new lateral movement paths." },
      { title: "Safety-critical availability", desc: "Standard testing techniques can carry unacceptable risk in live industrial environments." },
      { title: "Aging control systems", desc: "SCADA and ICS components often can't be patched or updated using conventional IT processes." },
    ],
    approach: [
      "We use OT-safe assessment methodologies, including passive network analysis and lab-based testing against representative hardware, to avoid disrupting live operations.",
      "Findings are prioritized around safety and continuity impact, in coordination with your operations and engineering teams.",
    ],
    relatedServices: ["cloud-security", "secops", "compliance"],
  },
  {
    slug: "government",
    name: "Government & Public Sector",
    icon: "landmark",
    shortDesc: "Meeting federal and regulatory security mandates without slowing mission delivery.",
    heroDesc:
      "Public sector organizations operate under some of the strictest security mandates while serving mission-critical constituent services. We help agencies meet compliance requirements without stalling delivery.",
    challenges: [
      { title: "Stringent regulatory mandates", desc: "FedRAMP, FISMA, and agency-specific requirements demand rigorous, well-documented controls." },
      { title: "High-value target status", desc: "Government systems face persistent targeting from nation-state and hacktivist actors." },
      { title: "Legacy modernization pressure", desc: "Security must be engineered into modernization efforts without introducing new exposure." },
    ],
    approach: [
      "We align assessment methodology and reporting to the frameworks your agency is measured against, while testing for the exploitation paths real adversaries pursue.",
      "Our advisors have supported public sector clients through FedRAMP and FISMA processes end-to-end.",
    ],
    relatedServices: ["compliance", "penetration-testing", "secops"],
  },
  {
    slug: "ecommerce",
    name: "E-Commerce & Retail",
    icon: "cart",
    shortDesc: "Defending payment flows and customer data across high-traffic digital storefronts.",
    heroDesc:
      "Peak-season traffic and payment card data make e-commerce platforms a constant target. We secure the storefronts, payment flows, and backend systems that keep transactions safe and available.",
    challenges: [
      { title: "Payment card data exposure", desc: "PCI-DSS scope and cardholder data environments require rigorous, ongoing control validation." },
      { title: "High-traffic availability demands", desc: "Peak shopping periods leave little room for testing-induced disruption." },
      { title: "Third-party integration sprawl", desc: "Payment processors, marketing tools, and fulfillment integrations expand the attack surface." },
    ],
    approach: [
      "We test storefronts, checkout flows, and payment integrations with PCI-DSS scoping in mind from the outset, minimizing rework between security testing and compliance validation.",
      "Testing windows are scheduled around your traffic patterns, with peak-season freezes respected in engagement planning.",
    ],
    relatedServices: ["compliance", "penetration-testing", "cloud-security"],
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
