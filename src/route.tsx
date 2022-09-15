import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function route() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <App />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
