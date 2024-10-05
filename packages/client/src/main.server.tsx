import { renderToString } from "react-dom/server";

import Page from "./pages/Page";

export async function preRender() {
    return renderToString(<Page />);
}
