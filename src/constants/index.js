export const myProjects = [
  {
    id: 1,
    title: "Shoe Store E-Commerce",
    description:
      "A Next.js storefront for a sneaker brand — catalogue, filters, cart and checkout.",
    subDescription: [
      "Product grid with category filters, wishlist and quick add-to-cart.",
      "Cart with live pricing, discounts and a clean mobile checkout flow.",
      "Deployed on Vercel with image optimisation and SEO metadata.",
    ],
    href: "https://weblogic-shoe-store-frontend.vercel.app/",
    logo: "",
    image: "/assets/projects/shoe-store.jpg",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/logos/nextjs.svg" },
      { id: 2, name: "React", path: "/assets/logos/react.svg" },
      { id: 3, name: "Tailwind", path: "/assets/logos/tailwindcss.svg" },
      { id: 4, name: "Vercel", path: "/assets/logos/vercel.svg" },
    ],
  },
  {
    id: 2,
    title: "AIOps Learning Hub",
    description:
      "A role-based learning platform that tracks a six-month AIOps roadmap.",
    subDescription: [
      "Supabase auth with private progress, notes and documents per user.",
      "Postgres row-level security — permissions enforced in the database.",
      "Roadmap split into two phases, with admin-managed content.",
    ],
    href: "https://aiopslearnhub.netlify.app/",
    logo: "",
    image: "/assets/projects/aiops-hub.svg",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "Vite", path: "/assets/logos/vitejs.svg" },
      { id: 3, name: "Supabase", path: "/assets/logos/supabase.svg" },
      { id: 4, name: "PostgreSQL", path: "/assets/logos/postgresql.svg" },
    ],
  },
  {
    id: 3,
    title: "Restaurant Online Menu",
    description:
      "A digital menu for a restaurant — browse, add to cart, pay at the table.",
    subDescription: [
      "Category tabs for burgers, pizzas, steaks, drinks and dessert.",
      "Cart with quantity controls and multiple payment options.",
      "Lightweight vanilla JS build — fast on any phone.",
    ],
    href: "https://on-linemenu.netlify.app/",
    logo: "",
    image: "/assets/projects/restaurant-menu.jpg",
    tags: [
      { id: 1, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 2, name: "HTML5", path: "/assets/logos/html5.svg" },
      { id: 3, name: "CSS3", path: "/assets/logos/css3.svg" },
      { id: 4, name: "Netlify", path: "/assets/logos/netlify.svg" },
    ],
  },
  {
    id: 4,
    title: "Solar EPC Website",
    description:
      "A WordPress site for a solar EPC firm, built to turn visitors into quote requests.",
    subDescription: [
      "Service, project and pricing pages built in Elementor.",
      "Quote forms and call CTAs on every section.",
      "Local SEO setup for Balaghat and nearby districts.",
    ],
    href: "https://masolarpowersolutions.com/",
    logo: "",
    image: "/assets/projects/solar.jpg",
    tags: [
      { id: 1, name: "WordPress", path: "/assets/logos/wordpress.svg" },
      { id: 2, name: "Elementor", path: "/assets/logos/elementor.svg" },
      { id: 3, name: "Nginx", path: "/assets/logos/nginx.svg" },
      { id: 4, name: "Cloudflare", path: "/assets/logos/cloudflare.svg" },
    ],
  },
  {
    id: 5,
    title: "Zero-Downtime CI/CD Platform",
    description:
      "Git push to live Kubernetes in under five minutes. No downtime.",
    subDescription: [
      "Jenkins + GitHub Actions: lint, test, scan, then publish to ECR.",
      "Multi-stage Docker builds cut the image size by about 70%.",
      "Rolling updates with health checks and automatic rollback.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/ci-cd-pipeline.svg",
    tags: [
      { id: 1, name: "Docker", path: "/assets/logos/docker.svg" },
      { id: 2, name: "Kubernetes", path: "/assets/logos/kubernetes.svg" },
      { id: 3, name: "Jenkins", path: "/assets/logos/jenkins.svg" },
      { id: 4, name: "AWS", path: "/assets/logos/aws.svg" },
    ],
  },
  {
    id: 6,
    title: "Three-Tier Architecture on AWS",
    description:
      "A highly available web stack provisioned end to end with Terraform.",
    subDescription: [
      "Custom VPC across two AZs: public, private and database subnets.",
      "ALB, Auto Scaling, RDS Multi-AZ and ElastiCache as modules.",
      "Remote state in S3 with locking; IAM least privilege.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/aws-3tier.svg",
    tags: [
      { id: 1, name: "Terraform", path: "/assets/logos/terraform.svg" },
      { id: 2, name: "AWS", path: "/assets/logos/aws.svg" },
      { id: 3, name: "Linux", path: "/assets/logos/linux.svg" },
      { id: 4, name: "Nginx", path: "/assets/logos/nginx.svg" },
    ],
  },
  {
    id: 7,
    title: "Kubernetes Observability Stack",
    description:
      "Prometheus, Grafana and Loki for a multi-namespace cluster.",
    subDescription: [
      "Helm-managed stack with dashboards for every namespace.",
      "Alerts for crash loops, certificate expiry and SLO burn.",
      "Cut incident detection from hours to minutes.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/k8s-observability.svg",
    tags: [
      { id: 1, name: "Kubernetes", path: "/assets/logos/kubernetes.svg" },
      { id: 2, name: "Prometheus", path: "/assets/logos/prometheus.svg" },
      { id: 3, name: "Grafana", path: "/assets/logos/grafana.svg" },
      { id: 4, name: "Helm", path: "/assets/logos/helm.svg" },
    ],
  },
];

export const mySocials = [
  {
    name: "Email",
    href: "mailto:logicweb48@gmail.com",
    icon: "/assets/socials/mail.svg",
  },
  {
    // TODO: replace with your own profile URL
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    // TODO: replace with your own profile URL
    name: "GitHub",
    href: "https://github.com/",
    icon: "/assets/socials/github.svg",
  },
];

export const experiences = [
  {
    title: "Associate Cloud Engineer",
    job: "Cloud Infrastructure & DevOps",
    date: "Jan 2026 - Present",
    contents: [
      "Deploy and maintain client sites on Linux, Docker and Kubernetes across AWS and Azure.",
      "Automate provisioning with Terraform and Ansible; ship code with Jenkins and GitHub Actions.",
      "Handle Nginx, TLS, DNS and monitoring with Prometheus, Grafana and ELK.",
    ],
  },
  {
    title: "Full Stack Developer",
    job: "Freelance & Client Projects",
    date: "2024 - 2025",
    contents: [
      "Shipped 10+ websites and web apps for small businesses, end to end.",
      "Built React and Tailwind front-ends on Node.js and PostgreSQL APIs.",
      "Handled payments, SEO, Docker deployments and HTTPS on cloud VPS.",
    ],
  },
];

export const reviews = [
  {
    name: "Priya Sharma",
    username: "Founder, Bloom & Co.",
    body: "Rebuilt our store and moved it to AWS. Load time went from 6s to under 2s and checkout conversion is up 18%.",
    img: "https://robohash.org/priyasharma",
  },
  {
    name: "Daniel Fernandes",
    username: "Ops Head, Nexa Logistics",
    body: "Releases used to take a full day. Now the pipeline ships in twenty minutes.",
    img: "https://robohash.org/danielfernandes",
  },
  {
    name: "Aditya Rao",
    username: "CTO, Finlytics",
    body: "Set up Prometheus, Grafana and ELK properly. We spot issues before customers do.",
    img: "https://robohash.org/adityarao",
  },
  {
    name: "Sarah Whitmore",
    username: "Marketing Lead, Northlane",
    body: "Explained every trade-off in plain English, delivered on time, and it looks great on mobile.",
    img: "https://robohash.org/sarahwhitmore",
  },
  {
    name: "Mohammed Irfan",
    username: "Owner, Irfan Autoparts",
    body: "We had no website. Now customers find us on Google and order on WhatsApp — enquiries doubled.",
    img: "https://robohash.org/mohammedirfan",
  },
  {
    name: "Neha Kulkarni",
    username: "Product Manager, Stackwell",
    body: "Moved us to Azure over a weekend with zero downtime. Cloud bill down about 30%.",
    img: "https://robohash.org/nehakulkarni",
  },
  {
    name: "Tomasz Zielinski",
    username: "Founder, Craftline",
    body: "Small changes that took our old agency weeks now happen the same day.",
    img: "https://robohash.org/tomaszzielinski",
  },
  {
    name: "Ananya Iyer",
    username: "Director, Veda Wellness",
    body: "The hardening and backup setup paid off — we rode out a provider outage with barely any downtime.",
    img: "https://robohash.org/ananyaiyer",
  },
];
