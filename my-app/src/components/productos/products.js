import * as React from "react";

export default function Productos({prodData}) {
  
  return (
    <div className="container">
        <div className="card">
          <div className="img-box">
            <img src={prodData.img} alt="" />
          </div>
          <div className="box-content">
            <h3>{prodData.nombreProd} </h3>
          </div>
        </div>
      </div>
  );
}
