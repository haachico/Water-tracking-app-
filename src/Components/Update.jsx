import { useContext } from "react";
import { waterContext } from "..";

const Update = ({ qty, time, id }) => {
  const { updates, setUpdates, setQtyOfWater } = useContext(waterContext);

  const handleDeleteUpdate = (id) => {
    setUpdates(updates.filter((update) => update.id !== id));
    setQtyOfWater((prevQty) => prevQty - parseFloat(qty));
  };
  return (
    <div className="update--component">
      <div className="update">
        <p>{time}</p>
        <p>{qty}</p>
      </div>
      <button onClick={() => handleDeleteUpdate(id)}>x</button>
    </div>
  );
};

export default Update;
