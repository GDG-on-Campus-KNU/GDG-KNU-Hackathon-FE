import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import gsap from "gsap";

import { globalStyle } from "./styles/global";
import App from "@/App.tsx";
import { Global } from "@emotion/react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App />
        <Global styles={[globalStyle]} />
    </StrictMode>,
);
