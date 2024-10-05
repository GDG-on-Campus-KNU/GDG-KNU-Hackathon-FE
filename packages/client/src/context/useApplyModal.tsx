import { useContext } from "react";

import { ApplyModalContext } from "./ModalContext";

export const useApplyModal = () => {
    const applyModalContext = useContext(ApplyModalContext);
    if (!applyModalContext) throw new Error("useApplyModal 은 ApplyModalContextProvider 내부에서 사용되어야 합니다");
    return applyModalContext;
};
