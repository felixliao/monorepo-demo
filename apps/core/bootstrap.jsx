import { createRoot } from "react-dom/client";
import App from "./src/layout";
import Main from "./src/main";

const root = createRoot(document.getElementById("root"));

root.render(<Main />);
