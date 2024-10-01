import { queryClient } from "./api/instance";
import { Routes } from "./routes";
import { globalStyle } from "./theme";
import { Global } from "@emotion/react";
import { QueryClientProvider } from "@tanstack/react-query";

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Global styles={globalStyle} />
            <Routes />
        </QueryClientProvider>
    );
}

export default App;
