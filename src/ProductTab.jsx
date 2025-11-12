import Product from "./Product"
import "./ProductTab.css"

function ProductTab() {
    return (
        <div className="product-container">
            <Product title="Logitech MX Master" idx={0} />
            <Product title="Apple Pencil (2nd Gen)" idx={1} />
            <Product title="Zebronic Zeb-transformer" idx={2} />
            <Product title="Petronics Toad 23" idx={3} />
        </div>
    )
}

export default ProductTab