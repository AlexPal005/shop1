export const Card = ({product}) => {
    return(
        <div className='col p-2'>
            <div className="card text-center">
                <img
                    src={`data:image/jpeg;charset=utf-8;base64, ${product.image}`}
                    alt="hello"
                    className='product-card__img card-img-top center-block'
                />
                <span>{product.productName}</span>
                <span>{product.price} грн</span>
                <a
                    href="#"
                    className="btn btn-warning center-block mb-4 mt-4"
                >До кошика</a>
            </div>
        </div>
    );
}