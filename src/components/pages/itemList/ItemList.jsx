
export const ItemList = ( {items} ) => {
    return (
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
                            <button><a href="#">Comprar</a></button>
                    </div>   
            } )
        }
        </section>
    );
};

