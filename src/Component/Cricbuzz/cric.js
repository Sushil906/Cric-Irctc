

import React from 'react'

function Cric({image,heading,para,link,text}) {
  return (

        <div  style={{border:"2px solid red",marginBottom:"20px",width:"800px",padding:"10px"}}>

                 <img src={image}/>

                 <h1>{heading}</h1> 

                 <p>{para}</p>

                 <a href={link}>{text}</a>

        </div>
  )
}

export default Cric