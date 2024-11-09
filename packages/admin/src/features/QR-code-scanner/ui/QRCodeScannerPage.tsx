import { useState } from "react";
import { QrReader } from "react-qr-reader";

import { usePutApplicantCheckIn } from "../api";
import { Button } from "@/shared";

export const QRCodeScannerPage = () => {
    const [scannedData, setScannedData] = useState<string | null>(null);
    const [scanning, setScanning] = useState(false);
    const [scannedStudentId, setScannedStudentId] = useState<number>(0);

    const { mutate: checkInApplicant } = usePutApplicantCheckIn(scannedStudentId);

    const handleScan = (result: { text: string } | null) => {
        if (result && result.text) {
            setScannedData(result.text);
            setScanning(false);
            console.log("QR Code scanned:", result.text);
            alert("QR Code가 정상적으로 스캔되었습니다.");

            try {
                const parsedData = JSON.parse(result.text);

                const studentId = parsedData.studentId;
                setScannedStudentId(studentId);
            } catch (error) {
                console.error("QR 코드 파싱 에러:", error);
            }

            checkInApplicant();
        }
    };

    return (
        <div className="p-4 space-y-4">
            <h2 className="text-xl font-semibold">QR Code Scanner</h2>
            {scanning ? (
                <div className="w-full max-w-md mx-auto">
                    <QrReader
                        onResult={(result: { text: string }, error: any) => {
                            if (result) {
                                handleScan(result as { text: string });
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
            {scannedData && (
                <div className="mt-4">
                    <h3 className="text-lg font-medium">Scanned Data:</h3>
                    <p className="p-2 mt-2 bg-gray-100 rounded">{scannedData}</p>
                </div>
            )}
        </div>
    );
};
