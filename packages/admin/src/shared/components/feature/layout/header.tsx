import { Menu } from "lucide-react";

type Props = {
    toggleSidebar: () => void;
};

const Header = ({ toggleSidebar }: Props) => {
    return (
        <header className="flex items-center justify-between p-4 bg-white shadow-md lg:hidden">
            <button className="p-2 rounded-md hover:bg-gray-100" onClick={toggleSidebar}>
                <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold">관리자 패널</h1>
        </header>
    );
};

export default Header;
