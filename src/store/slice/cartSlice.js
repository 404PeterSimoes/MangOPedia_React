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
