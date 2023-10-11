import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";

export default function route() {
  return (
    <div>
      <BrowserRouter>
        <Analytics />
        <Navbar />
        <App />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
