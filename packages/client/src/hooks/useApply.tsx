import { useCallback, useRef, useState } from "react";

import { Text } from "@/components/Text/Text";

import { applyService } from "@/services/service";

import { useApplyModal } from "@/context/useApplyModal";

export const useApply = () => {
    const [isPending, setIsPending] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [data, setData] = useState<ApplyResponseBody | null>(null);
    const [error, setError] = useState<Error | null>(null);

    const nameRef = useRef<HTMLInputElement>(null);
    const studentIdRef = useRef<HTMLInputElement>(null);
    const majorRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const phoneNumberRef = useRef<HTMLInputElement>(null);
    const githubIdRef = useRef<HTMLInputElement>(null);
    const teamNameRef = useRef<HTMLInputElement>(null);

    const [position, setPosition] = useState<ApplyPosition | null>(null);

    const { openModal } = useApplyModal();

    const handleSubmit = useCallback(() => {
        const body: ApplyRequestBody = {
            name: nameRef.current?.value,
            studentId: Number(studentIdRef.current?.value),
            major: majorRef.current?.value,
            phoneNumber: phoneNumberRef.current?.value,
            position: position,
            githubId: githubIdRef.current?.value,
            teamName: teamNameRef.current?.value,
            email: emailRef.current?.value,
        };

        setIsPending(true);
        applyService
            .apply(body)
            .then((data) => {
                setData(data);
                openModal({
                    title: (
                        <Text size="l" weight="bold" color="var(--color-blue)">
                            신청 완료
                        </Text>
                    ),
                    description: (
                        <Text size="s" color="var(--color-blue)">
                            이메일을 확인해 주세요
                        </Text>
                    ),
                });
            })
            .catch((err) => {
                setIsError(true);
                setError(err);

                console.log(err);
                openModal({
                    title: (
                        <Text size="l" weight="bold" color="var(--color-blue)">
                            신청 실패
                        </Text>
                    ),
                    description: (
                        <Text size="s" color="var(--color-blue)">
                            {String(err.message)}
                        </Text>
                    ),
                });
            })
            .finally(() => {
                setIsPending(false);
            });
    }, [position, openModal]);

    return {
        isPending,
        isError,
        data,
        error,

        nameRef,
        studentIdRef,
        majorRef,
        phoneNumberRef,
        githubIdRef,
        teamNameRef,
        emailRef,

        position,
        setPosition,

        handleSubmit,
    };
};
