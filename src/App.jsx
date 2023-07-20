import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import Template from "./components/Template";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/template" element={<Template />} />
      </Routes>
    </>
  );
}

export default App;
