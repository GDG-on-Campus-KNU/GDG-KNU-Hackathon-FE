import { createRoot, hydrateRoot } from "react-dom/client";
import ReactGA from "react-ga4";

import gsap from "gsap";

import Page from "@/pages/Page";

import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

if (import.meta.env.DEV) {
    createRoot(document.getElementById("root")!).render(<Page />);
}
if (import.meta.env.PROD) {
    ReactGA.initialize("G-5EH747HJS6");
    hydrateRoot(document.getElementById("root") as Element, <Page />);
}
