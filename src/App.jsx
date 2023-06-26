import { Navbar } from "./components/layout/navbar/Navbar";
import { Home } from "./components/pages/home/Home";

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
