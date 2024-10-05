import { useRef } from "react";

import gsap from "gsap";

import { Text } from "../Text/Text";
import * as TopicCardStyles from "./TopicCard.style";
import { useGSAP } from "@gsap/react";

export interface TopicCardProps {
    index: number;
    content: string;
}

export const TopicCard = (props: TopicCardProps) => {
    const topicCardRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(
            topicCardRef.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                scrollTrigger: {
                    trigger: topicCardRef.current,
                    start: "top 70%",
                    end: "bottom 70%",
                    markers: true,
                },
            },
        );
    });

    return (
        <TopicCardStyles.Container ref={topicCardRef}>
            <TopicCardStyles.Index>
                <Text size="xs" color="var(--color-blue)" weight="bold">
                    {(props.index + 1).toString().padStart(2, "0")}
                </Text>
            </TopicCardStyles.Index>

            <TopicCardStyles.Content>
                <Text size="l" color="var(--color-blue)" weight="bold">
                    {props.content}
                </Text>
            </TopicCardStyles.Content>
        </TopicCardStyles.Container>
    );
};
