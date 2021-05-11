import React from 'react'
import "./shop.css"
function Product({  ...props }) {
    return (
        
              <div className="product">
      <div className="product__info">
        <p>{props.title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        
      </div>

      <img src={props.image} alt="" />

      <button>Add to Basket</button>
    </div>


    
    )
}

export default Product
