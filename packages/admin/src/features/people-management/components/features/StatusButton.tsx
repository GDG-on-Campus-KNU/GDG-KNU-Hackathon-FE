import { ChevronDown } from "lucide-react";

import { usePutDepositCheck } from "../../api";

type Props = {
    accepted: boolean;
    id: number;
};

export const StatusButton = ({ accepted, id }: Props) => {
    const { mutate: updatePersonStatus } = usePutDepositCheck(id);
    const handleChangeStatus = () => {
        updatePersonStatus();
    };

    return (
        <button
            className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                accepted ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
            }`}
            onClick={handleChangeStatus}
        >
            {accepted ? "입금 완료" : "입금 전"}
            <ChevronDown className="w-4 h-4 ml-1" />
        </button>
    );
};
