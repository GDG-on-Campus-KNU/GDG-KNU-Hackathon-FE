import { Search } from "lucide-react";

type Props = {
    searchTerm: string;
    setSearchTerm: (term: string) => void;
};

const InputField = ({ searchTerm, setSearchTerm }: Props) => {
    return (
        <div className="relative mb-4">
            <input
                type="text"
                placeholder="이름, 학번, 전화번호 또는 전공으로 검색..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
        </div>
    );
};

export default InputField;
