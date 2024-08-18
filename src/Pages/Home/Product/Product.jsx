const Product = ({ product }) => {
  return (
    <>
      <div>
        <div className="card bg-base-100 shadow-xl p-5 border">
          <figure className="">
            <img src={product.image} className="rounded-xl w-32 h-32" />
          </figure>
          <div className="overflow-hidden">
            <div className="mt-5">
              <p className="text-xs text-end">Date: {product.date}</p>
            </div> 
            <div className="flex justify-between mt-1">
              <h1 className="text-xs text-end my-1">Brand: {product.brand}</h1>
              <h1 className="text-xs text-end my-1">
                Category: {product.category}
              </h1>
            </div>
            <h2 className="card-title capitalize line-clamp-1">
              {product.name}
            </h2>
            <div>
              <p className="line-clamp-2">{product.description}</p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <div>
                <p className="text-4xl font-bold text-primary">
                  <span className="font-bold ">$ </span>
                  {product.price}
                </p>
              </div>
              <div>
                <p>
                  Rating: <span> {product.rating}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Product;
