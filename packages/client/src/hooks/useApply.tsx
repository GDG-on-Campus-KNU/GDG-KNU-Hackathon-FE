import { useCallback, useRef, useState } from "react";

import { applyService } from "@/services/service";

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

        console.log(body);
        setIsPending(true);
        applyService
            .apply(body)
            .then((data) => {
                setData(data);
            })
            .catch((err) => {
                setIsError(true);
                setError(err);
            })
            .finally(() => {
                setIsPending(false);
            });
    }, [position]);

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
