import { Route, Routes } from "react-router-dom";
import AllGames from "./pages/AllGames";
import AllNews from "./pages/AllNews";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Post from "./pages/Post";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/allgames" element={<AllGames />} />
      <Route path="/allnews" element={<AllNews />} />
      <Route path="/post" element={<Post />} />
    </Routes>
  );
}

export default App;
