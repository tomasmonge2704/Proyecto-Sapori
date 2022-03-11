import Nav from "./components/nav";
import "./App.css";
import "./styles.css";
import Home from "./components/home";
import ProdListContainer from "./components/productos/prodListContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Location from "./components/location";
import Contact from "./components/contact";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<>
      <Nav></Nav>
      <Home></Home>
      
      </>}>
      </Route>
      <Route exact path="/contacto" element={<>
      <Nav props="negro"></Nav>
      <Contact></Contact>
      </>}>
      </Route>
      <Route exact path="/nosotros" element={<>
      <Nav props="negro"></Nav>
    
      </>}>
      </Route>
      <Route exact path="/productos" element={<>
      <Nav props="negro"></Nav>
      <ProdListContainer></ProdListContainer>
      </>}>
      </Route>
      <Route exact path="/location" element={<>
      <Nav props="negro"></Nav>
      <Location></Location>
      </>}>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
