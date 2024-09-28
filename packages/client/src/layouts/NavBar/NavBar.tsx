import { Text } from "@/components/Text/Text";

import logoNav from "@/assets/images/logoNav.svg";

import * as NavBarStyles from "./NavBar.style";

export interface NavBarProps {
    location: string;
    locationDetail: string;
}

export const NavBar = (props: NavBarProps) => {
    return (
        <NavBarStyles.Wrapper>
            <NavBarStyles.Container>
                <NavBarStyles.Item>
                    <NavBarStyles.Logo src={logoNav} />
                </NavBarStyles.Item>

                <NavBarStyles.Item>
                    <Text size="xs" weight="bold">
                        {props.location}
                    </Text>
                    <Text size="xs" weight="bold">
                        |
                    </Text>
                    <Text size="xs" weight="bold">
                        {props.locationDetail}
                    </Text>
                </NavBarStyles.Item>
                {/* <NavBarStyles.Container></NavBarStyles.Container> */}
            </NavBarStyles.Container>
        </NavBarStyles.Wrapper>
    );
};
