import { useEffect } from "react";
import { motion } from "motion/react";

const ThankYou = () => {
  useEffect(() => {
    document.title = "Thank you — web-logic";
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden c-space">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-royal/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[26rem] w-[26rem] rounded-full bg-aqua/10 blur-3xl" />

      <motion.div
        className="relative z-10 w-full max-w-xl p-8 text-center border rounded-3xl border-white/10 bg-midnight/80 backdrop-blur"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <a
          href="/"
          className="inline-flex items-center gap-2 mb-8 text-lg font-bold text-neutral-300 hover:text-white"
        >
          <img
            src="assets/web-logic-mark.png"
            alt=""
            width="36"
            height="36"
            className="inline-block w-9 h-9"
          />
          <span>
            web<span className="text-aqua">-</span>logic
          </span>
        </a>

        <div className="grid mx-auto mb-6 rounded-full size-16 place-items-center bg-mint/10 ring-1 ring-mint/30">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-8 h-8 text-mint"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold md:text-4xl">Message received</h1>
        <p className="max-w-md mx-auto mt-4 text-neutral-400">
          Thanks for reaching out. Our team will reply from{" "}
          <span className="text-white">logicweb48@gmail.com</span> within one
          working day.
        </p>

        <div className="p-5 mt-8 text-left border rounded-2xl border-white/10 bg-white/[.03]">
          <p className="mb-3 text-sm font-medium text-neutral-200">
            What happens next
          </p>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li className="flex gap-2">
              <span className="text-aqua">1.</span>
              Our team reviews your message and checks how we can help.
            </li>
            <li className="flex gap-2">
              <span className="text-aqua">2.</span>
              You get a reply with a few questions, a timeline and a price range.
            </li>
            <li className="flex gap-2">
              <span className="text-aqua">3.</span>
              If it makes sense, we hop on a short call.
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <a
            href="/"
            className="px-5 py-2.5 text-sm font-medium rounded-full bg-gradient-to-r from-royal to-lavender hover:opacity-90 hover-animation"
          >
            Back to home
          </a>
          <a
            href="mailto:logicweb48@gmail.com"
            className="px-5 py-2.5 text-sm font-medium rounded-full border border-white/15 text-neutral-200 hover:border-white/40 hover:text-white hover-animation"
          >
            Email our team
          </a>
        </div>

        <p className="mt-8 text-xs text-neutral-600">
          web-logic · India (IST, UTC+5:30) · working worldwide
        </p>
      </motion.div>
    </main>
  );
};

export default ThankYou;
