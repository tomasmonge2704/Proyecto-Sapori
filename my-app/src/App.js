import Nav from "./components/nav";
import "./styles.css";
import Home from "./components/home";
import ProdListContainer from "./components/productos/prodListContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Location from "./components/location";
import Contact from "./components/contacto/contact";
import Testimonios from "./components/testimonios";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<>
      <Nav></Nav>
      <Home></Home>
      <ProdListContainer/>
      <div style={{marginTop:"5%",paddingBottom:"5%"}}>
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
      <Nav props="negro">

      </Nav>
      <div id="ProdDiv">
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
      <div style={{ height:"100vh", width:"100%", paddingTop:"10vh"}}>
      <Location/>
      </div>
      </>}>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
