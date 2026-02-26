export type ServiceMenuItem = {
  name: string;
  href?: string;
  children?: ServiceMenuItem[];
};

export const servicesMenu: ServiceMenuItem[] = [
  { name: "Feasibility Studies", href: "/services/feasibility-studies" },
  { name: "Data Story Telling", href: "/services/data-story-telling" },
  {
    name: "Market Research & Measurement",
    href: "/services/market-research-measurement",
    children: [
      { name: "Mystery Shopping", href: "/services/market-research-measurement/mystery-shopping" },
      {
        name: "Customer Experience and Happiness",
        href: "/services/market-research-measurement/customer-experience-happiness",
      },
      {
        name: "Employee Satisfaction and Engagement",
        href: "/services/market-research-measurement/employee-satisfaction-engagement",
      },
      {
        name: "Qualitative and Quantitative Surveys",
        href: "/services/market-research-measurement/qualitative-quantitative-surveys",
      },
      {
        name: "Brand Positioning & Benchmarking",
        href: "/services/market-research-measurement/brand-positioning-benchmarking",
      },
      { name: "Competitor Analysis", href: "/services/market-research-measurement/competitor-analysis" },
      { name: "Marketing Consulting", href: "/services/market-research-measurement/marketing-consulting" },
    ],
  },
  {
    name: "Analytics",
    href: "/services/analytics",
    children: [
      { name: "Dashboard & Reporting", href: "/services/analytics/dashboard-reporting" },
      { name: "Data Analytics", href: "/services/analytics/data-analytics" },
      { name: "Master Data Management", href: "/services/analytics/master-data-management" },
      { name: "Data Quality", href: "/services/analytics/data-quality" },
      { name: "Data Integration", href: "/services/analytics/data-integration" },
    ],
  },
  {
    name: "Business Intelligence",
    href: "/services/business-intelligence",
    children: [
      { name: "IBM Cognos Analytics", href: "/services/business-intelligence/ibm-cognos-analytics" },
      { name: "Tableau", href: "/services/business-intelligence/tableau" },
      { name: "Microsoft Power BI", href: "/services/business-intelligence/microsoft-power-bi" },
      { name: "Qlikview/Qliksense", href: "/services/business-intelligence/qlikview-qliksense" },
    ],
  },
  {
    name: "Business Analysis",
    href: "/services/business-analysis",
    children: [
      { name: "Product Analysis", href: "/services/business-analysis/product-analysis" },
      { name: "Process Analysis", href: "/services/business-analysis/process-analysis" },
    ],
  },
  {
    name: "Technology",
    href: "/services/technology",
    children: [
      {
        name: "Digital Transformation",
        href: "/services/technology/digital-transformation",
        children: [
          { name: "Strategy & Consultation", href: "/services/technology/digital-transformation/strategy-consultation" },
          { name: "UI/UX", href: "/services/technology/digital-transformation/ui-ux" },
        ],
      },
      {
        name: "Artificial Intelligence",
        href: "/services/technology/artificial-intelligence",
        children: [
          {
            name: "Business Consultation & Implementation",
            href: "/services/technology/artificial-intelligence/business-consultation-implementation",
          },
        ],
      },
      {
        name: "Blockchain",
        href: "/services/technology/blockchain",
        children: [
          { name: "On-Chain Ecosystem Consulting", href: "/services/technology/blockchain/on-chain-ecosystem-consulting" },
          { name: "Blockchain Infra Consulting", href: "/services/technology/blockchain/blockchain-infra-consulting" },
          { name: "Asset Tokenization", href: "/services/technology/blockchain/asset-tokenization" },
          { name: "DeFi Consultation", href: "/services/technology/blockchain/defi-consultation" },
        ],
      },
      {
        name: "Web 3.0",
        href: "/services/technology/web-3-0",
        children: [
          { name: "Web 3.0 Strategy & Consultation", href: "/services/technology/web-3-0/strategy-consultation" },
          { name: "Ideation", href: "/services/technology/web-3-0/ideation" },
          { name: "Tokenomics", href: "/services/technology/web-3-0/tokenomics" },
          { name: "Market Making", href: "/services/technology/web-3-0/market-making" },
        ],
      },
    ],
  },
  {
    name: "Loyalty",
    href: "/services/loyalty",
    children: [
      {
        name: "Designing & Implementation Loyalty & Rewards Programs",
        href: "/services/loyalty/designing-implementation-loyalty-rewards-program",
      },
    ],
  },
];
