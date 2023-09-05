import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { NavLink, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const [cart, setCart] = useState(useLoaderData())

    const deleteFromCart = (id) => {
        const updatedCart = cart.filter(cartItem => cartItem.id !== id)
        setCart(updatedCart)
        removeFromDb(id)
    }

    const clearEntireCart = () => {
        const response = confirm('are you sure?')
        if (response) {
            setCart([])
            deleteShoppingCart()
        }
    }

    return (
        <div className='shop-container'>
            <div className='all-review-container'>
                {
                    cart.map(cartItem => <ReviewItem
                        key={cartItem.id}
                        cartItem={cartItem}
                        deleteFromCart={deleteFromCart}
                    />)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    clearEntireCart={clearEntireCart}
                >
                    <NavLink to='/login'>
                        <button className='conditional-button'>
                            Proceed to Checkout
                        </button>
                    </NavLink>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;