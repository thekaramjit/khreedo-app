import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decQuantity, incQuantity, totalPrice } from "../../../Redux/actions";
import { Link } from "react-router-dom";

function PlaceOrderContainer() {
  const [order, setOrder] = useState([]);
  const quantityValue = useSelector((state) => state.quantityReducer);
  const [spinner, setSpinner] = useState(false);
  const dispatch = useDispatch();
  const id = useSelector((state) => state.getIdReducer);
  useEffect(() => {
    setSpinner(true);
    fetch(`https://fakestoreapi.com/products/${id}`).then((response) => {
      response.json().then((data) => {
        setOrder(data);
        setSpinner(false);
      });
    });
  }, []);

  const { title, image, description, category, price } = order;
  return (
    <div id="order" style={{height:"626px"}} className="w-100 m-auto  bg-light">
      {spinner && <p className="text-center text-light">Loading...</p>}
      {!spinner && (
        <div className="container d-flex" >
          <div className="row bg-light" style={{"padding-top":"70px"}}>
            <div className="col-xl-6">
              <img
                style={{ height: "400px" }}
                className="m-auto d-block"
                src={image}
                alt="order image here!"
              />
            </div>
            <div className="col-xl-6">
              <div className="m-auto">
                <div className=" p-5 ">
                  <h2 className="text-dark">Product name: {title}</h2>
                  <p className="text-dark">Description: {description}</p>
                  <p className="text-secondary">Category : {category}</p>
                  <p className="text-dark">Price : {price}$</p>
                  <div className="text-dark">
                    <button
                      className="btn btn-light border mx-3"
                      onClick={() => {
                        dispatch(incQuantity());
                      }}
                    >
                      &uarr;
                    </button>
                    {quantityValue}
                    <button
                      className="btn btn-light border mx-3"
                      disabled={quantityValue <= 0}
                      onClick={() => {
                        dispatch(decQuantity());
                      }}
                    >
                      &darr;
                    </button>
                  </div>

                  <Link
                    to="/totalBill"
                    className="btn btn-primary my-3"
                    onClick={() => {
                      dispatch(totalPrice(price, quantityValue));
                    }}
                  >
                    Confirm Order
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PlaceOrderContainer;
