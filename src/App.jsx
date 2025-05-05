import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Exchange_Rate from "./pages/Exchange_Rate";
import Error_Page from "./pages/Error_Page";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exchange" element={<Exchange_Rate />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error_Page />} />
      </Routes>
    </Router>
  );
};

export default App;
