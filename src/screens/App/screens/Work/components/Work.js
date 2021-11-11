import React from "react";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


const Work = () => {
    return (
      <div className="page-container-scroll">
        <div className="work-container">
        <Parallax pages={5}>
        <ParallaxLayer offset={0} speed={0.5} style={{ alignnContent: 'alignCenter', justifyContent: 'center' }}>

          <h3 className="work-title">
            Work
          </h3>
          </ParallaxLayer>

          <ParallaxLayer sticky={{ start: 1, end: 3 }} style={{ alignnContent: 'alignCenter', justifyContent: 'flex-start' }}>
          <div>
            <p>React Projects</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={1.5} style={{ justifyContent: 'flex-end' }}>
          <div>
            <p>First Project</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={1.5} style={{ justifyContent: 'flex-end' }}>
          <div>
            <p>Second Project</p>
          </div>
        </ParallaxLayer>

        </Parallax>
        </div>
      </div>
    );
}

export default Work;
