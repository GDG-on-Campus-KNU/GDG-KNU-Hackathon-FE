import { useContext } from "react";

import { ApplyPositionContext } from "./ApplyPositionContext";

export const useApplyPosition = () => {
    const selectContext = useContext(ApplyPositionContext);
    if (!selectContext)
        throw new Error("useApplyPosition 훅은 ApplyPositionContextProvider 내부에서 사용되어야 합니다");
    return selectContext;
};
