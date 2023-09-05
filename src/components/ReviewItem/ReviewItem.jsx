import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({ cartItem, deleteFromCart }) => {
    const { id, img, name, price, shipping } = cartItem

    return (
        <div className='review-item-container'>
            <div>
                <img src={img} alt="" />
                <div>
                    <h3>{name}</h3>
                    <p>Price: <span>${price}</span></p>
                    <p>Shipping Charge: <span>${shipping}</span></p>
                </div>
            </div>
            <button onClick={()=>deleteFromCart(id)} ><FontAwesomeIcon className='delete-fw' icon={faTrash} style={{color: "#eb5757",}} /></button>
        </div>
    );
};

export default ReviewItem;