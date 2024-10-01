import { Text } from "../Text/Text";
import * as SubmitButtonStyles from "./SubmitButton.style";

export interface SubmitButtonProps extends React.ComponentProps<"button"> {
    children: React.ReactNode;
}

export const SubmitButton = ({ children, ...rest }: SubmitButtonProps) => {
    return (
        <SubmitButtonStyles.SubmitElement {...rest}>
            <Text size="s" weight="bold" color="#fff">
                {children}
            </Text>
        </SubmitButtonStyles.SubmitElement>
    );
};
