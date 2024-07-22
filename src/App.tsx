import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CoconutLayout from "./component/CoconutLayout";
import Journey from "./pages/Journey";
import Contact from "./pages/Contact";
import Ideas from "./pages/Ideas";
import Learnings from "./pages/Learnings";
import Repository from "./pages/Repository";
import Skill from "./pages/Skill";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<CoconutLayout/>}>
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/journey" element={<Journey />} />
              <Route path="/ideas" element={<Ideas />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/learnings" element={<Learnings />} />
              <Route path="/repository" element={<Repository />} />
              <Route path="/skill" element={<Skill />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;