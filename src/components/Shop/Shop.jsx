import React, { useEffect, useState } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch data while component mounted
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Fetch saved cart from local storage when products setted
  useEffect(() => {
    // get the stored cart either {} or {.....}
    const storedCart = getShoppingCart()
    const savedCart = []
    // update saved cart till localstorage has value
    for (const id in storedCart) {
      const addedProduct = products.find(pd => pd.id === id)
      if (addedProduct) {
        addedProduct['quantity'] = storedCart[id]
        savedCart.push(addedProduct)
      }
    }
    setCart(savedCart)
  }, [products])

  const handleAddToCart = (product) => {
    addToDb(product.id)

    let newCart=[]
    // check whether the new item already exist
    const recentAdded = cart.find(cartItem => cartItem.id===product.id)
    if(recentAdded){
      recentAdded['quantity']+=1
      const restCart=cart.filter(cartItem=> cartItem.id!==recentAdded.id)
      newCart=[...restCart, recentAdded]
    }
    else{
      product['quantity']=1
      newCart=[...cart, product]
    }

    setCart(newCart);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
