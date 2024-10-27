import { useState } from "react";

import { MainContents, QRCodeScannerPage } from "@/features";
import { Header, Sidebar } from "@/shared";

export const PeopleManagementPage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [activePage, setActivePage] = useState("people");

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100 min-w-[520px]">
            {/* Mobile Header */}
            <Header toggleSidebar={toggleSidebar} />

            {/* Sidebar */}
            <Sidebar isSidebarOpen={isSidebarOpen} activePage={activePage} setActivePage={setActivePage} />

            {/* Main Content */}
            <main className="flex-1">{activePage === "people" ? <MainContents /> : <QRCodeScannerPage />}</main>
        </div>
    );
};
