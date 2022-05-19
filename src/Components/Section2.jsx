import React from 'react'
import {archImages} from './Helper'
import Card from './Card'

function Section2() {
  return (
    <div>
         <div class="" id="projects" style={{padding:'32px 0 32px 0'}}>
    <h3 class=" " style={{padding:'16px 0 16px 0',borderBottom:"1px solid grey"}}> Projects</h3>
  </div>

  <div className='mainArea'>
    {
        archImages.map((arch,key)=>{
         return (
             <Card 
             key={key}
             image={arch.image} text={arch.text}/>
         )
        })
    } 
      
  </div>
    </div>
  )
}

export default Section2