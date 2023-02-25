import React from "react";
import "../css/worldmap.css";
import Data from "./Data";

export default function Worldmap() {
  return (
    <div className="container">
      <div className="left">
        <h3 className="con-title">WSTF FRONT-END HACKATHON</h3>
        <p>
          All users <span>DETAIL &gt; </span>
        </p>
        <h5 className="total-num">2,431,340</h5>
        <div className="icon-area">
          <p className="p-tag">
            <img
              src="https://cdn-icons-png.flaticon.com/512/9304/9304877.png"
              alt="Earning"
            />
            <span>
              Total earning <br /> 540,549
            </span>
          </p>
          <p className="p-tag">
            <img
              src="https://cdn-icons-png.flaticon.com/128/6129/6129768.png"
              alt="Sales"
            />
            <span>
              Sales <br />
              1,205,677
            </span>{" "}
          </p>
          <p className="p-tag">
            <img
              src="https://cdn-icons-png.flaticon.com/512/9610/9610861.png"
              alt="Purchase"
            />
            <span>
              Purchase <br /> 48,430,039
            </span>
          </p>
        </div>

        <div className="percentage-bar">
          <div className="circle-1">
            <div className="circle-container">
              <div className="circle">
                <div className="item layer-1">
                  <div className="fill"></div>
                </div>
                <div className="item layer-2">
                  <div className="fill"></div>
                </div>
                <div className="inside-content">27%</div>
              </div>
            </div>
          </div>
          <p>
            92,980 <span>Active users</span>
          </p>

          <div className="circle-2">
            <div className="circle-container1">
              <div className="circle1">
                <div className="item1 layer-3">
                  <div className="fill1"></div>
                </div>
                <div className="item1 layer-2">
                  <div className="fill1"></div>
                </div>
                <div className="inside-content">67%</div>
              </div>
            </div>
          </div>
          <p>
            22,652 <span>New users</span>
          </p>
        </div>
      </div>

      <div className="right">
        <Data/>
      </div>
    </div>
  );
}
