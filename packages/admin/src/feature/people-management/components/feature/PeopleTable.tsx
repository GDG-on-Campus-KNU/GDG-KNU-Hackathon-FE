import { ChevronDown, X } from "lucide-react";

import { PeopleResponseData } from "../../api/mock/useGetPeople";

type Props = {
    people: PeopleResponseData[];
    updatePersonStatus: (id: number, status: "accepted" | "rejected" | "checkedIn" | "checkedOut") => void;
    deletePerson: (id: number) => void;
};

const PeopleTable = ({ people, updatePersonStatus, deletePerson }: Props) => {
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
                            전공
                        </th>
                        <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                            승인
                        </th>
                        <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                            체크인/아웃
                        </th>
                        <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
                            삭제
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {people.map((person) => (
                        <tr key={person.id}>
                            <td className="px-6 py-4 whitespace-nowrap">{person.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{person.studentId}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{person.phoneNumber}</td>
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
                                        person.checkedIn ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"
                                    }`}
                                    onClick={() =>
                                        updatePersonStatus(person.id, person.checkedIn ? "checkedOut" : "checkedIn")
                                    }
                                    disabled={!person.accepted}
                                >
                                    {person.checkedIn ? "체크인됨" : "미체크인"}
                                    <ChevronDown className="w-4 h-4 ml-1" />
                                </button>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <button
                                    className="text-red-600 hover:text-red-900"
                                    onClick={() => deletePerson(person.id)}
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PeopleTable;
