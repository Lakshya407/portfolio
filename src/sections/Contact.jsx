import { useState } from "react";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const CONTACT_EMAIL = "logicweb48@gmail.com";
const FORM_ENDPOINT =
  import.meta.env.VITE_CONTACT_ENDPOINT ||
  `https://formsubmit.co/ajax/${CONTACT_EMAIL}`;

const services = [
  "Website / web app development",
  "Cloud deployment (AWS / Azure / VPS)",
  "Docker & Kubernetes",
  "CI/CD pipeline setup",
  "Linux server support",
  "AIOps & monitoring",
  "Something else",
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");
  const [failed, setFailed] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFailed(false);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          service: formData.service || "Not specified",
          message: formData.message,
          _subject: `New enquiry from ${formData.name} — web-logic`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      setFormData({ name: "", email: "", service: "", message: "" });
      setIsLoading(false);
      window.location.assign("/thank-you");
    } catch (error) {
      setIsLoading(false);
      setFailed(true);
      console.error(error);
      showAlertMessage(
        "danger",
        "Could not send the message. Please email me directly."
      );
    }
  };

  return (
    <section id="contact" className="relative flex items-center c-space section-spacing">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={60}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center justify-center w-full max-w-lg p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-4 mb-8">
          <h2 className="text-heading">Let&apos;s Talk</h2>
          <p className="font-normal text-neutral-400">
            Building a site, moving to the cloud, or fixing something that broke?
            Tell me the short version — I reply within one working day.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-sm text-aqua underline-offset-4 hover:underline"
          >
            {CONTACT_EMAIL}
          </a>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          {/* honeypot: hidden from humans, catches basic spam bots */}
          <input
            type="text"
            name="_honey"
            tabIndex="-1"
            autoComplete="off"
            className="hidden"
          />
          <div className="mb-5">
            <label htmlFor="name" className="field-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="Your name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="field-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="you@company.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="service" className="field-label">
              What do you need? (optional)
            </label>
            <select
              id="service"
              name="service"
              className="field-input field-input-focus"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="" className="bg-midnight">
                Select a service
              </option>
              {services.map((service) => (
                <option key={service} value={service} className="bg-midnight">
                  {service}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="field-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="field-input field-input-focus"
              placeholder="A little about your project, timeline and budget..."
              autoComplete="off"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 bg-radial from-lavender to-royal hover-animation"
          >
            {!isLoading ? "Send message" : "Sending..."}
          </button>
          <p className="mt-4 text-xs text-center text-neutral-500">
            Your details go straight to {CONTACT_EMAIL} and are never shared.
          </p>
          {failed && (
            <p className="mt-3 text-sm text-center text-red-400">
              Form not working?{" "}
              <a
                className="underline"
                href={`mailto:${CONTACT_EMAIL}?subject=Project%20enquiry%20from%20website`}
              >
                Email me directly
              </a>{" "}
              and I&apos;ll reply the same day.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
