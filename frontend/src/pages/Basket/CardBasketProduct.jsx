export const CardBasketProduct = ({product}) => {
    return (
        <div className='card mt-2'>
            <div className='container'>
                <div className='row g-0'>
                    <div className="col-4">
                        <img
                            src={`data:image/jpeg;charset=utf-8;base64, ${product.image}`}
                            alt="honey"
                            className='img-basket-card'
                        />
                    </div>
                    <div className='col-8'>
                        <div className="card-body">
                            <h5 className="card-title">{product.productName}</h5>
                            <p className="card-text">{product.price} грн</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}