import { createContext, useCallback, useState } from "react";

import { ApplyModal } from "@/components/Modal/ApplyModal";

export type ModalContent = {
    title: React.ReactNode;
    description: React.ReactNode;
};

export interface IModalContext {
    isOpen: boolean;
    openModal: (content: ModalContent) => void;
    closeModal: () => void;
}

export const ApplyModalContext = createContext<IModalContext | null>(null);

export const ApplyModalContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [modalContent, setModalContent] = useState<ModalContent | null>(null);

    const openModal = useCallback((modalContent: ModalContent) => {
        setModalContent(modalContent);
        setIsOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setIsOpen(false);
    }, []);

    return (
        <>
            <ApplyModalContext.Provider
                value={{
                    isOpen,
                    openModal,
                    closeModal,
                }}
            >
                {children}
                {isOpen && <ApplyModal title={modalContent?.title} description={modalContent?.description} />}
            </ApplyModalContext.Provider>
        </>
    );
};
