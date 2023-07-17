import { ItemListContainer } from "../components/pages/itemList/ItemListContainer";
import { CartContainer } from "../components/common/cart/CartContainer";
import { ItemDetailContainer } from "../components/pages/itemDetail/ItemDetailContainer";

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
        Element: ItemDetailContainer
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