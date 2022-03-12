import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";


function App() {
  return (
    <div className="App">
      <h1 className="text-5xl ">Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}
export default App;
