import { Navbar, Hero, Tech } from "./components/index.js";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/tech" element={<Tech />} />
      </Routes>
    </div>
  );
}

export default App;
