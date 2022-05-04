import React, { useEffect, useState } from 'react'
import ElectronicsContainer from './ElectronicsContainer'

function ElectronicsFetching() {
    const [electorincsData,setElectorincsData]=useState([])
    const [spinner,setSpinner]=useState(false)
    useEffect( ()=>{
      setSpinner(true)
         fetch(`https://fakestoreapi.com/products/category/electronics`).then((response)=>{response.json().then((data)=>{ 
            setElectorincsData(data)
            setSpinner(false)
          })})
    },[])
  return (
    <div className='container'>
      <div className="row">
      <h1 className='fw-bold' >Electronics </h1>
      {spinner && <p className='text-center text-light'>Loading...</p>}
          {electorincsData.map((product)=>{
            return <ElectronicsContainer key={product.id} category={product}/>
          })}
      </div>
    </div>
  )
}

export default ElectronicsFetching