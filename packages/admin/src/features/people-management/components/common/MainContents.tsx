import { useState } from "react";

import {
    InputField,
    PeopleTable,
    useDeletePerson,
    useUpdatePersonStatus,
    useFilteredPeople,
    useGetPeople,
} from "@/feature";

export const MainContents = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const { data } = useGetPeople();

    const { people, setPeople, deletePerson } = useDeletePerson(data);

    const updatePersonStatus = useUpdatePersonStatus(people, setPeople);

    const filteredPeople = useFilteredPeople(people, searchTerm);

    return (
        <main className="flex-1 p-4 lg:p-8">
            <h1 className="mb-6 text-2xl font-bold">인원 관리</h1>
            <InputField searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <PeopleTable people={filteredPeople} updatePersonStatus={updatePersonStatus} deletePerson={deletePerson} />
        </main>
    );
};
