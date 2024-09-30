export const applyService = {
    apply: async (body: ApplyRequestBody) => {
        applyService.isValid(body, ["name", "studentId", "major", "phoneNumber", "position", "teamName", "email"]);

        const response = await fetch(import.meta.env.VITE_API_BASE_URL + "/apply", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) throw new Error(response.statusText);
        return response.json();
    },
    isValid: (body: Record<string, unknown>, requiredFields: string[]) => {
        for (const [key, value] of Object.entries(body)) {
            if (requiredFields.includes(key) && !value) {
                throw new Error(`${key} 필드를 입력해주세요`);
                return false;
            }
        }
    },
};
