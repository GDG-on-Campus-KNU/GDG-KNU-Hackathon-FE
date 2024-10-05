import * as ApproveButtonStyles from "./ApproveButton.style";

export type ApproveButtonProps = React.ComponentProps<"button">;

export const ApproveButton = ({ children, ...rest }: ApproveButtonProps) => {
    return <ApproveButtonStyles.Element {...rest}>{children}</ApproveButtonStyles.Element>;
};
