import { useRef } from "react";

import gsap from "gsap";

import { Text } from "@/components/Text/Text";

import * as NavBarStyles from "./NavBar.style";
import { useGSAP } from "@gsap/react";

export interface NavBarProps {
    location: string;
    locationDetail: string;
}

export const NavBar = (props: NavBarProps) => {
    const navbarRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.fromTo(
            navbarRef.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                scrollTrigger: {
                    trigger: navbarRef.current,
                    start: "top 0%",
                    end: "bottom 0%",
                    toggleActions: "play none reset none",
                },
            },
        );
    });

    return (
        <NavBarStyles.Wrapper ref={navbarRef}>
            <NavBarStyles.Container>
                <NavBarStyles.Item>
                    <Text size="xs" weight="bold">
                        VISION CHALLENGETHON
                    </Text>
                    <Text size="xs" weight="bold">
                        2024. 11. 15 - 16
                    </Text>
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
