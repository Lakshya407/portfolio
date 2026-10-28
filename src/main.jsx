import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ThankYou from "./sections/ThankYou.jsx";

const path = window.location.pathname.replace(/\/+$/, "");
const isThankYouPage =
  path.endsWith("/thank-you") || window.location.hash === "#/thank-you";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {isThankYouPage ? <ThankYou /> : <App />}
  </StrictMode>
);
