import "./assets/css/App.css";
import img from "./assets/images/image-qr-code.png";
function App() {
  return (
    <div className="App">
      <div className="bgImg" style={{ backgroundImage: `url(${img})` }}></div>
      <div className="info">
        <h1 className="info--h1">Improve your front-end sKills by building projects</h1>
        <p className="info--p">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default App;
