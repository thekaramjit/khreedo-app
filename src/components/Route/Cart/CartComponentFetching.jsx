import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import CartComponent from './CartComponent'
import { totalPrice } from '../../../Redux/actions';

function Cart() {
  const cartItemsValue=useSelector((state)=>{ return state.cartItemReducer});
  const [subTotal,setSubTotal]=useState(0)
  const [cartItems, setCartItem] = useState([])
  const [spinner,setSpinner]=useState(false)
  const dispatch=useDispatch()

  useEffect(() => {
      setSpinner(true)
      cartItemsValue.map((item) => {
        fetch(`https://fakestoreapi.com/products/${item}`)
          .then((res) => res.json().then((items) => {
            setSpinner(false)
            setCartItem((preValue) => {
              return preValue.concat(items)
            });
            setSubTotal((preValue)=>{return preValue+items.price})
          }))
      })
  }, [])
  return (
    <>
    <div className='container'>
    {(spinner && cartItemsValue.length>0) && <p className='text-center text-light'>Loading...</p>}
      
      <div className='row'>
        {cartItems.length > 0 && cartItems.map((item) => {
          {/* setSubTotal((preValue)=>{return (preValue+item.price)}) */}
          return <CartComponent key={item.id} item={item}/>
        })}
      </div>
      {cartItemsValue.length === 0 && <p className='text-center'>Cart is Empty!</p> }
    </div>
    {cartItems.length>0 && <div className='container subTotal m-auto tw-bold' style={{fontSize:"17px",width:"15%"}}>
    <p className='text-center'>Sub Total is : {subTotal} </p>
    <Link className="btn btn-primary m-auto d-block" to="/totalBill" onClick={() => {
                      dispatch(totalPrice(subTotal, 1));
                    }} >Confirm Order</Link>
    </div>}
    
    </> 
  )
}

export default Cart