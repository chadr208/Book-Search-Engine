import React from "react";
import BarComp from "../components/BarComp";
import PieComp from "../components/PieComp";
import DoughnutComp from "../components/DoughnutComp";

function Charts() {
  return (
    <>
      <div className="text-center results">
        <h1>Results:</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto text-center">
            <div className="row">
              <div className="col-md-6 mx-auto">
                <div className="card">
                  <div className="card-body">
                    <PieComp />
                  </div>
                </div>
              </div>
              <div className="col-md-6 mx-auto">
                <div className="card">
                  <div className="card-body">
                    <DoughnutComp />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mx-auto justify-content-center">
          <div className="col-md-6 my-5 text-center">
            <div className="card">
              <div className="card-body">
                <BarComp />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Charts;
