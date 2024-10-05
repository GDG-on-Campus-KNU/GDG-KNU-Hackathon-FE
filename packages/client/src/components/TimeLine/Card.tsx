import { useRef } from "react";

import gsap from "gsap";

import timelineDot from "@/assets/images/timeline-dot.svg";

import { Text } from "../Text/Text";
import * as TimeLineCardStyles from "./Card.style";
import { useGSAP } from "@gsap/react";

export interface TimeLineCardProps {
    date?: string;
    time: string;

    title: string;
    description?: string;
}

export const TimeLineCard = (props: TimeLineCardProps) => {
    const timelineRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(
            timelineRef.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                scrollTrigger: {
                    trigger: timelineRef.current,
                    start: "top 70%",
                    end: "bottom 70%",
                    toggleActions: "play play resume none",
                },
            },
        );
    });

    return (
        <TimeLineCardStyles.Wrapper>
            <TimeLineCardStyles.Aside>
                <Text size="m" weight="bold">
                    {props.date}
                </Text>
                <TimeLineCardStyles.Dot src={timelineDot} alt="timeline-dot" />
            </TimeLineCardStyles.Aside>

            <TimeLineCardStyles.Line />

            <TimeLineCardStyles.Container>
                <TimeLineCardStyles.Item ref={timelineRef}>
                    <TimeLineCardStyles.Time>
                        <Text size="m" weight="bold">
                            {props.time}
                        </Text>
                    </TimeLineCardStyles.Time>

                    <TimeLineCardStyles.Content>
                        <TimeLineCardStyles.Title>
                            <Text size="m" weight="bold">
                                {props.title}
                            </Text>
                        </TimeLineCardStyles.Title>

                        {props.description && (
                            <TimeLineCardStyles.Description>
                                <Text size="s">{props.description}</Text>
                            </TimeLineCardStyles.Description>
                        )}
                    </TimeLineCardStyles.Content>
                </TimeLineCardStyles.Item>
            </TimeLineCardStyles.Container>
        </TimeLineCardStyles.Wrapper>
    );
};
