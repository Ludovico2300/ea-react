import { Route, Routes } from "react-router-dom";
import AllGames from "./pages/AllGames";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/allgames" element={<AllGames />} />
    </Routes>
  );
}

export default App;
