import { useState, useRef, useEffect, useCallback } from "react";

import { ApplyPeople, CheckInStatus, DeleteButton, StatusButton, TABLE_HEADERS } from "@/features";

type Props = {
    people?: ApplyPeople[];
    isLoading: boolean;
    hasNextPage: boolean;
    fetchNextPage: () => void;
};

export const PeopleTable = ({ people, isLoading, hasNextPage, fetchNextPage }: Props) => {
    const [applyPeople, setApplyPeople] = useState<ApplyPeople[]>([]);

    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (people) {
            setApplyPeople(people);
        }
    }, [people]);

    const lastPersonRef = useCallback(
        (node: HTMLTableRowElement) => {
            if (isLoading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && hasNextPage) {
                    fetchNextPage();
                }
            });
            if (node) observer.current.observe(node);
        },
        [isLoading, hasNextPage, fetchNextPage],
    );

    return (
        <div className="overflow-x-auto bg-white rounded-lg shadow">
            <table className="w-full">
                <thead>
                    <tr className="bg-gray-50">
                        {TABLE_HEADERS.map((header) => (
                            <th
                                key={header.key}
                                className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                            >
                                {header.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {isLoading
                        ? Array.from({ length: 10 }).map((_, idx) => (
                              <tr key={idx} className="animate-pulse">
                                  <td className="px-6 py-4 whitespace-nowrap">
                                      <div className="w-3/4 h-4 rounded bg-slate-200" />
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                      <div className="w-1/2 h-4 rounded bg-slate-200" />
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                      <div className="w-1/2 h-4 rounded bg-slate-200" />
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                      <div className="w-1/2 h-4 rounded bg-slate-200" />
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                      <div className="w-16 h-6 rounded bg-slate-200" />
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                      <div className="w-16 h-6 rounded bg-slate-200" />
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                      <div className="w-16 h-6 rounded bg-slate-200" />
                                  </td>
                              </tr>
                          ))
                        : applyPeople.map((person, index) => (
                              <tr
                                  key={person.studentId}
                                  ref={index === (people ? people.length - 1 : -1) ? lastPersonRef : null}
                              >
                                  <td className="px-6 py-4 whitespace-nowrap">{person.name}</td>
                                  <td className="px-6 py-4 whitespace-nowrap">{person.studentId}</td>
                                  <td className="px-6 py-4 whitespace-nowrap">{person.phoneNumber}</td>
                                  <td className="px-6 py-4 whitespace-nowrap">{person.teamName}</td>
                                  <td className="px-6 py-4 whitespace-nowrap">{person.major}</td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                      <StatusButton
                                          accepted={person.accepted}
                                          id={person.studentId}
                                          //   onClick={() => handleStatusChange(person.studentId, person.accepted)}
                                      />
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                      <CheckInStatus checkined={person.checkined} />
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                      <DeleteButton id={person.studentId} name={person.name} />
                                  </td>
                              </tr>
                          ))}
                </tbody>
            </table>
        </div>
    );
};
