export interface ResourceItem {
  slug: string;
  kind: "Report" | "Whitepaper" | "Case Study" | "Blog";
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  sections: { heading: string; paragraphs: string[] }[];
  highlights?: string[];
}

export const reports: ResourceItem[] = [
  {
    slug: "2026-threat-landscape",
    kind: "Report",
    title: "2026 Application Threat Landscape",
    excerpt: "Our annual analysis of the vulnerability classes and exploitation trends defining the year ahead.",
    date: "2026-01-14",
    readTime: "12 min read",
    sections: [
      {
        heading: "Attack surfaces are consolidating around identity",
        paragraphs: [
          "Across the 3,200+ assessments we conducted last year, identity and access control failures overtook injection vulnerabilities as the most common path to critical impact. Broken object-level authorization in APIs alone accounted for nearly a third of critical findings.",
          "As organizations decompose monoliths into microservices, the number of trust boundaries multiplies — and each one is a fresh opportunity for an authorization check to be missed or inconsistently applied.",
        ],
      },
      {
        heading: "Supply chain exposure keeps growing",
        paragraphs: [
          "Dependency-based findings rose sharply again this year, driven by CI/CD pipeline misconfiguration as much as vulnerable packages themselves. Attackers increasingly target the build pipeline rather than the shipped artifact.",
          "Organizations with mature software bill-of-materials practices detected and remediated dependency risk significantly faster than those relying on point-in-time scans.",
        ],
      },
      {
        heading: "Cloud misconfiguration remains the quiet majority",
        paragraphs: [
          "Despite years of tooling investment, over-permissioned IAM roles and publicly exposed storage remain among the top initial access vectors we observe in red team engagements. Configuration drift, not initial deployment error, is usually the root cause.",
        ],
      },
      {
        heading: "What this means for 2026",
        paragraphs: [
          "Prioritize authorization testing for every new API endpoint before release. Treat your build pipeline as production infrastructure. And invest in continuous cloud posture monitoring, not annual audits — drift happens weekly, not yearly.",
        ],
      },
    ],
  },
  {
    slug: "state-of-cloud-misconfiguration",
    kind: "Report",
    title: "The State of Cloud Misconfiguration",
    excerpt: "A data-driven look at the IAM, storage, and network misconfigurations most commonly exploited in real intrusions.",
    date: "2025-09-02",
    readTime: "9 min read",
    highlights: [
      "400+ cloud security engagements analyzed",
      "Toxic IAM permission combinations found in the majority of environments",
      "Wildcard resource scoping: the single largest contributor",
    ],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "We analyzed configuration findings from over 400 cloud security engagements to identify the misconfiguration patterns most frequently chained into real compromise, rather than those simply flagged by benchmark scans.",
        ],
      },
      {
        heading: "The IAM permission sprawl problem",
        paragraphs: [
          "Toxic combinations of IAM permissions — individually reasonable, collectively dangerous — appeared in the majority of environments we reviewed. Wildcard resource scoping remains the single largest contributor.",
        ],
      },
      {
        heading: "Recommendations",
        paragraphs: [
          "Move from periodic access reviews to continuous least-privilege enforcement. Automate detection of permission combinations that enable privilege escalation, not just individually risky grants.",
        ],
      },
    ],
  },
  {
    slug: "ransomware-response-benchmarks",
    kind: "Report",
    title: "Ransomware Response Benchmarks",
    excerpt: "Detection and containment timing data from incident response engagements across 2025.",
    date: "2025-05-20",
    readTime: "8 min read",
    highlights: [
      "Detection time: down significantly year over year",
      "Containment time: flat — now the real bottleneck",
      "Pre-authorized playbooks cut containment to a fraction of the time",
    ],
    sections: [
      {
        heading: "Detection is improving, containment is not",
        paragraphs: [
          "Mean time to detection across our monitored clients dropped significantly year over year. Mean time to full containment, however, remained largely flat — the bottleneck has shifted from visibility to response coordination.",
        ],
      },
      {
        heading: "What separates fast containment from slow",
        paragraphs: [
          "Organizations with pre-authorized incident response playbooks and rehearsed communication chains contained incidents in a fraction of the time of those improvising response in the moment.",
        ],
      },
    ],
  },
];

