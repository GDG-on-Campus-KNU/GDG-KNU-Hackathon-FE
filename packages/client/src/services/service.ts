export const applyService = {
    apply: async (body: ApplyRequestBody) => {
        applyService.isValid(body, ["name", "studentId", "major", "phoneNumber", "position", "teamName", "email"]);

        const response = await fetch(import.meta.env.VITE_API_BASE_URL + "/api/registrants", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
            switch (response.status) {
                case 400:
                    throw new Error("입력하지 않은 필드가 존재합니다");
                case 409:
                    throw new Error("이미 신청한 학번입니다");
                case 503:
                    throw new Error("아직 신청기간이 아닙니다");
                default:
                    throw new Error("관리자에게 문의해주세요");
            }
        }
        return response.json();
    },
    isValid: (body: Record<string, unknown>, requiredFields: string[]) => {
        for (const [key, value] of Object.entries(body)) {
            if (requiredFields.includes(key) && !value) {
                throw new Error("입력하지 않은 필드가 존재합니다");
            }
        }
    },
};
