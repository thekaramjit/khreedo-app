import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartComponent from './CartComponent'

function Cart() {
  const cartItemsValue=useSelector((state)=>{ return state.cartItemReducer});
  const [cartItems, setCartItem] = useState([])
  const [spinner,setSpinner]=useState(false)

  useEffect(() => {
      setSpinner(true)
      cartItemsValue.map((item) => {
        fetch(`https://fakestoreapi.com/products/${item}`)
          .then((res) => res.json().then((items) => {
            setSpinner(false)
            setCartItem((preValue) => {
              return preValue.concat(items)
            });
          }))
      })
  }, [])
  return (
    <>
    <div className='container'>
    {(spinner && cartItemsValue.length>0) && <p className='text-center text-light'>Loading...</p>}
      
      <div className='row'>
        {cartItems.length > 0 && cartItems.map((item) => {
          return <CartComponent key={item.id} item={item}/>
        })}
      </div>
      {cartItemsValue.length === 0 && <p className='text-center'>Cart is Empty!</p> }
    </div>
    </> 
  )
}

export default Cart