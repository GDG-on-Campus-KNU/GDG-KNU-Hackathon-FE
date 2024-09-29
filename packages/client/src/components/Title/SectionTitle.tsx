import { Text } from "../Text/Text";
import * as SectionTitleStyles from "./SectionTitle.style";

export interface SectionTitleProps {
    title: React.ReactNode;
    subtitle: React.ReactNode;
}

export const SectionTitle = (props: SectionTitleProps) => {
    return (
        <SectionTitleStyles.Container>
            <SectionTitleStyles.SubTitle>
                <Text size="m">{props.subtitle}</Text>
            </SectionTitleStyles.SubTitle>
            <SectionTitleStyles.Title>
                <Text size="xl" weight="bold">
                    {props.title}
                </Text>
            </SectionTitleStyles.Title>
        </SectionTitleStyles.Container>
    );
};
