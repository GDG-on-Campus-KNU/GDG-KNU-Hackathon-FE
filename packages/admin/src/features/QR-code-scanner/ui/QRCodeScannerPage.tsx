import { useState, useEffect } from "react";
import { QrReader } from "react-qr-reader";

import { usePutApplicantCheckIn } from "../api";
import { Button } from "@/shared";

export const QRCodeScannerPage = () => {
    const [scannedDataList, setScannedDataList] = useState<{ studentId: number; message: string | null }[]>([]);
    const [scanning, setScanning] = useState(false);
    const [scannedStudentId, setScannedStudentId] = useState<number | null>(null);

    const { mutate: checkInApplicant } = usePutApplicantCheckIn();

    useEffect(() => {
        if (scannedStudentId !== null) {
            checkInApplicant(scannedStudentId, {
                onSuccess: () => updateMessage(scannedStudentId, "체크인 완료"),
                onError: () => updateMessage(scannedStudentId, "체크인 실패"),
            });
        }
    }, [scannedStudentId, checkInApplicant]);

    const updateMessage = (studentId: number, message: string) => {
        setScannedDataList((prevList) =>
            prevList.map((data) => (data.studentId === studentId ? { ...data, message } : data)),
        );
    };

    const handleScan = (result: { text: string } | null) => {
        if (result && result.text) {
            const scannedText = result.text;
            try {
                const parsedData = JSON.parse(scannedText);
                const studentId = parsedData.studentId;

                if (!scannedDataList.some((data) => data.studentId === studentId)) {
                    setScannedDataList((prevList) => [...prevList, { studentId, message: null }]);
                }

                setScannedStudentId(studentId);
                console.log("QR Code scanned:", scannedText);
            } catch (error) {
                console.error("QR 코드 파싱 에러:", error);
            }
        }
    };

    return (
        <div className="p-4 space-y-4">
            <h2 className="text-xl font-semibold">QR Code Scanner</h2>
            {scanning ? (
                <div className="w-full max-w-md mx-auto">
                    <QrReader
                        onResult={(result: { text: string } | null, error: any) => {
                            if (result) {
                                handleScan(result);
                            }
                            if (error) {
                                console.error("QR Reader error:", error);
                            }
                        }}
                        constraints={{ facingMode: "environment", width: 1280, height: 720 }}
                        style={{ width: "100%" }}
                    />
                    <Button onClick={() => setScanning(false)} className="mt-4">
                        Stop Scanning
                    </Button>
                </div>
            ) : (
                <Button onClick={() => setScanning(true)}>Start Scanning</Button>
            )}
            {scannedDataList.length > 0 && (
                <div className="mt-4">
                    <h3 className="text-lg font-medium">QR 코드 스캔 결과</h3>
                    <ul className="p-2 mt-2 space-y-2 bg-gray-100 rounded">
                        {scannedDataList.map(({ studentId, message }, index) => (
                            <li key={index} className="flex items-center p-2 bg-white rounded shadow">
                                <span>학번: {studentId}</span>
                                {message && (
                                    <span className="px-2 py-1 ml-2 text-sm text-white bg-blue-500 rounded">
                                        {message}
                                    </span>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};
