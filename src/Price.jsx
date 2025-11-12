function Price({ oldprice, newprice }) {
    return (
        <div className="price-section">
            <span className="old-price">₹{oldprice}</span>
            <span className="new-price">₹{newprice}</span>
        </div>
    )
}

export default Price
