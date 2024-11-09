import { DepositCheckResponse } from "./types";
import { fetchInstance } from "@/shared";

export const putDepositCheckPath = (id: number) => `/admin/people/accept/${id}`;

export const putDepositCheck = async (id: number): Promise<DepositCheckResponse> => {
    const response = await fetchInstance.put<DepositCheckResponse>(putDepositCheckPath(id));

    return response.data;
};
