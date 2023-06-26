import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemList/ItemListContainer";

function App() {
  return <>
  <header id="grilla_header">
    <Navbar />
  </header>
  <main id="grilla_main">
    <ItemListContainer />
  </main>
  <footer id="grilla_footer">

  </footer>  
  </>
}

export default App;
