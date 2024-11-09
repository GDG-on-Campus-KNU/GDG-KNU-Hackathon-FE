import { DeleteInfoResponse } from "./types";
import { fetchInstance } from "@/shared";

export const deleteInfoPath = (id: number) => `/admin/people/${id}`;

export const deleteInfo = async (id: number): Promise<DeleteInfoResponse> => {
    const response = await fetchInstance.delete<DeleteInfoResponse>(deleteInfoPath(id));

    return response.data;
};
