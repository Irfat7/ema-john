import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
  const loadedProducts = await fetch("products.json");
  const products = await loadedProducts.json();

  const storedCart = getShoppingCart();
  const savedCart = [];
  for (const id in storedCart) {
    const addedProduct = products.find((pd) => pd.id === id);
    if (addedProduct) {
      addedProduct["quantity"] = storedCart[id];
      savedCart.push(addedProduct);
    }
  }

  return savedCart;
};

/* const clearEntireCart = () => {
  const response = confirm('are you sure?')
  if (response) {
      setCart([])
      deleteShoppingCart()
  }
} */

export default cartProductsLoader/* , clearEntireCart */;
