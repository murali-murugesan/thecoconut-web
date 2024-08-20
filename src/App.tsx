import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CoconutLayout } from "@components";
import { Contact, Home, Ideas, Learnings, Swagger } from "@pages";

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
              <Route path="/swagger" element={<Swagger />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;