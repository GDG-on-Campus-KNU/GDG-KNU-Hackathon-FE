export type ApplyPeople = {
    id: number;
    studentId: number;
    email: string;
    githubId: string;
    major: string;
    name: string;
    phoneNumber: string;
    position: string;
    teamName: string;
    accepted: boolean;
    checkined: boolean;
};

export type PageInfo = {
    currentPage: number;
    perPage: number;
    totalItems: number;
    totalPages: number;
};

export type ApplicantListResponse = {
    status: number;
    applyPeople: ApplyPeople[];
    pageInfo: PageInfo;
};
