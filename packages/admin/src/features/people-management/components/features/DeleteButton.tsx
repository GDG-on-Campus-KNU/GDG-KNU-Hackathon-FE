import { X } from "lucide-react";

import { useDeleteInfo } from "../../api";

type Props = {
    id: number;
    name: string;
};

export const DeleteButton = ({ id, name }: Props) => {
    const { mutate: deleteInfo } = useDeleteInfo(id);

    const deletePerson = () => {
        const isConfirmed = window.confirm(`${name}님을 정말 삭제하시겠습니까?`);

        if (isConfirmed) {
            deleteInfo();
        }
    };

    return (
        <button className="text-red-600 hover:text-red-900" onClick={deletePerson}>
            <X className="w-5 h-5" />
        </button>
    );
};
