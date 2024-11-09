import { ApplicantCheckInResponse } from "./types";
import { fetchInstance } from "@/shared";

export const applicantCheckInPath = (id: number) => `/admin/people/checkin/${id}`;

export const applicantCheckIn = async (id: number): Promise<ApplicantCheckInResponse> => {
    const response = await fetchInstance.put<ApplicantCheckInResponse>(applicantCheckInPath(id));

    return response.data;
};
