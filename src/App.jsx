import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import "./assets/css/portal.css";
import "./assets/css/style.css";
import NavSidebar from "./components/NavSidebar";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <>
      <Router>
        <NavSidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
