import { useMemo } from "react";

import { ApplyPeople } from "../api";

export const useFilteredPeople = (people: ApplyPeople[], searchTerm: string) => {
    const filteredPeople = useMemo(() => {
        return people.filter(
            (person) =>
                person.name.includes(searchTerm) ||
                person.studentId.toString().includes(searchTerm) ||
                person.phoneNumber.toString().includes(searchTerm) ||
                person.major.includes(searchTerm),
        );
    }, [people, searchTerm]);

    return filteredPeople;
};
