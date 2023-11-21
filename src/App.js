// App.js
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LeftSide from "./LeftSide";
import Accueil from "./Accueil";
import Compétences from "./Compétences";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div  className="ContainerPrince">
      <div className="LeftSide" >
              <LeftSide />
              
              
            </div>
            <div className="RigthSide bg"   >
              <Routes>
                <Route path="/" element={<Accueil />} />
                <Route path="/compétences" element={<Compétences />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
      </div>
            
      </BrowserRouter>
    </div>
  );
}

export default App;
