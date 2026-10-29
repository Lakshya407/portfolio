import { mySocials } from "../constants";
const Footer = () => {
  return (
    <section className="pb-6 c-space">
      <div className="mb-8 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <img
            src="assets/web-logic-logo.png"
            alt="web-logic"
            width="80"
            height="80"
            className="w-20 h-20 brightness-125"
          />
          <div>
            <p className="text-lg font-semibold text-white">web-logic</p>
            <p className="mt-1 text-xs text-neutral-500">
              Logic infusing web solutions.
            </p>
            <p className="mt-1 text-xs text-neutral-600">
              Think. Build. Scale.
            </p>
          </div>
        </div>
        <div className="flex gap-3">
          {mySocials.map((social, index) => (
            <a
              href={social.href}
              key={index}
              aria-label={social.name}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noreferrer" : undefined}
              className="grid w-9 h-9 rounded-full place-items-center bg-white/5 ring-1 ring-white/10 hover:ring-white/30 hover-animation"
            >
              <img src={social.icon} className="w-4 h-4" alt={social.name} />
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-2 pt-6 mt-8 text-xs border-t border-white/5 text-neutral-500">
        <p>© 2026 web-logic. All rights reserved.</p>
        <p>India · working worldwide</p>
      </div>
    </section>
  );
};

export default Footer;
