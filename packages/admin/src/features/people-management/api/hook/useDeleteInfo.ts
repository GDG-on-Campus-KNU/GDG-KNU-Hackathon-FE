import { deleteInfo } from "../delete-info.api";
import { useMutation } from "@tanstack/react-query";

export const useDeleteInfo = (id: number) => {
    return useMutation({
        mutationFn: () => deleteInfo(id),
        onError: (error) => {
            console.error(error);
            alert("참가자 정보 삭제에 실패했습니다.");
        },
    });
};
