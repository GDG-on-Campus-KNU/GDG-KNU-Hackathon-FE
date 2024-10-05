import { Text } from "../Text/Text";
import * as ChipStyles from "./Chip.style";

export interface ChipProps {
    width: string;
    children: React.ReactNode;
}

export const Chip = ({ children, ...rest }: ChipProps) => {
    return (
        <ChipStyles.Container {...rest}>
            <Text size="s" color="var(--color-blue)" weight={900}>
                {children}
            </Text>
        </ChipStyles.Container>
    );
};
