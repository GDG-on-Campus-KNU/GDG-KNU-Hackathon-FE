import { useState, useCallback } from "react";

import { Button } from "@/components/ui/button";

import { Scanner } from "@yudiel/react-qr-scanner";

const QrCodeScanner = () => {
    const [scanning, setScanning] = useState(false);
    const [scannedData, setScannedData] = useState<string | null>(null);

    const handleScan = useCallback((data: string | null) => {
        if (data) {
            setScannedData(data);
            setScanning(false);
            console.log("QR Code scanned:", data);
        }
    }, []);

    const handleError = useCallback((err: any) => {
        console.error(err);
    }, []);

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold">QR Code Scanner</h2>
            {scanning ? (
                <div className="w-full max-w-md mx-auto">
                    <Scanner
                        containerStyle={{ marginTop: 5 }}
                        stopDecoding={() => setScanning(false)} // Use this to stop the scan properly
                        onDecode={handleScan}
                        onError={handleError}
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

export default QrCodeScanner;
