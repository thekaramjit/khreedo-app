import React, { useEffect, useState } from 'react'
import JewelaryContainer from './JewelaryContainer'

function JewelaryFetching() {
    const [jewelaryData,setJewelaryData]=useState([])
    const [spinner,setSpinner]=useState(false)
    useEffect( ()=>{
      setSpinner(true)
         fetch(`https://fakestoreapi.com/products/category/jewelery`).then((response)=>{response.json().then((data)=>{ 
            setJewelaryData(data)
            setSpinner(false)
          })})
    },[])
  return (
    <div className='container'>
      <div className="row">
      <h1 >Jewelary </h1>
      {spinner && <p className='text-center text-light'>Loading...</p>}
          {jewelaryData.map((product)=>{
            return <JewelaryContainer key={product.id} category={product}/>
          })}
      </div>
    </div>
  )
}

export default JewelaryFetching