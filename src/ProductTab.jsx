import Product from "./Product"

function ProductTab() {
    return (
        <div>
            <Product title="Phone" price={30000} />
            <Product title="Laptop" price={60000} />
            <Product title="Tab" price={45000} />
        </div>
    )
}

export default ProductTab