import { Route, Routes } from "react-router-dom";
import AllGames from "./pages/AllGames";
import AllNews from "./pages/AllNews";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Create from "./pages/Create";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/allgames" element={<AllGames />} />
      <Route path="/allnews" element={<AllNews />} />
      <Route path="/create" element={<Create />} />
    </Routes>
  );
}

export default App;
