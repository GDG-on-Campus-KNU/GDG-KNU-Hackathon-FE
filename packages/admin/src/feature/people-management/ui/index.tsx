import { useState } from "react";

import MainContents from "../components/common/MainContents";
import { QRCodeScannerPage } from "@/feature/QR-code-scanner";
import Header from "@/shared/components/feature/layout/header";
import Sidebar from "@/shared/components/feature/layout/sidebar";

const PeopleManagementPage = () => {
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

export default PeopleManagementPage;
