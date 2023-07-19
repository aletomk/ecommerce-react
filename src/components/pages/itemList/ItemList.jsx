import { Link } from "react-router-dom";

export const ItemList = ( {items} ) => {
    return (
        <main className="grilla_main">
            <div className="categorias_div"> {/*Este div es provisoria, más adelante ira en un submenu en el navbar*/}
                <ul className="categorias">
                    <Link to="/category/impresoras"><li>Impresoras</li></Link>
                    <Link to="/category/electrónica"><li>Electrónica</li></Link>
                    <Link to="/category/filamentos"><li>Filamentos</li></Link>
                    <Link to="/category/repuestos"><li>Repuestos</li></Link>
                </ul>
            </div>
            <section>
            {
                items.map( (item) => {
                    return <div key={item.id} className="card">
                                <img src={item.img} />
                                <div className="container_product">
                                    <span>{item.category}</span>
                                    <h2>{item.title}</h2>
                                    <h3>${item.price}</h3>
                                    <article>{item.description}</article>
                                    <Link to={`/itemDetail/${item.id}`}><div>Ver detalle</div></Link>
                                </div>
                                <button><Link to="/cart">Comprar</Link></button>
                        </div>   
                } )
            }
            </section>
        </main>
    );
};