export const whitepapers: ResourceItem[] = [
  {
    slug: "zero-trust-cloud-migration",
    kind: "Whitepaper",
    title: "Zero Trust in Practice: A Cloud Migration Framework",
    excerpt: "A field-tested approach to hardening cloud environments without stalling engineering velocity.",
    date: "2025-11-03",
    readTime: "15 min read",
    sections: [
      {
        heading: "Why zero trust initiatives stall",
        paragraphs: [
          "Most zero trust programs fail not on architecture but on sequencing — teams attempt to enforce strict identity verification everywhere at once, breaking legitimate workflows and triggering rollback.",
          "This framework sequences zero trust adoption around risk-weighted priority: identity and access first, network segmentation second, continuous verification third.",
        ],
      },
      {
        heading: "Phase one: identity-centric access",
        paragraphs: [
          "Establish strong identity verification and least-privilege access as the foundation before touching network architecture. This phase alone closes the majority of exploitable paths we observe in cloud environments.",
        ],
      },
      {
        heading: "Phase two: micro-segmentation",
        paragraphs: [
          "With identity controls in place, segment workloads to limit lateral movement. We recommend segmenting by data sensitivity first, then by application boundary.",
        ],
      },
      {
        heading: "Phase three: continuous verification",
        paragraphs: [
          "Move from perimeter-based trust to continuous, contextual verification of every request — the final phase, and the one that requires the strongest foundation to implement without disruption.",
        ],
      },
    ],
  },
  {
    slug: "secure-sdlc-playbook",
    kind: "Whitepaper",
    title: "The Secure SDLC Playbook",
    excerpt: "Embedding security engineering into the software development lifecycle without slowing releases.",
    date: "2025-07-16",
    readTime: "11 min read",
    sections: [
      {
        heading: "Shift-left without the friction",
        paragraphs: [
          "Security gates that block releases create adversarial dynamics between security and engineering teams. This playbook outlines how to embed security checkpoints that inform rather than obstruct.",
        ],
      },
      {
        heading: "Threat modeling at design time",
        paragraphs: [
          "Lightweight threat modeling sessions during design review catch architectural security flaws before a single line of code is written — the cheapest point in the lifecycle to fix them.",
        ],
      },
    ],
  },
  {
    slug: "incident-response-readiness",
    kind: "Whitepaper",
    title: "Incident Response Readiness: A Pre-Breach Checklist",
    excerpt: "The preparation work that separates a contained incident from a headline-making breach.",
    date: "2025-03-11",
    readTime: "10 min read",
    sections: [
      {
        heading: "The playbook you write before, not during",
        paragraphs: [
          "Every incident response plan looks solid on paper until it's tested under real pressure. This checklist covers the preparation work — from communication trees to forensic readiness — most organizations skip until it's too late.",
        ],
      },
    ],
  },
];

export const caseStudies: ResourceItem[] = [
  {
    slug: "global-payments-platform",
    kind: "Case Study",
    title: "Securing a Global Payments Platform at Scale",
    excerpt: "How a Fortune 500 fintech reduced critical findings by 91% within two assessment cycles.",
    date: "2025-10-08",
    readTime: "7 min read",
    sections: [
      {
        heading: "The challenge",
        paragraphs: [
          "A global payments platform processing millions of daily transactions needed to harden its API layer and cloud infrastructure ahead of a major regulatory audit, without disrupting a continuous deployment cadence shipping dozens of times per day.",
        ],
      },
      {
        heading: "The engagement",
        paragraphs: [
          "RedShield Defense combined penetration testing, secure code review, and cloud security engineering across a 12-week program, embedding directly with the client's platform team to remediate findings in real time rather than waiting for a final report.",
        ],
      },
      {
        heading: "The outcome",
        paragraphs: [
          "Critical and high-severity findings dropped 91% between the first and second assessment cycles. The client passed its regulatory audit with zero material findings and has retained RedShield Defense for ongoing quarterly assessments.",
        ],
      },
    ],
  },
  {
    slug: "healthcare-platform-hipaa-readiness",
    kind: "Case Study",
    title: "HIPAA Readiness for a Connected Health Platform",
    excerpt: "Preparing a telehealth platform's technical safeguards for its first HIPAA compliance audit.",
    date: "2025-06-24",
    readTime: "6 min read",
    sections: [
      {
        heading: "The challenge",
        paragraphs: [
          "A fast-growing telehealth platform needed to demonstrate HIPAA technical safeguard compliance ahead of a major health system partnership, with a security program that hadn't yet caught up to its growth.",
        ],
      },
      {
        heading: "The outcome",
        paragraphs: [
          "RedShield Defense delivered a gap assessment, remediation roadmap, and hands-on implementation support that brought the platform to full technical safeguard compliance in under 90 days, unblocking the partnership.",
        ],
      },
    ],
  },
  {
    slug: "saas-soc2-fast-track",
    kind: "Case Study",
    title: "Fast-Tracking SOC 2 for an Enterprise SaaS Vendor",
    excerpt: "How a Series C SaaS company achieved SOC 2 Type II certification in one audit cycle.",
    date: "2025-02-18",
    readTime: "6 min read",
    sections: [
      {
        heading: "The challenge",
        paragraphs: [
          "An enterprise SaaS vendor had multiple deals stalled in procurement pending SOC 2 certification, with no existing compliance program and a small security team.",
        ],
      },
      {
        heading: "The outcome",
        paragraphs: [
          "RedShield Defense built the control environment, ran a readiness assessment, and coordinated directly with the client's auditor. The company achieved SOC 2 Type II certification on its first audit attempt and unblocked over $2M in stalled enterprise pipeline.",
        ],
      },
    ],
  },
];

