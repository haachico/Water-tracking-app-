import { useContext } from "react";

import { waterContext } from "..";
import Update from "./Update";

const Updates = () => {
  const { updates } = useContext(waterContext);
  return updates.length === 0 ? (
    <h5 style={{ marginTop: "3rem" }}>Your today's record will come here 👇</h5>
  ) : (
    <div className="updates--list-component">
      <h4>Today's record: </h4>

      <div className="updates--list">
        {updates.map((update) => (
          <Update
            id={update.id}
            qty={update.qty}
            time={update.time}
            key={update.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Updates;
