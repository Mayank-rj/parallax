import React from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
export default function ServiceHome() {
  return (
  //   <Parallax pages={1} style={{ top: '0', left: '0' }}>
  //   <ParallaxLayer offset={0} speed={2.5}>
  //     <p>Parallax</p>
  //   </ParallaxLayer>
  // </Parallax>
  <Parallax pages={4}>

    {/* <ParallaxLayer
    offset={0}
    speed={1}
    factor={2}
     style={{
      backgroundImage : 
    }}>
      
    </ParallaxLayer> */}
    <ParallaxLayer speed={1}>
      <h2>top of thee web</h2>
    </ParallaxLayer>
    <ParallaxLayer offset={1} >
      <h2 >bottom of the page</h2>
    </ParallaxLayer>
     </Parallax>
  )
}

