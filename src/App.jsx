import { Navbar } from "./components/layout/navbar/Navbar";
import { Home } from "./components/pages/home/Home";
//import { ItemListContainer } from "./components/pages/itemList/ItemListContainer"


//const greeting = "Bienvenidos a la tienda N°1 de Argentina relacionada con la impresión 3D";

function App() {
  return <>
  <header id="grilla_header">
    <Navbar />
  </header>
  <main id="grilla_main">
    <Home />
  </main>
  <footer id="grilla_footer">

  </footer>  
  </>
}

export default App;
