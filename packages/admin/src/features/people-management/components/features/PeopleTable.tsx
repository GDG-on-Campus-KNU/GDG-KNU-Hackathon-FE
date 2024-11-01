import { useState, useRef, useEffect, useCallback } from "react";

import { ChevronDown } from "lucide-react";

import { ApplyPeople } from "@/features";

type Props = {
    people?: ApplyPeople[];
    isLoading: boolean;
    hasNextPage: boolean;
    fetchNextPage: () => void;
    updatePersonStatus: (id: number, status: "accepted" | "rejected" | "checkedIn" | "checkedOut") => void;
};

export const PeopleTable = ({ people, updatePersonStatus, isLoading, hasNextPage, fetchNextPage }: Props) => {
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
                        <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                            이름
                        </th>
                        <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                            학번
                        </th>
                        <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                            전화번호
                        </th>
                        <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                            팀 이름
                        </th>
                        <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                            전공
                        </th>
                        <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                            승인
                        </th>
                        <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                            체크인/아웃
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {isLoading
                        ? Array.from({ length: 5 }).map((_, idx) => (
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
                                      <button
                                          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                                              person.accepted
                                                  ? "bg-green-100 text-green-800"
                                                  : "bg-yellow-100 text-yellow-800"
                                          }`}
                                          onClick={() =>
                                              updatePersonStatus(person.id, person.accepted ? "rejected" : "accepted")
                                          }
                                      >
                                          {person.accepted ? "승인됨" : "미승인"}
                                          <ChevronDown className="w-4 h-4 ml-1" />
                                      </button>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                      <button
                                          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                                              person.checkined
                                                  ? "bg-blue-100 text-blue-800"
                                                  : "bg-gray-100 text-gray-800"
                                          }`}
                                          onClick={() =>
                                              updatePersonStatus(
                                                  person.id,
                                                  person.checkined ? "checkedOut" : "checkedIn",
                                              )
                                          }
                                          disabled={!person.accepted}
                                      >
                                          {person.checkined ? "체크인됨" : "미체크인"}
                                          <ChevronDown className="w-4 h-4 ml-1" />
                                      </button>
                                  </td>
                              </tr>
                          ))}
                </tbody>
            </table>
        </div>
    );
};
