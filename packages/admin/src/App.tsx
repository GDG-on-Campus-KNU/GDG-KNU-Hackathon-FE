import { Routes } from "@/app/routes";
import { queryClient } from "@/shared";
import { QueryClientProvider } from "@tanstack/react-query";

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Routes />
        </QueryClientProvider>
    );
}

export default App;
