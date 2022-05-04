import React, { useEffect, useState } from 'react'
import WomenContainer from './WomenContainer'


function WomenFething() {
    const [womenData,setWomenData]=useState([])
    const [spinner,setSpinner]=useState(false)
    useEffect( ()=>{
      setSpinner(true)
         fetch(`https://fakestoreapi.com/products/category/women's%20clothing`).then((response)=>{response.json().then((data)=>{ 
           setWomenData(data)
           setSpinner(false)
          })})
    },[])
  return (
    <div className='container'>
      <div className="row">
      <h1 >Women's Clothing </h1>
      {spinner && <p className='text-light text-center'>Loading...</p>}
          {womenData.map((product)=>{
            return <WomenContainer key={product.id} category={product}/>
          })}
      </div>
    </div>
  )
}

export default WomenFething