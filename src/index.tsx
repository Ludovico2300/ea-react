import ReactDOM from "react-dom/client";
import Route from "./route";
import "./style/main.css";
import "./lib/i18next/i18n";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<Route />);
