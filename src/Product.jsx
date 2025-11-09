import './Product.css'

function Product(props) {
    console.log(props)
    let isDiscount = props.price > 30000 ? "Discount: 5%" : "";
    // if (props.price > 30000) {
    //     return (
    //         <div className="Product">
    //             <h3>{props.title}</h3>
    //             <h5>Price: {props.price}</h5>
    //             <p>Discount: 5%</p>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div className="Product">
    //             <h3>{props.title}</h3>
    //             <h5>Price: {props.price}</h5>
    //         </div>
    //     )
    // }
    return(
        <div className='Product'>
            <h3>{props.title}</h3>
            <h5>Price: {props.price}</h5>
            <p>{isDiscount}</p>
        </div>
    )
}

export default Product