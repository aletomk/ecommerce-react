import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { ItemListContainer } from "./components/pages/itemList/ItemListContainer";
import { CartContainer } from "./components/common/cart/CartContainer";
import { NotFound } from "./components/pages/error/NotFound";
import { ItemDetail } from "./components/pages/itemDetail/ItemDetail";


function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/itemDetail/:id" element={<ItemDetail />} />
        <Route path="/cart" element={<CartContainer />} />
      </Route>
      <Route path="*" element={<NotFound />} /> 
    </Routes>
  </BrowserRouter>  
  );
}

export default App;
