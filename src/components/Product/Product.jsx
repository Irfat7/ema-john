import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  const { img, name, price, seller, ratings } = props.product;
  const handleAddToCart = props.handleAddToCart;

  return (
    <div className="product">
      <img src={img} alt="" />

      <div className="product-info-container">
        <h3>{name}</h3>
        <h4>Price ${price}</h4>

        <p className="manufacturer">Manufacturer : Addidas</p>
        <p>Rating : {ratings} star</p>
      </div>

      <button onClick={() => handleAddToCart(props.product)}>
        Add to Cart <FontAwesomeIcon icon={faCartShopping} />
      </button>
    </div>
  );
};

export default Product;
