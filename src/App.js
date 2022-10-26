import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import capy from "./images/capy.jpg";
import beaver from "./images/beav.jpg";
import cat from "./images/cat.png";
import otter from "./images/otter.jpg";
import capycoin from "./images/capycoin.png";
import beaver2 from "./images/beav2.jpg";
import { Reorder } from "framer-motion";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Parallax pages={2}>
        <ParallaxLayer
          speed={0.5}
          factor={1.5}
          offset={0}
          style={{
            backgroundImage: `url(${capy})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <p className="title">CARPINCHO COIN</p>
          <p className="subtitle">
            Гиперсовременная децентрализированная валюта основанная на
            уникальной технологии CapyChain™®
          </p>

          {/* <Reorder.Group axis="y" onReorder={setInitItems} values={initItems}>
            {initItems.map(({ title, text, i }) => (
              <Accordion key={i} title={title} text={text} />
             
            ))}
          </Reorder.Group> */}
        </ParallaxLayer>
        <ParallaxLayer
          speed={0.5}
          factor={1.5}
          offset={1}
          style={{
            // backgroundImage: `url(${beaver})`,
            // backgroundSize: "cover",
            // backgroundPosition: "center center",
            backgroundColor: "rgb(100 90 141)",
          }}
        >
         
          <div className="capy__container">
          <img src={capycoin} alt="capycoin" className="capy__container-coin" />
          <span className="capy__container-text">
          Carpincho - это валюта со стабильной ценой на базе CapyChain™®, выпуском и развитием которого управляют Melon Protocol и децентрализованая автономная организация Carpincho LLC.
          </span>
          </div>
          
        </ParallaxLayer>
       

      </Parallax>
    </div>
  );
}

export default App;
