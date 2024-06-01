import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Highlights } from "./pages/Highlights.jsx";
import { Techniques } from "./pages/Techniques.jsx";
import { Tools } from "./pages/Tools.jsx";
import { Unknown } from "./pages/Unknown.jsx";
import "./App.css";
const App = () => {

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/highlights" element={<Highlights/>}></Route>
          <Route path="/techniques" element={<Techniques/>}></Route>
          <Route path="/tools" element={<Tools />}></Route>
          
          <Route path="*" element={<Unknown />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;