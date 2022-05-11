import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getId } from '../../../Redux/actions';
import './CartComponent.css'

function CartComponent(props){
  const dispatch=useDispatch()
  

    const handlePlaceOrder=()=>{
        dispatch(getId(id))
    }
    const { id, title, price, category, description, image }=props.item;
  return (
    < >
      
        <div className="col-md-4" id={id}>
                <div className="card card1 p-3 my-3" key={id}>
                    <img style={{"height": "281px"}} src={image} className="card-img-top w-50 m-auto" alt="Mens's collection" />
                    <div className="card-img-overlay">
                        <div className='cardContent'>
                          <h5 className="card-title cartText1">{title.slice(0, 50)}</h5>
                          <p className="card-text cartText1">{description.slice(0, 110)}...</p>
                          <p className="card-text cartText1">Price : {price}$</p>
                          <p>{category}</p>
                          <Link to="/order" onClick={()=>{handlePlaceOrder(id)}} className="btn btn-primary orderButton1">Place Order</Link><br/><br/>
                        </div>
                    </div>
                </div>
      </div>
    </>
  )
}

export default CartComponent