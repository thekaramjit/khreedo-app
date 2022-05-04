import React, { useEffect, useState } from 'react'
import ShopContainer from './ShopComponent'

function ShopFetching() {
    const [productsData,setProductsData]=useState([])
    const [spinner,setSpinner]=useState(false)
    useEffect( ()=>{
      setSpinner(true)
         fetch(`https://fakestoreapi.com/products`).then((response)=>{response.json().then((data)=>{ 
             console.log(data)
            setProductsData(data)
            setSpinner(false)
          })})
    },[])
  return (
    <div className='container'>
      <div className="row">
      <h1 >Our Products</h1>
      {spinner && <p className='text-center text-light'>Loading...</p>}
          {productsData.map((product)=>{
            return <ShopContainer key={product.id} category={product}/>
          })}
      </div>
    </div>
  )
}

export default ShopFetching