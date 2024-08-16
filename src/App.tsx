import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CoconutLayout from "./components/CoconutLayout";
import Contact from "./pages/Contact";
import Ideas from "./pages/Ideas";
import Learnings from "./pages/Learnings";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<CoconutLayout/>}>
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/ideas" element={<Ideas />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/learnings" element={<Learnings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;