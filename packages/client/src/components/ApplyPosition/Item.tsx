import { Text } from "../Text/Text";
import * as ApplyPositionItemStyles from "./Item.style";
import { useApplyPosition } from "@/context/useApplyPosition";

export interface ApplyPositionItemProps extends React.ComponentProps<"div"> {
    value: ApplyPosition;
    children: React.ReactNode;
}

export const ApplyPositionItem = ({ children, value, ...rest }: ApplyPositionItemProps) => {
    const { position, setPosition } = useApplyPosition();

    return (
        <ApplyPositionItemStyles.Element {...rest} selected={position === value} onClick={() => setPosition(value)}>
            <Text size="s" weight="bold">
                {children}
            </Text>
        </ApplyPositionItemStyles.Element>
    );
};
