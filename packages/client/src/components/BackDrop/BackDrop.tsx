import gsap from "gsap";

import cloud1 from "@/assets/images/cloud1.svg";
import cloud2 from "@/assets/images/cloud2.svg";
import cloud3 from "@/assets/images/cloud3.svg";
import cloud4 from "@/assets/images/cloud4.svg";
import cloud5 from "@/assets/images/cloud5.svg";
import cloud6 from "@/assets/images/cloud6.svg";
import cloud7 from "@/assets/images/cloud7.svg";

import * as BackDropStyles from "./BackDrop.style";
import "./BackDrop.style.css";
import { useGSAP } from "@gsap/react";

export interface HeroBackDropProps {
    endHeight: number;
}

export const HeroBackDrop = (props: HeroBackDropProps) => {
    useGSAP(() => {
        gsap.fromTo(
            ".cloud1",
            { yPercent: 50 },
            {
                x: 2000,
                y: 500,
                scrollTrigger: {
                    start: "top top",
                    end: `+=${props.endHeight}px`,
                    scrub: 3,
                },
            },
        );
        gsap.fromTo(
            ".cloud2",
            { yPercent: 50 },
            {
                x: -1000,
                y: 500,
                scrollTrigger: {
                    start: "top top",
                    end: `+=${props.endHeight}px`,
                    scrub: 3,
                },
            },
        );
        gsap.fromTo(
            ".cloud3",
            { yPercent: 50 },
            {
                x: -500,
                y: 500,
                scrollTrigger: {
                    start: "top top",
                    end: `+=${props.endHeight}px`,
                    scrub: 3,
                },
            },
        );
        gsap.fromTo(
            ".cloud4",
            { yPercent: 50 },
            {
                x: 1000,
                y: 500,
                scrollTrigger: {
                    start: "top top",
                    end: `+=${props.endHeight}px`,
                    scrub: 3,
                },
            },
        );
        gsap.fromTo(
            ".cloud5",
            { yPercent: 50 },
            {
                x: -500,
                y: 500,
                scrollTrigger: {
                    start: "top top",
                    end: `+=${props.endHeight}px`,
                    scrub: 3,
                },
            },
        );
        gsap.fromTo(
            ".cloud6",
            {},
            {
                x: 2000,
                scrollTrigger: {
                    start: "top top",
                    end: `+=${props.endHeight}px`,
                    scrub: 3,
                },
            },
        );
        gsap.fromTo(
            ".cloud7",
            {},
            {
                x: -2000,
                scrollTrigger: {
                    start: "top top",
                    end: `+=${props.endHeight}px`,
                    scrub: 3,
                },
            },
        );
    });

    return (
        <BackDropStyles.Wrapper>
            <img className="cloud cloud1" src={cloud1} alt="" />
            <img className="cloud cloud2" src={cloud2} alt="" />
            <img className="cloud cloud3" src={cloud3} alt="" />
            <img className="cloud cloud4" src={cloud4} alt="" />
            <img className="cloud cloud5" src={cloud5} alt="" />
            <img className="cloud cloud6" src={cloud6} alt="" />
            <img className="cloud cloud7" src={cloud7} alt="" />
            <img src="sun" alt="" />
        </BackDropStyles.Wrapper>
    );
};
