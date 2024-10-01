import { queryClient } from "./api/instance";
import { Routes } from "./routes";
import { QueryClientProvider } from "@tanstack/react-query";

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Routes />
        </QueryClientProvider>
    );
}

export default App;
