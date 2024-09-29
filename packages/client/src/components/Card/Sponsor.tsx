import { useRef } from "react";

import gsap from "gsap";

import * as SponsorCardStyles from "./Sponsor.style";
import { useGSAP } from "@gsap/react";

export interface SponsorCardProps {
    imgSrc: string;
}

export const SponsorCard = (props: SponsorCardProps) => {
    const ref = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from(ref.current, {
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ref.current,
                start: "top 50%",
                end: "bottom 10%",
                toggleActions: "play reverse play reverse",
            },
        });
    });

    return (
        <SponsorCardStyles.Container ref={ref}>
            <SponsorCardStyles.Image src={props.imgSrc} alt="sponsor" />
        </SponsorCardStyles.Container>
    );
};
