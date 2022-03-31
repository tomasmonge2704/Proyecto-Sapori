import * as React from "react";
import TabsUnstyled from "@mui/base/TabsUnstyled";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import TabUnstyled from "@mui/base/TabUnstyled";
import "./products.css";
import Productos from "./products";
import "./tabs.css";
export default function ProductList({
  productosDestacados,
  bebidas,
  prodImportados,
  Picadas
}) {
  return (
    <div style={{ zIndex: "0" }}>
      <TabsUnstyled className="constainerTabs" defaultValue={0}>
        <TabsListUnstyled
          className="tabs"
          style={{
            marginBottom: "5%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TabUnstyled className="TabButton">Productos Destacados</TabUnstyled>
          <TabUnstyled className="TabButton">Bebidas</TabUnstyled>
          <TabUnstyled className="TabButton">Productos Importados</TabUnstyled>
          <TabUnstyled className="TabButton">Picadas</TabUnstyled>
        </TabsListUnstyled>
        <TabPanelUnstyled value={0}>
          {" "}
          <div className="list">
            {productosDestacados.map((prodData) => (
              <Productos prodData={prodData}></Productos>
            ))}
          </div>
        </TabPanelUnstyled>
        <TabPanelUnstyled value={1}>
          {" "}
          <div className="list">
            {bebidas.map((prodData) => (
              <Productos prodData={prodData}></Productos>
            ))}
          </div>
        </TabPanelUnstyled>
        <TabPanelUnstyled value={2}>
          <div className="list">
            {prodImportados.map((prodData) => (
              <Productos prodData={prodData}></Productos>
            ))}
          </div>
        </TabPanelUnstyled>
        <TabPanelUnstyled value={3}>
          <div className="list">
            {Picadas.map((prodData) => (
              <Productos prodData={prodData}></Productos>
            ))}
          </div>
        </TabPanelUnstyled>
      </TabsUnstyled>
    </div>
  );
}
