import { Route, Routes } from "react-router-dom";
import AllGames from "./pages/AllGames";
import AllNews from "./pages/AllNews";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/allgames" element={<AllGames />} />
      <Route path="/allnews" element={<AllNews />} />
    </Routes>
  );
}

export default App;
