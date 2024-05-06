

import React from 'react'

function Cards({pic, title,para}) {
  return (
    <div style={{width:"350px", border:"2px solid red",borderRadius:"10px"}}>

     <img src={pic}/>

     <h2>{title}</h2>
     <p>{para}</p>

    </div>
  )
}

export default Cards