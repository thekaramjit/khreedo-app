import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getId} from '../../../../Redux/actions'
import { cartItems } from '../../../../Redux/actions'
import { Link } from 'react-router-dom'
import '../Mens/MensContainer.css'

function ElectronicsContainer(props) {
    const { id, title, price, image }=props.category
    
    const cartItemsValue=useSelector((state)=>{return state.cartItemReducer})

    const dispatch=useDispatch()

    const handlePlaceOrder=()=>{
        dispatch(getId(id))
    }
    return (
        <>
            <div className="col-md-4" id={id}>
                <div className="card p-3 my-3">
                    <img style={{"height": "281px"}} src={image} className="card-img-top w-50 m-auto" alt="Mens's collection" />
                    <div className="card-img-overlay">
                        <div className='cardContent'>
                            <h5 className="card-title my-2 fw-500 cardText">{title.slice(0, 30)}</h5>
                            <p className="card-text cardText">Price {price}$</p>


                            <button className="btn btn-dark mx-5 my-2 cartButton" disabled={cartItemsValue.includes(id)} onClick={()=>{dispatch(cartItems(id))}}>Add to Cart</button>


                            <Link to="/order" onClick={()=>{handlePlaceOrder(id)}} className="btn btn-primary orderButton">Place Order</Link><br/><br/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ElectronicsContainer