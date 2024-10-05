import * as ButtonStyles from "./Button.style";

export interface ButtonProps extends React.ComponentProps<"button"> {
    variant: "white" | "blue" | "darkblue";
}

export const Button = ({ variant, children, ...rest }: ButtonProps) => {
    return (
        <ButtonStyles.Element variant={variant} {...rest}>
            {children}
        </ButtonStyles.Element>
    );
};
