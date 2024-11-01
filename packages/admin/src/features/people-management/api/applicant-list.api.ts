import { ApplicantListResponse } from "./types";
import { fetchInstance } from "@/shared";

export const getApplicantListPath = () => `/admin/people`;

export const getApplicantList = async (page: number, per_page: number): Promise<ApplicantListResponse> => {
    const response = await fetchInstance.get(getApplicantListPath(), {
        params: {
            page,
            per_page,
        },
    });
    return response.data;
};
