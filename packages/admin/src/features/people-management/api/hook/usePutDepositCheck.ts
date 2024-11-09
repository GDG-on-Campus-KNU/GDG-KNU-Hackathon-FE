import { putDepositCheck } from "../deposit-check";
import { DepositCheckResponse } from "../types";
import { useMutation, UseMutationResult } from "@tanstack/react-query";

export const usePutDepositCheck = (id: number): UseMutationResult<DepositCheckResponse, Error, void> => {
    return useMutation<DepositCheckResponse, Error, void>({
        mutationFn: () => putDepositCheck(id),
        onSuccess: () => {
            alert("입금 완료로 상태가 변경되었습니다.");
        },
        onError: (error) => {
            console.error("입금 완료 상태 변경에 실패했습니다.", error);
            alert("입금 완료 상태 변경에 실패했습니다.");
        },
    });
};
