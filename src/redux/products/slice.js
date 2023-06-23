import { createSlice } from '@reduxjs/toolkit';
import {
  getCartLocal,
  getCategoriesLocal,
  quantityLocal,
  removeProductFromCartLocal,
  resetCartLocal,
  setCartLocal,
} from '@/localStorage/localStorage';

const initialState = {
  categories: getCategoriesLocal() ?? [],
  productsByCategory: [],
  cart: getCartLocal() ?? [],
  productInfo: {},
  order: {
    name: '',
    surname: '',
    phone: '',
    payment: '',
    delivery: '',
    deliveryType: '',
    deliveryCity: '',
    deliveryOffice: '',
    price: '',
    products: {},
  },
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getCategories(state, action) {
      localStorage.setItem(
        'categories',
        JSON.stringify(
          action.payload.map((item) => {
            return {
              name_multilang: item.name_multilang,
              id: item.id,
            };
          })
        )
      );
      state.categories = action.payload;
    },
    getProductsByCategory(state, action) {
      state.productsByCategory = action.payload;
    },

    getProductInfo(state, action) {
      state.productInfo = action.payload;
    },
    addCart(state, action) {
      const index = state.cart.findIndex((item) => item.id === action.payload.id);
      if (index < 0) {
        state.cart.push(action.payload);
        setCartLocal(action.payload);
        return;
      }
      state.cart.splice(index, 1);
      removeProductFromCartLocal(index);
    },
    resetCart(state, action) {
      state.cart = [];
      resetCartLocal();
    },
    quantityCartPlus(state, action) {
      state.cart.map((product) => {
        if (product.id === action.payload.id) {
          product.quantity ? (product.quantity += 1) : (product.quantity = 2);
        }
      });
      quantityLocal(state.cart);
    },
    quantityCartMinus(state, action) {
      state.cart.map((product) => {
        if (product.id === action.payload.id) {
          product.quantity -= 1;
        }
      });
      quantityLocal(state.cart);
    },
    addOrderContacts(state, action) {
      state.order.name = action.payload.name;
      state.order.surname = action.payload.surname;
      state.order.phone = action.payload.phone;
    },
    addOrderPayment(state, action) {
      state.order.payment = action.payload.payment;
    },
    addOrderDelivery(state, action) {
      state.order.delivery = action.payload.delivery;
      state.order.deliveryType = action.payload.deliveryType;
      state.order.deliveryCity = action.payload.deliveryCity;
      state.order.deliveryOffice = action.payload.deliveryOffice;
    },
    addOrderPrice(state, action) {
      state.order.price = action.payload.price;
    },
    addOrderInfo(state, action) {
      state.order.products = action.payload.products;
    },
  },
});

export const productsReducer = productsSlice.reducer;

export const {
  getCategories,
  getProductsByCategory,
  addCart,
  resetCart,
  quantityCartPlus,
  quantityCartMinus,
  getProductInfo,
  addOrderContacts,
  addOrderPayment,
  addOrderDelivery,
  addOrderInfo,
  addOrderPrice,
} = productsSlice.actions;
