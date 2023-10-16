import { Route, Routes } from "react-router-dom";
import AllGames from "./pages/AllGames";
import AllNews from "./pages/AllNews";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Create from "./pages/Create";
import NoPage from "./pages/NoPage";
import NotAllowed from "./pages/NotAllowed";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/allgames" element={<AllGames />} />
      <Route path="/allnews" element={<AllNews />} />
      <Route path="/create" element={<Create />} />
      <Route path="*" element={<NoPage />} />
      <Route path="/notallowed" element={<NotAllowed />} />
    </Routes>
  );
}

export default App;
