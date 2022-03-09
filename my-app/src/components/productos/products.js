import * as React from "react";


export default function Productos({prodData}) {

  return (
    <div className="col-md-4 text-center">
                    <div className="menu-wrap">
                      <a
                        className="menu-img img mb-4"
                        style={{ backgroundImage: `url(${prodData.img})` }}
                      />
                      <div className="text">
                        <h3>
                          <a>{prodData.nombreProd}</a>
                        </h3>
                      </div>
                    </div>
                  </div>
  );
}
