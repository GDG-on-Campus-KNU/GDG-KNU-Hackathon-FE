import * as SpinnerStyles from "./Spinner.styles";

export interface SpinnerProps {
    width: string;
    height: string;
}

export const Spinner = ({ width, height }: SpinnerProps) => {
    return <SpinnerStyles.Element width={width} height={height} />;
};
