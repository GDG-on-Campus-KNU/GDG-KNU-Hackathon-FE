import { Text } from "../Text/Text";
import * as TopicCardContainerStyles from "./TopicCardContainer.style";

export interface TopicCardContainerProps {
    title: React.ReactNode;
    children?: React.ReactNode;
}

export const TopicCardContainer = (props: TopicCardContainerProps) => {
    return (
        <TopicCardContainerStyles.Wrapper>
            <TopicCardContainerStyles.Container>
                <TopicCardContainerStyles.Header>
                    <Text size="l" weight="bold">
                        {props.title}
                    </Text>
                </TopicCardContainerStyles.Header>
                {props.children}
            </TopicCardContainerStyles.Container>
        </TopicCardContainerStyles.Wrapper>
    );
};
