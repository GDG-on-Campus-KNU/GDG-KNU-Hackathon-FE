import { useState } from "react";

import { useGetPeople } from "../../api/mock/useGetPeople";
import useDeletePerson from "../../hook/useDeletePerson";
import useFilteredPeople from "../../hook/useFilteredPeople";
import useUpdatePersonStatus from "../../hook/useUpdatePersonStatus";
import InputField from "../feature/InputField";
import PeopleTable from "../feature/PeopleTable";

const MainContents = () => {
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

export default MainContents;
