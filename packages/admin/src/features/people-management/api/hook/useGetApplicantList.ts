import { getApplicantList, getApplicantListPath } from "../applicant-list.api";
import { ApplicantListResponse } from "../types";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useGetApplicantList = (perPage: number) => {
    return useInfiniteQuery<ApplicantListResponse, Error>({
        queryKey: [getApplicantListPath(), perPage],
        queryFn: ({ pageParam = 1 }) => getApplicantList(Number(pageParam), perPage),
        initialPageParam: 1,
        getNextPageParam: (lastPage) => {
            const { currentPage, totalPages } = lastPage.pageInfo;
            return currentPage < totalPages ? currentPage + 1 : undefined;
        },
    });
};
