import React from "react";
import { Link } from "react-router-dom";
import "./bossCategory.css";

function Category() {
  return (
    <div className="row w-100 p-3 m-auto">
      <div className="col-xl-4 categorySection  menSection">
        <div className="categorySectionSub ">
          <button className="categoryBtns">
            <Link to="/mens">Men's Clothing</Link>
          </button>
        </div>
      </div>
      <div className="col-xl-4 categorySection womenSection">
        <div className="categorySectionSub ">
          <button className="categoryBtns">
            <Link to="/womens">Women's Clothing</Link>
          </button>
        </div>
      </div>
      <div className="col-xl-4 categorySection jewelerySection">
        <div className="categorySectionSub ">
          <button className="categoryBtns">
            <Link to="/jewelary">Jewelery</Link>
          </button>
        </div>
      </div>
      {/* <div className="col-xl-6 categorySection electronicsSection">
        <div className="categorySectionSub ">
          <button className="categoryBtns">
            <Link to="/electronics">electronics</Link>
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default Category;
