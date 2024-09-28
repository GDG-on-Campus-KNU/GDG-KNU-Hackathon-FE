import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import gsap from "gsap";

import Page from "@/pages/Page";

import { globalStyle } from "@/styles/global";

import { Global } from "@emotion/react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Page />
        <Global styles={[globalStyle]} />
    </StrictMode>,
);
