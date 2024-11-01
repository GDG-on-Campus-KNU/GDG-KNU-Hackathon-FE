import { ApplyPeople } from "../api";

export const useUpdatePersonStatus = (people: ApplyPeople[], setPeople: (people: ApplyPeople[]) => void) => {
    const updatePersonStatus = (id: number, status: "accepted" | "rejected" | "checkedIn" | "checkedOut") => {
        setPeople(
            people.map((person) => {
                if (person.id === id) {
                    switch (status) {
                        case "accepted":
                            return { ...person, accepted: true };
                        case "rejected":
                            return { ...person, accepted: false };
                        case "checkedIn":
                            return { ...person, checkedIn: true };
                        case "checkedOut":
                            return { ...person, checkedIn: false };
                        default:
                            return person;
                    }
                }
                return person;
            }),
        );
    };

    return updatePersonStatus;
};
