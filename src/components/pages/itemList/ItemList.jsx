
export const ItemList = ( {items} ) => {
    return (
        <div>
        {
            items.map( (item) => {
                return <section key={item.id}>
                    <div>
                        <h2>{item.title}</h2>
                        <h3>{item.price}</h3>
                        <img src={item.img} />
                    </div>
                </section>    
            } )
        }
        </div>
    );
};

