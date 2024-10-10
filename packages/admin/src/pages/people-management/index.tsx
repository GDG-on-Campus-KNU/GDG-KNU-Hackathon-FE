import { useState } from "react";

import { CheckIcon, Table, XIcon } from "lucide-react";

import PERSON from "./data/PERSON.json";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/shared/components/ui/table";

type person = {
    id: number;
    name: string;
    studentId: string;
    phoneNumber: string;
    major: string;
    accepted: boolean;
    checkedIn: boolean;
};

const PeopleManagement = () => {
    const [people, setPeople] = useState<person[]>(PERSON);
    const [newPerson, setNewPerson] = useState({ name: "", studentId: "", phoneNumber: "", major: "" });
    const [checkInStudentId, setCheckInStudentId] = useState("");

    const addPerson = () => {
        if (newPerson.name && newPerson.studentId && newPerson.phoneNumber && newPerson.major) {
            setPeople([...people, { id: people.length + 1, ...newPerson, accepted: false, checkedIn: false }]);
            setNewPerson({ name: "", studentId: "", phoneNumber: "", major: "" });
        }
    };

    const deletePerson = (id: number) => {
        setPeople(people.filter((person) => person.id !== id));
    };

    const toggleAccept = (id: number) => {
        setPeople(people.map((person) => (person.id === id ? { ...person, accepted: !person.accepted } : person)));
    };

    const toggleCheckin = (id: number) => {
        setPeople(people.map((person) => (person.id === id ? { ...person, checkedIn: !person.checkedIn } : person)));
    };

    const checkInByStudentId = (studentId: string) => {
        setPeople(
            people.map((person) =>
                person.studentId === studentId && person.accepted ? { ...person, checkedIn: true } : person,
            ),
        );
    };

    return (
        <div className="p-8">
            <h1 className="mb-6 text-2xl font-bold">People Management</h1>
            <div className="flex flex-wrap gap-4 mb-6">
                <Input
                    placeholder="Name"
                    value={newPerson.name}
                    onChange={(e) => setNewPerson({ ...newPerson, name: e.target.value })}
                    className="flex-grow"
                />
                <Input
                    placeholder="Student ID"
                    value={newPerson.studentId}
                    onChange={(e) => setNewPerson({ ...newPerson, studentId: e.target.value })}
                    className="flex-grow"
                />
                <Input
                    placeholder="Phone Number"
                    value={newPerson.phoneNumber}
                    onChange={(e) => setNewPerson({ ...newPerson, phoneNumber: e.target.value })}
                    className="flex-grow"
                />
                <Input
                    placeholder="Major"
                    value={newPerson.major}
                    onChange={(e) => setNewPerson({ ...newPerson, major: e.target.value })}
                    className="flex-grow"
                />
                <Button onClick={addPerson} className="flex-grow sm:flex-grow-0">
                    Add Person
                </Button>
            </div>

            <div className="flex gap-4 mb-6">
                <Input
                    placeholder="Student ID to Check In"
                    value={checkInStudentId}
                    onChange={(e) => setCheckInStudentId(e.target.value)}
                    className="flex-grow"
                />
                <Button onClick={() => checkInByStudentId(checkInStudentId)} className="flex-grow sm:flex-grow-0">
                    Check In by Student ID
                </Button>
            </div>

            <div className="overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Student ID</TableHead>
                            <TableHead>Phone Number</TableHead>
                            <TableHead>Major</TableHead>
                            <TableHead>Accept</TableHead>
                            <TableHead>Check In</TableHead>
                            <TableHead>Check Out</TableHead>
                            <TableHead>Delete</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {people.map((person) => (
                            <TableRow key={person.id}>
                                <TableCell>{person.name}</TableCell>
                                <TableCell>{person.studentId}</TableCell>
                                <TableCell>{person.phoneNumber}</TableCell>
                                <TableCell>{person.major}</TableCell>
                                <TableCell>
                                    <Button
                                        variant={person.accepted ? "default" : "outline"}
                                        onClick={() => toggleAccept(person.id)}
                                    >
                                        {person.accepted ? <CheckIcon className="w-4 h-4" /> : "Accept"}
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button
                                        variant={person.checkedIn ? "default" : "outline"}
                                        onClick={() => toggleCheckin(person.id)}
                                        disabled={!person.accepted}
                                    >
                                        {person.checkedIn ? "Checked In" : "Check In"}
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button
                                        variant="outline"
                                        onClick={() => toggleCheckin(person.id)}
                                        disabled={!person.checkedIn}
                                    >
                                        Check Out
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <Button variant="destructive" onClick={() => deletePerson(person.id)}>
                                        <XIcon className="w-4 h-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default PeopleManagement;
