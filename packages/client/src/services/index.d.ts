type ApplyPosition = "FRONTEND" | "BACKEND" | "ANDROID" | "DESIGN" | "PM" | null;

type ApplyRequestBody = {
    name?: string;
    studentId?: number;
    major?: string;
    phoneNumber?: string;
    position?: ApplyPosition;
    githubId?: string;
    teamName?: string;
    email?: string;
};

type ApplyResponseBody = {
    status: number;
    message: string;
};
