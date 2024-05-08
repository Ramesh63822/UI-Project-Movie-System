import React from 'react'



const Demo = (props) => {
  return (
    <div style={{width:'300px' , height:'500px', marginTop:'15px', marginLeft:'15px', marginBottom:'15px', backgroundColor:'#5ae6ab'}}>
      <img src={props.image} alt='' style={{width:'300px', height:'400px'}} />
      <div style={{padding:'5px'}}>
        <div className="font-bold text-xl mb-2">hello</div>
        <p className="text-gray-700 text-base">nothing</p>
      </div>
    </div>
  )
}

export default Demo