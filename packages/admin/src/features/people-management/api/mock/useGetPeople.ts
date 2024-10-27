import PEOPLE from "@/feature/people-management/data/PEOPLE.json";

export type PeopleResponseData = {
    id: number;
    name: string;
    studentId: string;
    phoneNumber: string;
    major: string;
    accepted: boolean;
    checkedIn: boolean;
};

export const useGetPeople = () => {
    const data = PEOPLE;

    return { data };
};
