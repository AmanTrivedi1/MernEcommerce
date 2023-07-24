import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

const Product = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <>
      <div className=" border-2 p-2  border-dark rounded-lg  w-64   ">
        <div className="flex items-center justify-center ">
          <Link className="" to={`/product/${product._id}`}>
            <img
              className="rounded-lg  w-[250px] h-[250px] object-contain "
              src={product?.images[0]?.url}
              alt={product.name}
            />
            <div className="text-xs flex items-center justify-center">
              <Rating {...options} />

              <span className="productCardSpan">
                ({product?.numOfReviews} Reviews)
              </span>
            </div>
            <div className="flex px-2  items-center justify-between">
              <p className="truncate">{product?.name}</p>
              <span>{`₹${product?.price}`}</span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Product;
