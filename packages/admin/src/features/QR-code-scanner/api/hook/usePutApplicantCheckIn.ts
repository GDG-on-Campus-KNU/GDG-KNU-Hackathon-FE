import { applicantCheckIn } from "../applicant-check-in.api";
import { useMutation } from "@tanstack/react-query";

export const usePutApplicantCheckIn = (id: number) => {
    return useMutation({
        mutationFn: () => applicantCheckIn(id),
        onSuccess: () => {
            alert("체크인이 완료되었습니다.");
        },
        onError: (error) => {
            console.error(error);
            alert("체크인에 실패했습니다.");
        },
    });
};
