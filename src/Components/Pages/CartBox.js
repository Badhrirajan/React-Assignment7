import React from 'react'

export default function CartBox({data = {},  increament = () => {}, decreament = () => {}, handleDelete = () => {}}) {
  return (<section>
      <div className='card mb-2' style={{width: "18rem"}}>
        <img className='card-img-top' src={data.thumbnail} alt="logo" style={{width:"100%", height: "200px"}} />
        <p><b>Title</b>:{data.title}</p>
        <p><b>Price</b>:{data.price}</p>
        <p><b>Total Cost</b>:{data.quantity * data.price}</p>
        <button className='btn btn-primary' onClick={() => decreament(data)}>-</button>
        <p className='text-center'>{data.quantity}</p>
        <button className='btn btn-primary' onClick={() => increament(data)}>+</button>
        <button className='btn btn-danger mt-2' onClick={() => handleDelete(data)}>Remove from Cart</button>
      </div> 
  </section>              
  )
}
