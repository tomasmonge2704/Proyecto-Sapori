import * as React from 'react';
import TabsUnstyled from '@mui/base/TabsUnstyled';
import TabsListUnstyled from '@mui/base/TabsListUnstyled';
import TabPanelUnstyled from '@mui/base/TabPanelUnstyled';
import TabUnstyled from '@mui/base/TabUnstyled';
import './products.css';
import Productos from "./products";
import './tabs.css'
export default function ProductList({ productosDestacados,bebidas,prodImportados }) {
  return (
    <div
      className="site-content"
      style={{ position: "absolute", top: "12%", paddingBottom:"25%" }}
    >
     <div
        className="site-header-spacer-mobile"
        aria-hidden="true"
        style={{ height: "0px" }}
      />
      <section
        className="hero--fullheight revealable revealed"
        style={{ backgroundColor: "#b01e22",height: "100%", position:"relative", zIndex:"0", textAlign:"center" }}
      >
      
      <TabsUnstyled className='constainerTabs' defaultValue={0}>
        <TabsListUnstyled className='tabs' style={{marginBottom:"5%"}}>
          <TabUnstyled className='TabButton'>Productos Destacados</TabUnstyled>
          <TabUnstyled className='TabButton'>Bebidas</TabUnstyled>
          <TabUnstyled className='TabButton'>Productos Importados</TabUnstyled>
        </TabsListUnstyled>
        <TabPanelUnstyled value={0}> <div className="list">
                {productosDestacados.map((prodData) => (
                  <Productos prodData={prodData}></Productos>
                ))}
              </div></TabPanelUnstyled>
        <TabPanelUnstyled value={1}> <div className="list">
                {bebidas.map((prodData) => (
                  <Productos prodData={prodData}></Productos>
                ))}
              </div></TabPanelUnstyled>
        <TabPanelUnstyled value={2}><div className="list">
                {prodImportados.map((prodData) => (
                  <Productos prodData={prodData}></Productos>
                ))}
              </div></TabPanelUnstyled>
      </TabsUnstyled>
  
      </section>
    </div>
  );
}
