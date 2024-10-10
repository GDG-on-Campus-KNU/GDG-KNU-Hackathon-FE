import { useMemo } from "react";

import { PeopleResponseData } from "../api/mock/useGetPeople";

const useFilteredPeople = (people: PeopleResponseData[], searchTerm: string) => {
    const filteredPeople = useMemo(() => {
        return people.filter(
            (person) =>
                person.name.includes(searchTerm) ||
                person.studentId.includes(searchTerm) ||
                person.phoneNumber.includes(searchTerm) ||
                person.major.includes(searchTerm),
        );
    }, [people, searchTerm]);

    return filteredPeople;
};

export default useFilteredPeople;
