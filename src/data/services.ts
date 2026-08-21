export interface Service {
  slug: string;
  menuGroup: "Offensive Security" | "Defensive Operations";
  tag: string;
  name: string;
  shortName: string;
  shortDesc: string;
  heroDesc: string;
  icon: string;
  overview: string[];
  capabilities: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  outcomes: { value: string; label: string }[];
}

export const services: Service[] = [
  {
    slug: "penetration-testing",
    menuGroup: "Offensive Security",
    tag: "Offensive Security",
    name: "Vulnerability Assessment & Penetration Testing",
    shortName: "Penetration Testing",
    shortDesc:
      "We simulate real-world adversaries against your web, mobile, API, and network attack surfaces to expose exploitable weaknesses before they do.",
    heroDesc:
      "Manual, adversary-driven testing that finds what automated scanners cannot — the chained, business-logic, and privilege-escalation paths that lead to real compromise.",
    icon: "target",
    overview: [
      "RedShield Defense penetration testing goes beyond compliance checkboxes. Our engineers approach every engagement as an adversary would — mapping your attack surface, chaining low-severity findings into critical exposures, and validating exploitability rather than flagging theoretical risk.",
      "Every assessment is scoped to the systems that matter most: customer-facing applications, internal APIs, cloud-hosted infrastructure, and the network segments that connect them. We report findings the way your engineering team can act on them, prioritized by real-world exploitability and business impact.",
    ],
    capabilities: [
      { title: "Web Application Testing", desc: "OWASP-aligned manual testing across authentication, session management, business logic, and injection classes." },
      { title: "API & Microservices Testing", desc: "REST, GraphQL, and gRPC interfaces assessed for broken object-level authorization, rate-limit evasion, and schema abuse." },
      { title: "Mobile Application Testing", desc: "iOS and Android binaries reverse-engineered for insecure storage, weak transport security, and client-side logic flaws." },
      { title: "Network & Infrastructure Testing", desc: "External and internal network assessments covering segmentation, lateral movement, and privilege escalation paths." },
      { title: "Cloud Configuration Testing", desc: "IAM, storage, and workload configuration reviewed against exploitation paths, not just benchmark drift." },
      { title: "Retesting & Validation", desc: "Every critical and high finding is retested at no additional cost until remediation is confirmed." },
    ],
    process: [
      { step: "01", title: "Scoping & Reconnaissance", desc: "We define target systems, rules of engagement, and gather intelligence on your external footprint." },
      { step: "02", title: "Active Testing", desc: "Manual exploitation attempts against identified attack paths, supplemented by targeted automated tooling." },
      { step: "03", title: "Exploitation & Chaining", desc: "Individual findings are chained to demonstrate real business impact, not isolated CVEs." },
      { step: "04", title: "Reporting & Debrief", desc: "A prioritized findings report and a live technical debrief with your engineering and security teams." },
    ],
    outcomes: [
      { value: "3,200+", label: "Assessments delivered without a missed SLA" },
      { value: "0", label: "Cost for critical-finding retesting" },
      { value: "48 hrs", label: "Time to first critical finding, on average" },
    ],
  },
  {
    slug: "cloud-security",
    menuGroup: "Defensive Operations",
    tag: "Cloud",
    name: "Cloud Security Engineering",
    shortName: "Cloud Security",
    shortDesc:
      "Architecture reviews, posture management, and hardening across AWS, Azure, and GCP for organizations running critical workloads at scale.",
    heroDesc:
      "We engineer cloud environments to withstand targeted intrusion — not just pass a compliance scan.",
    icon: "cloud",
    overview: [
      "Cloud misconfiguration remains one of the most common paths to breach. RedShield Defense pairs architecture-level review with hands-on hardening to close the gap between your intended security posture and what's actually deployed.",
      "We work across AWS, Azure, and GCP, engaging directly with your platform and DevOps teams to implement least-privilege IAM, workload isolation, and continuous configuration monitoring — without slowing delivery velocity.",
    ],
    capabilities: [
      { title: "Architecture Review", desc: "End-to-end review of network segmentation, identity boundaries, and data flow across your cloud estate." },
      { title: "IAM & Privilege Hardening", desc: "Least-privilege policy design and elimination of toxic permission combinations across accounts and roles." },
      { title: "Infrastructure-as-Code Audits", desc: "Terraform, CloudFormation, and Pulumi reviewed for drift, insecure defaults, and secret exposure." },
      { title: "Cloud Security Posture Management", desc: "Continuous configuration monitoring mapped to real exploitation paths, not just benchmark scores." },
      { title: "Container & Kubernetes Hardening", desc: "Cluster, pod, and image-level hardening aligned to CIS benchmarks and runtime threat models." },
      { title: "Multi-Cloud Governance", desc: "Unified security baselines and guardrails across AWS, Azure, and GCP environments." },
    ],
    process: [
      { step: "01", title: "Discovery & Mapping", desc: "Full inventory of accounts, workloads, identities, and data stores across your cloud footprint." },
      { step: "02", title: "Risk-Based Assessment", desc: "Findings prioritized by exploitability and blast radius, not raw configuration-check counts." },
      { step: "03", title: "Hardening & Remediation", desc: "Hands-on implementation support alongside your platform engineering team." },
      { step: "04", title: "Continuous Monitoring", desc: "Ongoing posture management to catch drift before it becomes an incident." },
    ],
    outcomes: [
      { value: "3", label: "Major cloud platforms covered end-to-end" },
      { value: "91%", label: "Average reduction in critical misconfigurations" },
      { value: "< 30 days", label: "Typical time to hardened baseline" },
    ],
  },
  {
    slug: "secure-code-review",
    menuGroup: "Offensive Security",
    tag: "Code Assurance",
    name: "Secure Code Review",
    shortName: "Secure Code Review",
    shortDesc:
      "Manual, adversary-informed source code audits that surface the logic flaws and injection paths automated scanners consistently miss.",
    heroDesc:
      "Line-by-line audits performed by engineers who read code the way attackers do — for logic, not just syntax.",
    icon: "code",
    overview: [
      "Static analysis tools catch pattern-matched vulnerabilities. They consistently miss business-logic flaws, authorization gaps, and the subtle chaining of low-risk issues into critical exposures. RedShield Defense secure code review closes that gap with manual, context-aware analysis.",
      "Our engineers review your codebase the way an attacker would explore it — tracing data flow, mapping trust boundaries, and validating that access controls hold under adversarial conditions, not just expected usage.",
    ],
    capabilities: [
      { title: "Authentication & Session Logic", desc: "Review of login flows, token handling, and session lifecycle for bypass and fixation risks." },
      { title: "Authorization & Access Control", desc: "Tracing every privilege boundary to confirm horizontal and vertical access controls actually hold." },
      { title: "Injection & Input Handling", desc: "SQL, command, template, and deserialization paths traced from source to sink." },
      { title: "Cryptographic Implementation Review", desc: "Validation of key management, algorithm choice, and implementation against known weaknesses." },
      { title: "Dependency & Supply Chain Review", desc: "Third-party library usage assessed for known CVEs and risky integration patterns." },
      { title: "CI/CD Pipeline Security", desc: "Build and deployment pipelines reviewed for secret exposure and unauthorized code injection paths." },
    ],
    process: [
      { step: "01", title: "Codebase Onboarding", desc: "Architecture walkthrough with your engineering team to understand trust boundaries and data flow." },
      { step: "02", title: "Manual Line-by-Line Review", desc: "Targeted manual analysis of authentication, authorization, and data-handling code paths." },
      { step: "03", title: "Proof-of-Concept Validation", desc: "Findings validated with working proof-of-concept exploits, not theoretical write-ups." },
      { step: "04", title: "Remediation Guidance", desc: "Fix recommendations delivered with code-level detail your developers can implement directly." },
    ],
    outcomes: [
      { value: "12K+", label: "Vulnerabilities identified across client codebases" },
      { value: "100%", label: "Findings validated with proof-of-concept" },
      { value: "4.8/5", label: "Average engineering team satisfaction score" },
    ],
  },
  {
    slug: "secops",
    menuGroup: "Defensive Operations",
    tag: "Operations",
    name: "Managed SecOps & Monitoring",
    shortName: "Managed SecOps",
    shortDesc:
      "Continuous detection, threat hunting, and incident response delivered by our 24/7 Threat Operations Center.",
    heroDesc:
      "Round-the-clock detection and response backed by the same intelligence pipeline that powers our offensive assessments.",
    icon: "radar",
    overview: [
      "Threats don't operate on business hours, and neither do we. RedShield Defense's Managed SecOps service delivers continuous monitoring, threat hunting, and incident response across your endpoints, cloud environments, and network — backed by analysts who understand attacker tradecraft firsthand.",
      "Because our detection engineering is informed by our own offensive testing, we tune for the techniques real adversaries use against organizations like yours, not generic signature matching.",
    ],
    capabilities: [
      { title: "24/7 Threat Monitoring", desc: "Continuous coverage across endpoints, cloud workloads, and network traffic from our Threat Operations Center." },
      { title: "Threat Hunting", desc: "Proactive, hypothesis-driven hunts for indicators of compromise that evade automated detection." },
      { title: "Incident Response", desc: "Rapid triage, containment, and eradication support when an incident is confirmed." },
      { title: "Detection Engineering", desc: "Custom detection rules tuned to your environment and informed by real adversary tradecraft." },
      { title: "SIEM & SOAR Integration", desc: "Deployment and tuning of detection and response tooling integrated with your existing stack." },
      { title: "Executive Reporting", desc: "Regular briefings that translate operational telemetry into risk-relevant business context." },
    ],
    process: [
      { step: "01", title: "Environment Onboarding", desc: "Telemetry sources connected and baseline behavior profiled across your environment." },
      { step: "02", title: "Detection Tuning", desc: "Detection logic calibrated to your infrastructure and threat model over an initial tuning period." },
      { step: "03", title: "Continuous Operations", desc: "24/7 monitoring, hunting, and alert triage from our Threat Operations Center." },
      { step: "04", title: "Response & Reporting", desc: "Confirmed incidents escalated immediately, with regular reporting on posture trends." },
    ],
    outcomes: [
      { value: "24/7", label: "Threat operations coverage" },
      { value: "< 4 min", label: "Mean detection time" },
      { value: "6", label: "Active alerts monitored in real time, on average" },
    ],
  },
  {
    slug: "compliance",
    menuGroup: "Defensive Operations",
    tag: "Governance",
    name: "Compliance & Risk Advisory",
    shortName: "Compliance & Risk",
    shortDesc:
      "SOC 2, ISO 27001, PCI-DSS, and HIPAA readiness programs built to withstand real audits, not just checklists.",
    heroDesc:
      "Compliance programs engineered around real security outcomes — so the audit is a formality, not a scramble.",
    icon: "shield-check",
    overview: [
      "Compliance frameworks exist to codify baseline security practice, but checkbox implementations create false confidence. RedShield Defense builds compliance programs on top of genuine security engineering, so certification reflects real risk reduction.",
      "We guide your organization through framework selection, gap assessment, control implementation, and audit preparation — with advisors who have sat on both sides of the audit table.",
    ],
    capabilities: [
      { title: "SOC 2 Readiness", desc: "Type I and Type II readiness programs covering control design, evidence collection, and audit liaison." },
      { title: "ISO 27001 Certification Support", desc: "ISMS design and implementation aligned to Annex A controls and your risk register." },
      { title: "PCI-DSS Compliance", desc: "Cardholder data environment scoping, control implementation, and QSA coordination." },
      { title: "HIPAA & Healthcare Compliance", desc: "Technical and administrative safeguard implementation for PHI-handling systems." },
      { title: "Third-Party Risk Management", desc: "Vendor risk assessment programs and ongoing supply-chain security monitoring." },
      { title: "Policy & Governance Development", desc: "Security policy suites written to be enforced, not shelved." },
    ],
    process: [
      { step: "01", title: "Framework Selection", desc: "Identify the right framework or combination based on your customers, regulators, and risk profile." },
      { step: "02", title: "Gap Assessment", desc: "Current-state review against target controls, with a prioritized remediation roadmap." },
      { step: "03", title: "Control Implementation", desc: "Hands-on support implementing technical and administrative controls." },
      { step: "04", title: "Audit Preparation & Liaison", desc: "Evidence packaging and direct coordination with your auditor through certification." },
    ],
    outcomes: [
      { value: "4", label: "Major frameworks supported end-to-end" },
      { value: "100%", label: "Client audits passed on first attempt" },
      { value: "60+", label: "Certified advisors on staff" },
    ],
  },
  {
    slug: "red-team",
    menuGroup: "Offensive Security",
    tag: "Adversary Simulation",
    name: "Red Team Operations",
    shortName: "Red Team Operations",
    shortDesc:
      "Full-scope, objective-driven engagements modeled on nation-state and organized threat actor tradecraft.",
    heroDesc:
      "Objective-driven simulated intrusions that test your people, process, and technology together — the way a real adversary would.",
    icon: "crosshair",
    overview: [
      "A red team engagement is not a broader penetration test — it's an adversary simulation with a defined objective, run against your full detection and response capability. RedShield Defense red team operations test whether your organization can detect and respond to a determined, patient attacker, not just whether a vulnerability exists.",
      "Engagements are scoped around real business objectives — reaching a crown-jewel data store, achieving domain compromise, or testing a specific incident response scenario — and executed using tradecraft modeled on the threat actors most relevant to your industry.",
    ],
    capabilities: [
      { title: "Objective-Based Engagements", desc: "Scenarios built around your actual crown-jewel assets and threat model, not generic goals." },
      { title: "Initial Access Simulation", desc: "Phishing, physical, and external exploitation vectors modeled on real intrusion campaigns." },
      { title: "Lateral Movement & Privilege Escalation", desc: "Post-compromise tradecraft to test detection and segmentation controls under realistic conditions." },
      { title: "Purple Team Collaboration", desc: "Optional collaborative sessions with your SOC to validate detection coverage in real time." },
      { title: "Physical Security Testing", desc: "On-site social engineering and physical access testing where in scope." },
      { title: "Detailed Attack Narrative", desc: "A full timeline of the engagement mapped to MITRE ATT&CK for your response team." },
    ],
    process: [
      { step: "01", title: "Objective Definition", desc: "Engagement goals and rules of engagement defined with your security leadership." },
      { step: "02", title: "Reconnaissance & Access", desc: "Adversary-modeled reconnaissance and initial access attempts against your organization." },
      { step: "03", title: "Escalation & Objective Pursuit", desc: "Lateral movement and privilege escalation toward the defined engagement objective." },
      { step: "04", title: "Debrief & Detection Review", desc: "Full timeline walkthrough with your SOC, mapped against what was and wasn't detected." },
    ],
    outcomes: [
      { value: "17 yrs", label: "Founding engineers' combined offensive security tenure" },
      { value: "MITRE ATT&CK", label: "Every engagement mapped to a standard framework" },
      { value: "100%", label: "Engagements conducted under signed rules of engagement" },
    ],
  },
];

export const serviceMenuGroups = ["Offensive Security", "Defensive Operations"] as const;

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
