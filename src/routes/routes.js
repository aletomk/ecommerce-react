import { ItemListContainer } from "../components/pages/itemList/ItemListContainer";
import { CartContainer } from "../components/pages/cart/CartContainer";
import { ItemDetailContainer } from "../components/pages/itemDetail/ItemDetailContainer";
import { CheckoutContainer } from "../components/pages/checkout/CheckoutContainer";
import { Dashboard } from "../components/pages/dashboard/Dashboard";
import { Home } from "../components/pages/home/Home";

export const routes = [
    {
        id: "home",
        path: "/",
        Element: Home
    },
    {
        id: "shop",
        path: "/shop",
        Element: ItemListContainer
    },
    {
        id: "category",
        path: "/category/:category",
        Element: ItemListContainer
    },
    {
        id: "detail",
        path: "/itemDetail/:id",
        Element: ItemDetailContainer
    },
    {
        id: "cart",
        path: "/cart",
        Element: CartContainer
    },
    {
        id: "checkout",
        path: "/checkout",
        Element: CheckoutContainer
    },
    {
        id: "dashboard",
        path: "/dashboard",
        Element: Dashboard,
    }
]