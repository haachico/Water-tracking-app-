import { useContext } from "react";

import { waterContext } from "..";
import { message } from "../Message";

const Message = () => {
  const { ranNum, qtyOfWater } = useContext(waterContext);

  console.log(ranNum);
  const tip = message[ranNum];
  return (
    <div className="message">
      <p>
        {qtyOfWater === 0
          ? "Get here a fact with respect to the importance of drinking water with your every sip of water!"
          : tip}
      </p>
    </div>
  );
};

export default Message;
