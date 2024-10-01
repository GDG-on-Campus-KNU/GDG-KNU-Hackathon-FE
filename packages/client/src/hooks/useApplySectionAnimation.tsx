import gsap from "gsap";

import { useGSAP } from "@gsap/react";

export const useApplySectionAnimation = () => {
    useGSAP(() => {
        const media = gsap.matchMedia();

        media.add("(max-width: 624px)", () => {
            gsap.fromTo(
                ".envelop",
                { left: "50%", xPercent: -50, bottom: "30%" },
                {
                    bottom: "0%",
                    scrollTrigger: {
                        trigger: ".envelop-container",
                        toggleActions: "play pause resume reset",

                        start: "top 50%",
                        end: "40% 60%",
                        scrub: 2,
                    },
                },
            );
        });
        media.add("(min-width: 768px) and (max-width: 1024px)", () => {
            gsap.fromTo(
                ".envelop",
                { left: "50%", xPercent: -50, bottom: "30%" },
                {
                    bottom: "10%",
                    scrollTrigger: {
                        trigger: ".envelop-container",
                        toggleActions: "play pause resume reset",

                        start: "top 50%",
                        end: "40% 60%",
                        scrub: 2,
                    },
                },
            );
        });
        gsap.fromTo(
            ".envelop",
            { left: "50%", xPercent: -50, bottom: "30%" },
            {
                bottom: "10%",
                scrollTrigger: {
                    trigger: ".envelop-container",
                    toggleActions: "play pause resume reset",

                    start: "top 50%",
                    end: "40% 60%",
                    scrub: 2,
                },
            },
        );
    });
};
