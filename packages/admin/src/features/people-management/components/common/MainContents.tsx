import { useState, useEffect } from "react";

import { InputField, PeopleTable, useFilteredPeople, useGetApplicantList, ApplyPeople } from "@/features";

export const MainContents = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [people, setPeople] = useState<ApplyPeople[]>([]);
    const { data, isLoading, fetchNextPage, hasNextPage } = useGetApplicantList(10);

    useEffect(() => {
        if (data) {
            const fetchedPeople = data.pages.flatMap((page) => page.applyPeople);
            setPeople(fetchedPeople);
        }
    }, [data]);

    const filteredPeople = useFilteredPeople(people, searchTerm);

    return (
        <main className="flex-1 p-4 lg:p-8">
            <h1 className="mb-6 text-2xl font-bold">인원 관리</h1>
            <InputField searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <PeopleTable
                people={filteredPeople}
                isLoading={isLoading}
                hasNextPage={hasNextPage}
                fetchNextPage={fetchNextPage}
            />
        </main>
    );
};
