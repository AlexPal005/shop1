export const Card = ({product}) => {
    const addProductInLocalStorage = () => {
        let basket = JSON.parse(localStorage.getItem('basket'))
        if (!basket) {
            basket = []
        } else if (basket.find(p => p.productId === product.productId)) {
            console.warn("Product already exists in basket!")
            return
        }
        basket.push(product)
        localStorage.setItem('basket', JSON.stringify(basket))
        console.log(basket)
    }
    return (
        <div className='col p-2'>
            <div className="card text-center">
                <img
                    src={`data:image/jpeg;charset=utf-8;base64, ${product.image}`}
                    alt="honey"
                    className='product-card__img card-img-top center-block'
                />
                <span>{product.productName}</span>
                <span>{product.price} грн</span>
                <a
                    href="#"
                    className="btn btn-warning center-block mb-4 mt-4"
                    onClick={addProductInLocalStorage}
                >До кошика</a>
            </div>
        </div>
    );
}