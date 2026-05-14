import { Routes, Route } from 'react-router';
import Home from '../pages/Home';
import Login from '../pages/auth/Login';
import OrderManagement from '../pages/order/OrderManagement';
import MenuItemManagement from '../pages/menu/MenuItemManagement';
import Cart from '../pages/cart/Cart';
import Checkout from '../pages/cart/Checkout';
import Register from '../pages/auth/Register';
import OrderConfirmation from '../pages/order/OrderConfirmation';
import { ROUTES } from '../utility/constants';
import MenuItemDetails from '../pages/menu/menuItemDetails';

const AppRoutes = () => (
  <Routes>
    <Route path={ROUTES.HOME} element={<Home />} />
    <Route path={ROUTES.LOGIN} element={<Login />} />
    <Route path={ROUTES.REGISTER} element={<Register />} />
    <Route path={ROUTES.ORDER_MANAGEMENT} element={<OrderManagement />} />
    <Route path={ROUTES.MENU_MANAGEMENT} element={<MenuItemManagement />} />
    <Route path={ROUTES.CART} element={<Cart />} />
    <Route path={ROUTES.CHECKOUT} element={<Checkout />} />
    <Route path={ROUTES.ORDER_CONFIRMATION} element={<OrderConfirmation />} />
    <Route path={ROUTES.MENU_DETAIL} element={<MenuItemDetails />} />
  </Routes>
);

export default AppRoutes;
