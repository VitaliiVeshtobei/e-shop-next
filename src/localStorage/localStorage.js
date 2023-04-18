export const getCartLocal = () => {
  const localCart = typeof window !== 'undefined' ? window.localStorage.getItem('cart') : false;
  return JSON.parse(localCart);
};
export const setCartLocal = (product) => {
  const localCart = getCartLocal();
  if (!localCart) {
    const cart = [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    return;
  }
  localCart.push(product);
  localStorage.setItem('cart', JSON.stringify(localCart));
};

export const removeProductFromCartLocal = (index) => {
  const localCart = getCartLocal();
  localCart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(localCart));
};

export const resetCartLocal = () => {
  localStorage.removeItem('cart');
};

export const quantityLocal = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};
