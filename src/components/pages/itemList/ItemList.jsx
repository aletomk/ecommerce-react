import { Link } from "react-router-dom";

export const ItemList = ( {items} ) => {
    return (
        <main id="grilla_main">
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
                                </div>
                                <button><Link to="/src/components/common/cart/CartWidget.jsx">Comprar</Link></button>
                        </div>   
                } )
            }
            </section>
        </main>
    );
};

