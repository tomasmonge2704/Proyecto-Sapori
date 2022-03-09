import Nav from "./components/nav";
import "./App.css";
import "./styles.css";
import Home from "./components/home";
import Productos from "./components/products";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Location from "./components/location";
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
      <Nav></Nav>
    
      </>}>
      </Route>
      <Route exact path="/nosotros" element={<>
      <Nav></Nav>
    
      </>}>
      </Route>
      <Route exact path="/productos" element={<>
      <Nav></Nav>
      <Productos></Productos>
      </>}>
      </Route>
      <Route exact path="/location" element={<>
      <Nav></Nav>
      <Location></Location>
      </>}>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
