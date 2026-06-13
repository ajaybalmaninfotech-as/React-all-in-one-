import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/service";
import Contact from "./pages/contact";
import "./index.css"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
      {/* <Route path="*" element={<Home />} /> */}
    </Routes>
  );
}
export default App;
