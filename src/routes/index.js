import HomePage from "../pages/HomePage/HomePage.jsx";
import OrderPage from "../pages/OrderPage/OrderPage.jsx";
import ProductsPage from "../pages/ProductsPage/ProductsPage.jsx";
export const routes = [
  {
    path: "/",
    page: HomePage,
  },
  {
    path: "/order",
    page: OrderPage,
  },
  {
    path: "/products",
    page: ProductsPage,
  },
];
