import "./App.css";
import { Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import CardDetails from "./pages/CardDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/cardDetails/:id" element={<CardDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
