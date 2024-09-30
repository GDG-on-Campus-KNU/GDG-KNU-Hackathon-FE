import gsap from "gsap";

import { HeroBackDrop } from "@/components/BackDrop/Hero";
import { Button } from "@/components/Button/Button";
import { Chip } from "@/components/Chip/Chip";
import { Text } from "@/components/Text/Text";

import mainLogo from "@/assets/images/mainLogo.svg";

import * as HeroSectionStyles from "./HeroSection.style";
import { useGSAP } from "@gsap/react";

export interface HeroSectionProps {
    title: string;
    date: string;
    location: string;
}

export const HeroSection = (props: HeroSectionProps) => {
    useGSAP(() => {
        gsap.to(".hero-content", {
            opacity: 0,
            scrollTrigger: {
                trigger: ".hero-content",
                start: "top 0%",
                end: "bottom 50%",
                scrub: 1,
            },
        });
    });

    return (
        <HeroSectionStyles.Section>
            <HeroSectionStyles.Wrapper>
                <HeroSectionStyles.Header className="hero-content">
                    <HeroSectionStyles.HeaderItems>
                        <Chip width="150px">{props.date}</Chip>

                        <HeroSectionStyles.HeaderItem>
                            <HeroSectionStyles.Title>
                                <Text size="l" weight="bold">
                                    {props.title}
                                </Text>
                            </HeroSectionStyles.Title>
                            <HeroSectionStyles.MainLogo src={mainLogo} />
                        </HeroSectionStyles.HeaderItem>

                        <Chip width="150px">{props.location}</Chip>

                        <HeroSectionStyles.MobileChipContainer>
                            <Chip width="150px">{props.location}</Chip>
                            <Chip width="150px">{props.date}</Chip>
                        </HeroSectionStyles.MobileChipContainer>
                    </HeroSectionStyles.HeaderItems>
                </HeroSectionStyles.Header>

                <HeroSectionStyles.Body className="hero-content">
                    <Button
                        variant="white"
                        onClick={() => document.getElementById("apply-section")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        신청하기
                    </Button>
                </HeroSectionStyles.Body>

                <HeroBackDrop endHeight={1000} />
            </HeroSectionStyles.Wrapper>
        </HeroSectionStyles.Section>
    );
};
