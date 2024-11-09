import { putDepositCheck, putDepositCheckPath } from "../deposit-check";
import { DepositCheckResponse } from "../types";
import { queryClient } from "@/shared";
import { useMutation, UseMutationResult } from "@tanstack/react-query";

const putDepositCheckQueryKey = [putDepositCheckPath];

export const usePutDepositCheck = (id: number): UseMutationResult<DepositCheckResponse, Error, void> => {
    return useMutation<DepositCheckResponse, Error, void>({
        mutationFn: () => putDepositCheck(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [putDepositCheckQueryKey, id] });
            alert("승인 상태로 변경되었습니다.");
        },
        onError: (error) => {
            console.error("승인 상태 변경에 실패했습니다.", error);
            alert("승인 상태 변경에 실패했습니다.");
        },
    });
};
