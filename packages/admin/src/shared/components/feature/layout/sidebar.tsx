import { QrCode, Users } from "lucide-react";

type Props = {
    isSidebarOpen: boolean;
    activePage: string;
    setActivePage: (page: string) => void;
};

const Sidebar = ({ isSidebarOpen, activePage, setActivePage }: Props) => {
    return (
        <aside className={`${isSidebarOpen ? "block" : "hidden"} lg:block w-full lg:w-64 bg-white shadow-md`}>
            <nav className="flex flex-col p-4 space-y-2">
                <h2 className="hidden px-4 mb-4 text-lg font-semibold lg:block">관리자 패널</h2>
                <button
                    className={`flex items-center px-4 py-2 rounded-md ${activePage === "people" ? "bg-blue-500 text-white" : "hover:bg-gray-100"}`}
                    onClick={() => setActivePage("people")}
                >
                    <Users className="w-4 h-4 mr-2" />
                    인원 관리
                </button>
                <button
                    className={`flex items-center px-4 py-2 rounded-md ${activePage === "qr" ? "bg-blue-500 text-white" : "hover:bg-gray-100"}`}
                    onClick={() => setActivePage("qr")}
                >
                    <QrCode className="w-4 h-4 mr-2" />
                    QR 코드 메뉴
                </button>
            </nav>
        </aside>
    );
};

export default Sidebar;
