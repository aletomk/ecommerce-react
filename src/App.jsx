import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemList } from "./components/pages/itemList/ItemList"


const greeting = "Bienvenidos a la tienda N°1 de Argentina relacionada con la impresión 3D";

function App() {
  return <>
  <header id="grilla_header">
    <Navbar />
  </header>
  <main id="grilla_main">
    <ItemList greeting={greeting} />
  </main>
  <footer id="grilla_footer">

  </footer>  
  </>
}

export default App;
