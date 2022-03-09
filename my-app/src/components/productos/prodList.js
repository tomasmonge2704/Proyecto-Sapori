import Productos from "./products";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./productos.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
export default function ProductList({ productosDestacados }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div
      className="site-content"
      style={{ position: "absolute", left: "5%", top: "30%" }}
    >
      <div
        className="site-header-spacer-mobile"
        aria-hidden="true"
        style={{ height: "58px" }}
      />
      <section
        id="hero"
        className="hero hero--fullheight revealable revealed"
        style={{ backgroundColor: "#b01e22", height: "1109.95px" }}
      >
        <div>
          <Box sx={{ width: "100%" }}>
            <Box>
              <Tabs value={value} onChange={handleChange} centered>
                <Tab label="Productos Destacados" {...a11yProps(0)} />
                <Tab label="Bebidas" {...a11yProps(1)} />
                <Tab label="Productos importados" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <div className="row productos">
                {productosDestacados.map((prodData) => (
                  <Productos prodData={prodData}></Productos>
                ))}
              </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
          </Box>
        </div>
      </section>
    </div>
  );
}
