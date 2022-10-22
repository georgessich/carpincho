import capy from "./images/capy.png";
import capy2 from "./images/capy2.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div>
        <img className="capy" src={capy} alt="capy" />
        <div>
          <span>c</span>
          <span>a</span>
          <span>r</span>
          <span>p</span>
          <span>i</span>
          <span>n</span>
          <span>c</span>
          <span>h</span>
          <span>o</span>
        </div>
      </div>
      <div>
        <img className="capy-2" src={capy2} alt="capy" />
        <div>
          <span>ч</span>
          <span>е</span>
          <span>п</span>
          <span>у</span>
          <span>б</span>
          <span>а</span>
          <span>р</span>
          <span>а</span>
          <span></span>
        </div>
        
      </div>
    </div>
  );
}

export default App;
