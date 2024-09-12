import React from 'react'
import sunpic from './Images/Sunpic.jpg'
function ImagesDemo() {
  return (
   <>
    <div>
      <h1>Images Demo</h1>
      <img src={sunpic} height="200" width="200"/>&nbsp;
      <img src={require('./Images/Mountinpic.jpg')} height="200" width="200"/>&nbsp;
      
      {/* is methode mai bina import kiye picture use kre gy with public folder*/}
      <img src='images/Elfilpic.jpg' height="200" width="200"/>
    </div>
   </>
  )
}   

export default ImagesDemo
