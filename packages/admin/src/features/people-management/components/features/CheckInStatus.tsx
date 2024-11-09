type Props = {
    checkined: boolean;
};

export const CheckInStatus = ({ checkined }: Props) => (
    <span
        className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
            checkined ? "bg-blue-100 text-blue-800" : "bg-gray-100 text-gray-800"
        }`}
    >
        {checkined ? "체크인됨" : "미체크인"}
    </span>
);
