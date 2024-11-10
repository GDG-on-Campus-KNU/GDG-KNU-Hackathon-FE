import { getApplicantListPath } from "../applicant-list.api";
import { deleteInfo } from "../delete-info.api";
import { queryClient } from "@/shared";
import { useMutation } from "@tanstack/react-query";

export const useDeleteInfo = (id: number) => {
    return useMutation({
        mutationFn: () => deleteInfo(id),
        onSuccess: () => {
            alert("참가자 정보가 삭제되었습니다.");

            queryClient.refetchQueries({ queryKey: [getApplicantListPath()] });
        },
        onError: (error) => {
            console.error(error);
            alert("참가자 정보 삭제에 실패했습니다.");
        },
    });
};
