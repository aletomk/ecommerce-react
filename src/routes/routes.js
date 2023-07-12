import { ItemListContainer } from "../components/pages/itemList/ItemListContainer";
import { CartContainer } from "../components/common/cart/CartContainer";
import { ItemDetail } from "../components/pages/itemDetail/ItemDetail";

export const routes = [
    {
        id: "home",
        path: "/",
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
        Element: ItemDetail
    },
    {
        id: "cart",
        path: "/cart",
        Element: CartContainer
    },
    {
        id: "home",
        path: "/",
        Element: ItemListContainer
    }
]