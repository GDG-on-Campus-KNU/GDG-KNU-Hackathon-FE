import { createContext, SetStateAction, useEffect, useState } from "react";

export const ApplyPositionContext = createContext<{
    position: ApplyPosition;
    setPosition: React.Dispatch<SetStateAction<ApplyPosition>>;
} | null>(null);

export interface ApplyPositionContextProviderProps {
    onChange?: (position: ApplyPosition) => void;
    children: React.ReactNode;
}

export const ApplyPositionContextProvider = ({ children, onChange }: ApplyPositionContextProviderProps) => {
    const [position, setPosition] = useState<ApplyPosition | null>(null);

    useEffect(() => {
        if (onChange) onChange(position);
    }, [position, onChange]);

    return <ApplyPositionContext.Provider value={{ position, setPosition }}>{children}</ApplyPositionContext.Provider>;
};
