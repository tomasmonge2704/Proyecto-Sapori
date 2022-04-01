import Nav from "./components/nav/nav";
import "./styles.css";
import Home from "./components/home";
import ProdListContainer from "./components/productos/prodListContainer";
import {HashRouter, Routes, Route} from "react-router-dom";
import Location from "./components/location";
import Contact from "./components/contacto/contact";
import Testimonios from "./components/testimonios";
import SobreNosotros from "./components/nosotros/nosotros";
function App() {
  return (
    <HashRouter>
    <Routes>
      <Route exact path="/" element={<>
      <Nav></Nav>
      <Home></Home>
      <ProdListContainer/>
      <div style={{marginTop:"10%",paddingBottom:"10%"}}>
      <Contact/>
      </div>
      </>}>
      </Route>
      <Route exact path="/Proyecto-sapori/" element={<>
      <Nav></Nav>
      <Home></Home>
      <ProdListContainer/>
      <div style={{marginTop:"10%",paddingBottom:"10%"}}>
      <Contact/>
      </div>
      </>}>
      </Route>
      <Route exact path="/contacto" element={<>
      <Nav props="negro"></Nav>
      <div id="ProdDiv">
      <Contact/>
      </div>
      </>}>
      </Route>
      <Route exact path="/nosotros" element={<>
      <Nav props="negro"/>
      <div style={{paddingTop:"9vh"}}>
      <SobreNosotros/>
      <Testimonios/>
    </div>
      </>}>
      </Route>
      <Route exact path="/productos" element={<>
      <Nav props="negro"></Nav>
      <div id="ProdDiv">
      <ProdListContainer/>
      </div>
      </>}>
      </Route>
      <Route exact path="/location" element={<>
      <Nav props="negro"></Nav>
      <div id ="mapa">
      <Location/>
      </div>
      </>}>
      </Route>
    </Routes>
    </HashRouter>
  );
}

export default App;
