import "./styles.css";
import Drink from "./Components/Drink";
import Updates from "./Components/Updates";
import Message from "./Components/Message";
import Header from "./Components/Header";
import WaterSize from "./Components/WaterSize";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Message />
      <WaterSize />
      <Drink />
      <Updates />
    </div>
  );
}
