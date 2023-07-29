import { Link } from "react-router-dom";
import { ProductCard } from "../../common/productCard/ProductCard";
import Skeleton from '@mui/material/Skeleton';

export const ItemList = ( {items} ) => {

    let arr = [1, 2, 3, 4, 5, 6, 7, 8]; 
    

    return (
        <main id="grilla_main">
            <h2 className="tienda_h2">Tienda online</h2>
            <div className="categorias_div"> {/*Este div es provisoria, más adelante ira en un submenu en el navbar*/}
                <ul className="categorias">
                    <Link to="/shop"><li>Todos</li></Link>
                    <Link to="/category/impresoras"><li>Impresoras</li></Link>
                    <Link to="/category/electrónica"><li>Electrónica</li></Link>
                    <Link to="/category/filamentos"><li>Filamentos</li></Link>
                    <Link to="/category/repuestos"><li>Repuestos</li></Link>
                </ul>
            </div>

            <section className="cards">
            {
                items.length > 0 ? items.map((item) => {
                    return <ProductCard key={item.id} item={item} />
                }) : arr.map((e) => {
                    return (
                        <div key={e} className="skeleton">
                            <Skeleton variant="rounded" width={260} height={240} />
                            <Skeleton variant="text" sx={{ fontSize: '36px' }} width={100} />
                            <Skeleton variant="text" sx={{ fontSize: '25px' }} width={80} />                           
                            <Skeleton variant="text" sx={{ fontSize: '15px' }} width={130} />
                            <Skeleton variant="text" sx={{ fontSize: '45px' }} width={260} />
                        </div>  
                    )
                })
            }
            </section>

        </main>
    );
};

