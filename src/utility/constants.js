export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  CART: '/cart',
  CHECKOUT: '/checkout',
  ORDER_CONFIRMATION: '/order-confirmation',
  MENU_MANAGEMENT: '/menu-management',
  ORDER_MANAGEMENT: '/order-management',
  MENU_DETAIL: '/menu/:id',
};

export const API_BASE_URL = 'https://localhost:7196';

export const CATEGORY = ['Appetizer', 'Entrée', 'Dessert'];

export const ROLES = {
  ADMIN: 'Admin',
  CUSTOMER: 'Customer',
};

export const SPECIAL_TAG = [
  '',
  'Best Seller',
  'Top Rated',
  "Chef's Special",
  'New',
];

export const STORAGE_KEYS = {
  TOKEN: 'token-mango',
  USER: 'user-mango',
};

export const ORDER_STATUS = {
  CONFIRMED: 'Confirmed',
  READY_FOR_PICKUP: 'Ready for Pickup',
  COMPLETED: 'Completed',
  CANCELLED: 'Cancelled',
};
