import * as SponsorCardContainerStyles from "./CardContainer.style";

export interface SponsorCardContainerProps {
    children?: React.ReactNode;
}

export const SponsorCardContainer = (props: SponsorCardContainerProps) => {
    return <SponsorCardContainerStyles.Wrapper>{props.children}</SponsorCardContainerStyles.Wrapper>;
};
