import { Navbar, Hero, Tech, How } from "./components/index.js";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/how-it-works" element={<How />} />
      </Routes>
    </div>
  );
}

export default App;
