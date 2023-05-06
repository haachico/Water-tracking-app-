import { createContext, useState } from "react";
import uuid from "react-uuid";

export const waterContext = createContext();

export const Provider = ({ children }) => {
  const [updates, setUpdates] = useState([]);
  const [qtyOfWater, setQtyOfWater] = useState(0);
  const [ranNum, setRanNum] = useState("");

  const [showFloatingMsg, setShowFloatingMsg] = useState(false);
  const [waterSize, setWaterSize] = useState(100);

  const handleDrankClick = () => {
    setQtyOfWater((prevQty) => prevQty + Number(waterSize));
    addUpdate();
    setShowFloatingMsg(true);
    setTimeout(() => {
      setShowFloatingMsg(false);
    }, 2000);
  };
  const addUpdate = () => {
    const date = new Date();
    const update = {
      id: uuid(),
      qty: `${waterSize} ml`,
      time: `${date.getHours()} : ${date.getMinutes()}`
    };
    setUpdates([...updates, update]);
    setRanNum(Math.floor(Math.random() * 9));
  };
  console.log(updates);

  return (
    <div>
      <waterContext.Provider
        value={{
          updates,
          setUpdates,
          addUpdate,
          qtyOfWater,
          setQtyOfWater,
          handleDrankClick,
          ranNum,
          showFloatingMsg,
          setShowFloatingMsg,
          waterSize,
          setWaterSize
        }}
      >
        {children}
      </waterContext.Provider>
    </div>
  );
};
