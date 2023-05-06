import { useContext } from "react";

import { waterContext } from "..";
const WaterSize = () => {
  const { waterSize, setWaterSize } = useContext(waterContext);

  const selectSize = (e) => {
    setWaterSize(e.target.value);
  };
  console.log(waterSize, "watersize");
  return (
    <div>
      <h4 style={{ marginBottom: "5px" }}>Switch cup.</h4>
      <select
        colorvalue={waterSize}
        onChange={(event) => selectSize(event)}
        className="water--sizes"
      >
        <option value={100}>100 ml</option>
        <option value={125}>125 ml</option>
        <option value={150}>150 ml</option>
        <option value={175}>175 ml</option>
      </select>
    </div>
  );
};

export default WaterSize;
