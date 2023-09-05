import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {

    //price calculation
    let totalPrice = 0, shipping = 0, totalItems = 0;
    for (const item of cart) {
        totalPrice += item.price * item.quantity
        shipping += item.shipping
        totalItems += item.quantity
    }
    const tax = totalPrice * 0.07
    const grandTotal = totalPrice + shipping + tax

    return (
        <div className="cart">
            <h4>Order Summary</h4>
            <p>Selected Items {totalItems}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
            <p>Total Shipping ${shipping.toFixed(2)}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};

export default Cart;
