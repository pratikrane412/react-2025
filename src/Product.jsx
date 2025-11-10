import './Product.css'

function Product(props) {
    console.log(props)
    return(
        <div className='Product'>
            <h3>{props.title}</h3>
            <h5>Price: {props.price}</h5>
            {props.price > 30000 ? <p>Discount : 5% </p> : null}
        </div>
    )
}

export default Product