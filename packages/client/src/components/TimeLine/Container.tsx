import * as TimeLineContainerStyles from "./Container.style";

export interface TimeLineContainerProps {
    children?: React.ReactNode;
}

export const TimeLineContainer = (props: TimeLineContainerProps) => {
    return <TimeLineContainerStyles.Wrapper>{props.children}</TimeLineContainerStyles.Wrapper>;
};
