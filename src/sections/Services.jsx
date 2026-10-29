const services = [
  {
    icon: "cloudflare",
    title: "Cloud Deployment & Migration",
    description:
      "Move to AWS, Azure or a VPS — set up right, secured, no surprise bills.",
    points: ["DNS, SSL and business email", "Backups and cost control"],
  },
  {
    icon: "kubernetes",
    title: "Kubernetes & Containers",
    description:
      "Package your app in Docker and run it on Kubernetes, the boring reliable way.",
    points: ["Docker images and compose stacks", "Helm, GitOps and autoscaling"],
  },
  {
    icon: "jenkins",
    title: "CI/CD Automation",
    description: "Stop deploying by hand. Test, build and ship on every commit.",
    points: ["Jenkins and GitHub Actions", "Zero-downtime releases and rollback"],
  },
  {
    icon: "linux",
    title: "Linux Server Administration",
    description: "Servers that stay patched, hardened and fast.",
    points: ["SSH, firewall and TLS", "Monitoring, logs and alerts"],
  },
  {
    icon: "react",
    title: "Full Stack Web Development",
    description:
      "Fast, responsive sites and web apps — from landing page to full store.",
    points: ["React, Tailwind and Node.js", "Dashboards, APIs and payments"],
  },
  {
    icon: "grafana",
    title: "AIOps & Observability",
    description: "See problems before your customers do.",
    points: ["Prometheus, Grafana and ELK", "Alerts that actually get read"],
  },
];

const Services = () => {
  return (
    <section className="c-space section-spacing" id="services">
      <div className="flex flex-col gap-3 md:max-w-xl">
        <h2 className="text-heading">How Our Team Can Help</h2>
        <p className="subtext">
          One studio, end to end: design, build, deploy and run. So you can get
          back to the business.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 mt-12 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="flex flex-col gap-4 p-6 transition duration-200 border rounded-2xl border-white/[.06] bg-gradient-to-b from-storm to-indigo hover:-translate-y-1 hover:border-white/15"
          >
            <div className="grid p-3 rounded-xl w-fit bg-white/5 ring-1 ring-white/10">
              <img
                src={`assets/logos/${service.icon}.svg`}
                alt=""
                className="w-7 h-7"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div>
              <h3 className="text-lg font-medium text-white">{service.title}</h3>
              <p className="mt-2 text-sm text-neutral-400">{service.description}</p>
            </div>
            <ul className="mt-auto space-y-1.5 text-sm text-neutral-300">
              {service.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="text-mint">✓</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <p className="mt-10 text-neutral-400">
        Not sure what you need?{" "}
        <a
          href="#contact"
          className="font-medium text-aqua underline-offset-4 hover:underline"
        >
          Tell us what you need — our team will help you find the right fit.
        </a>
      </p>
    </section>
  );
};

export default Services;
