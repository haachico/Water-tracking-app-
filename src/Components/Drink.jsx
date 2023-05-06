import { useState } from "react";
import { useContext } from "react";
import { waterContext } from "..";
import WaterSize from "./WaterSize";

const Drink = () => {
  const {
    qtyOfWater,
    waterSize,
    handleDrankClick,
    showFloatingMsg
  } = useContext(waterContext);

  const FloatingMessage = () => {
    return (
      <div>
        <p
          style={{
            backgroundColor: "white",
            padding: "10px",
            borderRadius: "5px",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.3)"
          }}
        >
          {`${waterSize} ml ++ Well done!`}
        </p>
      </div>
    );
  };

  return (
    <div className="drink--component">
      <p>{showFloatingMsg && <FloatingMessage />}</p>
      <h2>{`${qtyOfWater} ml/ 2400 ml`}</h2>
      <div className="circle">
        <input
          type="range"
          min="0"
          max="2400"
          value={qtyOfWater}
          onChange={(e) => e.target.value}
          className="range"
        />
      </div>
      <div>
        <button
          onClick={() => {
            handleDrankClick();
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Drink;
