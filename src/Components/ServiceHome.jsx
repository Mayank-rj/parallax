import React from 'react'
// import hot from './assets/images/ai-generated-8988757_1920.jpg'
// import raw from './assets/raw.jpg'
import { useParallax } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import './ServiceHome.css'
export default function ServiceHome() {
 
  return (
   
    <div className='container'>
   
        <Parallax 
        className='d-flex mt-5'
        translateY={[100,40]} 
        >
       
       <div style={{width : '300px',
          height : '300px',
          backgroundColor : 'yellow',
         
        }} className='yes'>
        </div>
        
        <h2>SERVICE</h2>
        
        </Parallax>
       
        <Parallax translateY={[500,-400]}  
        className='d-flex mt-5'
        >
       
        <div style={{width : '300px',
          height : '300px',
          backgroundColor : 'red',
         
        }} className='yes'>
       
        </div>
        
        <h2>SERVICE</h2>
        </Parallax>
        
        <Parallax translateY={[500,-1000]}  
        className='d-flex'
        >
       
        <div style={{width : '300px',
          height : '300px',
          backgroundColor : 'pink',
         
        }} className='yes'>
        
        </div>
        
        <h2>SERVICE</h2>
        </Parallax>
        
        <Parallax speed={20} 
        className='d-flex'
        >
       
        <div style={{width : '300px',
          height : '300px',
          backgroundColor : 'black',
         
        }} className='yes'>
        
        </div>
        <h2>SERVICE</h2>
        </Parallax>
       
  
    </div>
   
  )
}

