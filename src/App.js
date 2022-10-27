import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import capy from "./images/capy.jpg";
import beaver from "./images/beav.jpg";
import cat from "./images/cat.png";
import otter from "./images/otter.jpg";
import capycoin from "./images/capycoin.png";
import beaver2 from "./images/beav2.jpg";
import { Reorder } from "framer-motion";
import "./App.css";
import Grid from "./components/Grid/Grid";
import Index from "./components/Index/Index";
import Team from "./components/Team/Team";
import Partners from "./components/Partners/Partners";
function App() {
  return (
    <div className="App">
      <Parallax pages={6}>
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
          factor={0.5}
          offset={1}
          style={{
          
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
        <ParallaxLayer
          speed={0.5}
          factor={0.5}
          offset={2}
          style={{
          
            backgroundColor: "rgb(100 90 141)",
          }}
        >
          <Grid />
        </ParallaxLayer>
        <ParallaxLayer
          speed={0.5}
          factor={0.5}
          offset={3}
          style={{
          
            backgroundColor: "rgb(100 90 141)",
          }}
        >
          <Index />
        </ParallaxLayer>
        <ParallaxLayer
          speed={0.5}
          factor={0.5}
          offset={4}
          style={{
          
            backgroundColor: "rgb(100 90 141)",
          }}
        >
          <Team />
        </ParallaxLayer>
        <ParallaxLayer
          speed={0.5}
          factor={0.5}
          offset={5}
          style={{
          
            backgroundColor: "rgb(100 90 141)",
          }}
        >
          <Partners />
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default App;
