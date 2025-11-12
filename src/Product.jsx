import Price from './Price'
import './Product.css'

function Product({title, idx}) {
    let oldPrices = ['12,500', '11,900', '1,599', '599']
    let newPrices = ['8,999', '9,199', '899', '278']
    return (
        <div className='Product'>
            <h2>{title}</h2>
            <h3>Description</h3>
            <Price oldprice={oldPrices[idx]} newprice={newPrices[idx]}/>
        </div>
    )
}

export default Product