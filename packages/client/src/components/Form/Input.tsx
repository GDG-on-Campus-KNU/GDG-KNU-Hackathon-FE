import { forwardRef } from "react";

import { Text } from "../Text/Text";
import * as InputStyles from "./Input.style";

export interface InputProps extends React.ComponentProps<"input"> {
    label?: string;
}

export const Input = forwardRef(({ label, ...rest }: InputProps, ref) => {
    return (
        <InputStyles.Container>
            <InputStyles.InputLabel htmlFor={label}>
                {label && (
                    <Text size="s" weight="bold" color="var(--color-blue)">
                        {label}
                    </Text>
                )}
            </InputStyles.InputLabel>
            <InputStyles.InputElement ref={ref} {...rest} />
        </InputStyles.Container>
    );
});
