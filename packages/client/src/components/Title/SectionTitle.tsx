import * as SectionTitleStyles from "./SectionTitle.style";

export interface SectionTitleProps {
    title: React.ReactNode;
    subtitle: React.ReactNode;
}

export const SectionTitle = (props: SectionTitleProps) => {
    return (
        <SectionTitleStyles.Container>
            <SectionTitleStyles.SubTitle>{props.subtitle}</SectionTitleStyles.SubTitle>
            <SectionTitleStyles.Title>{props.title}</SectionTitleStyles.Title>
        </SectionTitleStyles.Container>
    );
};
