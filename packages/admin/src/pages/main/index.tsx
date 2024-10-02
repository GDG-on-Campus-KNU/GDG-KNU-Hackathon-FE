import { useState } from "react";

import QRCodeScanner from "../QR-code-scanner";
import ChatInterface from "../chat";
import PeopleManagement from "../people-management";

const MainPage = () => {
    const [activeMenu, setActiveMenu] = useState("people");
    return (
        <div className="flex flex-col min-h-screen bg-gray-100 lg:flex-row">
            <aside className="w-full bg-white shadow-md lg:w-64">
                <nav className="flex flex-col p-4">
                    <h2 className="mb-4 text-lg font-semibold">Admin Panel</h2>
                    <button
                        onClick={() => setActiveMenu("people")}
                        className={`py-2 px-4 mt-2 text-left rounded ${activeMenu === "people" ? "bg-blue-500 text-white" : "hover:bg-gray-200"}`}
                    >
                        People
                    </button>
                    <button
                        onClick={() => setActiveMenu("qr")}
                        className={`py-2 px-4 mt-2 text-left rounded ${activeMenu === "qr" ? "bg-blue-500 text-white" : "hover:bg-gray-200"}`}
                    >
                        QR Code Menu
                    </button>
                    <button
                        onClick={() => setActiveMenu("chat")}
                        className={`py-2 px-4 mt-2 text-left rounded ${activeMenu === "chat" ? "bg-blue-500 text-white" : "hover:bg-gray-200"}`}
                    >
                        Chat
                    </button>
                </nav>
            </aside>
            <main className="flex-1">
                {activeMenu === "people" && <PeopleManagement />}
                {activeMenu === "qr" && <QRCodeScanner />}
                {activeMenu === "chat" && <ChatInterface />}
            </main>
        </div>
    );
};

export default MainPage;