export const blogPosts: ResourceItem[] = [
  {
    slug: "authorization-bugs-are-everywhere",
    kind: "Blog",
    title: "Authorization Bugs Are Everywhere — Here's Why We Keep Finding Them",
    excerpt: "A field note on why broken object-level authorization remains the most common critical finding in our API assessments.",
    date: "2026-02-02",
    readTime: "5 min read",
    sections: [
      {
        heading: "The pattern behind the pattern",
        paragraphs: [
          "Almost every broken object-level authorization bug we find shares a root cause: an endpoint that checks whether a user is authenticated, but never checks whether they're authorized to access the specific resource they requested.",
          "This class of bug survives code review because it doesn't look wrong in isolation — the code correctly requires a valid session. It's only wrong in context, when you ask 'authorized for what, exactly?'",
        ],
      },
    ],
  },
  {
    slug: "reading-a-pentest-report",
    kind: "Blog",
    title: "How to Actually Read a Penetration Test Report",
    excerpt: "A guide for engineering leaders on triaging findings by exploitability and business impact, not just CVSS score.",
    date: "2026-01-20",
    readTime: "6 min read",
    sections: [
      {
        heading: "CVSS score is a starting point, not a verdict",
        paragraphs: [
          "A high CVSS score on a finding that requires physical access to an internal workstation carries different real-world risk than a medium-severity finding exposed to the open internet. Read the exploitability section before the severity label.",
        ],
      },
    ],
  },
  {
    slug: "secrets-in-ci-pipelines",
    kind: "Blog",
    title: "Your CI Pipeline Is Probably Leaking Secrets",
    excerpt: "Common patterns we see when auditing build pipelines, and how to fix them before an attacker finds them first.",
    date: "2025-12-11",
    readTime: "5 min read",
    sections: [
      {
        heading: "Build logs are an underrated attack surface",
        paragraphs: [
          "Verbose build logging frequently captures environment variables, including credentials, in plaintext — and those logs are often retained far longer, and with far looser access control, than the secrets themselves.",
        ],
      },
    ],
  },
  {
    slug: "purple-team-vs-red-team",
    kind: "Blog",
    title: "Purple Team vs. Red Team: When to Run Which",
    excerpt: "A practical breakdown of when collaborative purple team exercises beat a fully adversarial red team engagement.",
    date: "2025-11-18",
    readTime: "4 min read",
    sections: [
      {
        heading: "Different tools for different maturity levels",
        paragraphs: [
          "If your detection engineering team is still building out coverage, a purple team exercise — where the attacking and defending teams collaborate in real time — produces faster, more actionable learning than a fully blind red team engagement.",
          "Save the fully adversarial red team for when you need to validate detection and response under realistic, uncoordinated conditions.",
        ],
      },
    ],
  },
];

export const resourceKinds = [
  { key: "reports", label: "Reports", singular: "Report", path: "/resources/reports", ctaLabel: "Read the Report", items: reports },
  { key: "whitepapers", label: "Whitepapers", singular: "Whitepaper", path: "/resources/whitepapers", ctaLabel: "Read the Whitepaper", items: whitepapers },
  { key: "case-studies", label: "Case Studies", singular: "Case Study", path: "/resources/case-studies", ctaLabel: "View Case Study", items: caseStudies },
  { key: "blog", label: "Blog", singular: "Article", path: "/resources/blog", ctaLabel: "Read the Article", items: blogPosts },
] as const;

export type ResourceKindKey = (typeof resourceKinds)[number]["key"];

export function getResourceBySlug(kind: "reports" | "whitepapers" | "case-studies" | "blog", slug: string) {
  const group = resourceKinds.find((k) => k.key === kind);
  return group?.items.find((item) => item.slug === slug);
}
