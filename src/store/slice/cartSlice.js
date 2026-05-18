import { createSlice } from '@reduxjs/toolkit';

const STORAGE_KEY_CART = 'cart-mango';
const getStoredCard = () => {
  try {
    const cart = localStorage.getItem(STORAGE_KEY_CART);
    const parsed = cart ? JSON.parse(cart) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    localStorage.removeItem(STORAGE_KEY_CART);
    return [];
  }
};

const saveCart = (items) => {
  try {
    const cart = localStorage.setItem(STORAGE_KEY_CART, JSON.stringify(items));
  } catch (error) {
    console.warn('Failed to save cart: ', error);
  }
};

const calculateTotals = (items = []) => {
  let totalItems = 0;
  let totalAmount = 0;

  for (const item of items) {
    totalItems += item.quantity;
    totalAmount += item.price * item.quantity;
  }

  return { totalItems, totalAmount };
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: getStoredCard() || [],
    ...calculateTotals(getStoredCard()),
  },
  reducers: {
    addToCart: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isAuthenticated = !!(user && token);

      if (token) localStorage.setItem(STORAGE_KEYS.TOKEN, token);
      if (user) localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
