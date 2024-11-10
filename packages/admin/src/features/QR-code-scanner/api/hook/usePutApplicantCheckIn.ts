import { applicantCheckIn } from "../applicant-check-in.api";
import { ApplicantCheckInResponse } from "../types";
import { useMutation } from "@tanstack/react-query";

export const usePutApplicantCheckIn = () => {
    return useMutation<ApplicantCheckInResponse, Error, number>({
        mutationFn: (id: number) => applicantCheckIn(id),
        onSuccess: () => {
            alert("체크인이 완료되었습니다.");
        },
        onError: (error: Error) => {
            console.error(error);
            alert("체크인에 실패했습니다.");
        },
    });
};
