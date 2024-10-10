import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import "./index.css";
import "@/shared/styles/reset.css";

createRoot(document.getElementById("root")!).render(<App />);
