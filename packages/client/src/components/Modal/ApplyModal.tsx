import { useCallback, useLayoutEffect, useRef } from "react";

import { ApproveButton } from "../Button/ApproveButton";
import { Text } from "../Text/Text";
import * as ApplyModalStyles from "./ApplyModal.style";
import { useApplyModal } from "@/context/useApplyModal";

export interface ApplyModalProps {
    title: React.ReactNode;
    description: React.ReactNode;
}

export const ApplyModal = (props: ApplyModalProps) => {
    const modalWrapper = useRef<HTMLDivElement>(null);

    const { closeModal } = useApplyModal();

    const openModalAnimation = useCallback(() => {
        if (modalWrapper.current) {
            modalWrapper.current.style.opacity = "1";
        }
        requestAnimationFrame(openModalAnimation);
    }, []);

    useLayoutEffect(() => {
        requestAnimationFrame(openModalAnimation);
    }, [openModalAnimation]);

    return (
        <ApplyModalStyles.Wrapper ref={modalWrapper}>
            <ApplyModalStyles.Container>
                <ApplyModalStyles.Title>
                    <Text size="l" color="var(--color-blue)" weight="bold">
                        {props.title}
                    </Text>
                </ApplyModalStyles.Title>
                <ApplyModalStyles.Description>
                    <Text size="s" color="var(--color-blue)">
                        {props.description}
                    </Text>
                </ApplyModalStyles.Description>

                <ApproveButton onClick={closeModal}>
                    <Text size="s" weight="bold">
                        확인
                    </Text>
                </ApproveButton>
            </ApplyModalStyles.Container>
        </ApplyModalStyles.Wrapper>
    );
};
