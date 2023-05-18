import "./App.css";
import ThreeSixty from "react-360-view";

function App() {
  return (
    <div className="maindiv">
      <div className="App">
        <ThreeSixty
          amount={70}
          imagePath=""
          fileName="/images/body-{index}.jpeg"
        />
      </div>
      <span className="hotspot one"></span>
      <span className="hotspot two"></span>
      <span className="hotspot three"></span>
      <span className="hotspot four"></span>
      <span className="hotspot five"></span>
    </div>
  );
}

export default App;
