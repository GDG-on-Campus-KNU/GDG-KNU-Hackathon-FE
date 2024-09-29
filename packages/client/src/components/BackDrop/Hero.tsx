import gsap from "gsap";

import cloud1 from "@/assets/images/cloud1.svg";
import cloud2 from "@/assets/images/cloud2.svg";
import cloud3 from "@/assets/images/cloud3.svg";
import cloud4 from "@/assets/images/cloud4.svg";
import cloud5 from "@/assets/images/cloud5.svg";
import cloud6 from "@/assets/images/cloud6.svg";
import cloud7 from "@/assets/images/cloud7.svg";
import starRound from "@/assets/images/star-round.svg";
import starShaped from "@/assets/images/star-shaped.svg";
import sun from "@/assets/images/sun.svg";
import sunShine from "@/assets/images/sunshine.svg";

import * as BackDropStyles from "./Hero.style";
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
        gsap.fromTo(
            ".sunshine",
            {
                xPercent: -50,
                x: -30,
                y: 80,
                scale: 1.5,
            },
            {
                y: -250,
                rotate: 30,
                scale: 3,
                opacity: 0,
                scrollTrigger: {
                    trigger: ".sun",
                    start: "top top",
                    end: `+=${props.endHeight / 2}`,
                    scrub: 2,
                },
            },
        );
        gsap.fromTo(
            ".sun",
            {
                xPercent: 50,
                y: 200,
            },
            {
                rotate: 30,
                yPercent: -300,
                scrollTrigger: {
                    trigger: ".sun",
                    start: "top top",
                    end: `+=${props.endHeight / 2}`,
                    scrub: 2,
                },
            },
        );
        gsap.to(".star", {
            yPercent: -10000,
            scale: 0.5,
            scrollTrigger: {
                start: "top top",
                end: `+=${props.endHeight}px`,
                scrub: 3,
            },
        });
    });

    return (
        <BackDropStyles.Wrapper>
            <BackDropStyles.Image className="cloud cloud1" src={cloud1} alt="cloud" />
            <BackDropStyles.Image className="cloud cloud2" src={cloud2} alt="cloud" />
            <BackDropStyles.Image className="cloud cloud3" src={cloud3} alt="cloud" />
            <BackDropStyles.Image className="cloud cloud4" src={cloud4} alt="cloud" />
            <BackDropStyles.Image className="cloud cloud5" src={cloud5} alt="cloud" />
            <BackDropStyles.Image className="cloud cloud6" src={cloud6} alt="cloud" />
            <BackDropStyles.Image className="cloud cloud7" src={cloud7} alt="cloud" />

            <BackDropStyles.SunContainer className="sun-container">
                <BackDropStyles.Image className="sun" src={sun} alt="sun" />
                <BackDropStyles.Image className="sunshine" src={sunShine} alt="sun-shine" />
            </BackDropStyles.SunContainer>

            <BackDropStyles.Image className="star star1" src={starRound} alt="star-round" />
            <BackDropStyles.Image className="star star2" src={starRound} alt="star-round" />
            <BackDropStyles.Image className="star star3" src={starRound} alt="star-round" />
            <BackDropStyles.Image className="star star4" src={starRound} alt="star-round" />
            <BackDropStyles.Image className="star star5" src={starRound} alt="star-round" />
            <BackDropStyles.Image className="star star6" src={starRound} alt="star-round" />
            <BackDropStyles.Image className="star star7" src={starRound} alt="star-round" />

            <BackDropStyles.Image className="star star8" src={starShaped} alt="star-shaped" />
            <BackDropStyles.Image className="star star9" src={starShaped} alt="star-shaped" />
            <BackDropStyles.Image className="star star10" src={starShaped} alt="star-shaped" />
            <BackDropStyles.Image className="star star11" src={starShaped} alt="star-shaped" />
            <BackDropStyles.Image className="star star12" src={starShaped} alt="star-shaped" />
        </BackDropStyles.Wrapper>
    );
};
