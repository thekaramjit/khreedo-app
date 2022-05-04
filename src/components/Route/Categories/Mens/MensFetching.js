import React, { useEffect, useState } from 'react'
import MensContainer from './MensContainer'
import './MensContainer.css'

function MensFetching() {
    const [mensData,setMensData]=useState([])
    const [spinner,setSpinner]=useState(false)
    useEffect( ()=>{
      setSpinner(true)
         fetch(`https://fakestoreapi.com/products/category/men's%20clothing`).then((response)=>{response.json().then((data)=>{ 
            setMensData(data)
            setSpinner(false)
          })})
    },[])
  return (
    <div className='container'>
      <div className="row">
      <h1 >Men's Clothing </h1>
      {spinner && <p className='text-center'>Loading...</p>}
          {mensData.map((product)=>{
            return <MensContainer key={product.id} category={product}/>
          })}
      </div>
    </div>
  )
}

export default MensFetching