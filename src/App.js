import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Tv from "./pages/Tv";
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/series" element={<Series />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
