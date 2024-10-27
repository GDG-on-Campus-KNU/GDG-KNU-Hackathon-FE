import { useState } from "react";

import { PeopleResponseData } from "../api/mock/useGetPeople";

export const useDeletePerson = (initialPeople: PeopleResponseData[]) => {
    const [people, setPeople] = useState<PeopleResponseData[]>(initialPeople);

    const deletePerson = (id: number) => {
        setPeople(people.filter((person) => person.id !== id));
    };

    return { people, setPeople, deletePerson };
};
