export const getCartLocal = () => {
  const localCart = typeof window !== 'undefined' ? window.localStorage.getItem('cart') : false;
  return JSON.parse(localCart);
};
export const getCategoriesLocal = () => {
  const localCategories = typeof window !== 'undefined' ? window.localStorage.getItem('categories') : false;
  return JSON.parse(localCategories);
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

export const getRecentlyViewed = () => {
  const localCart = typeof window !== 'undefined' ? window.localStorage.getItem('viewed') : false;
  return JSON.parse(localCart);
};

export const setRecentlyViewed = (card) => {
  const localCarts = getRecentlyViewed();
  if (!localCarts) {
    const viewed = [];
    viewed.push(card);
    localStorage.setItem('viewed', JSON.stringify(viewed));
    return;
  }

  const index = localCarts.findIndex((item) => item.id === card.id);
  if (index > 0) {
    localCarts.splice(index, 1);
  }

  if (index === 0) {
    return;
  }

  if (localCarts.length >= 15) {
    localCarts.splice(1, 15);

    localCarts.unshift(card);
    localStorage.setItem('viewed', JSON.stringify(localCarts));
    return;
  }
  localCarts.unshift(card);
  localStorage.setItem('viewed', JSON.stringify(localCarts));
};
