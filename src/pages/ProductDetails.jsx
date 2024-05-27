import { Link, useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const shoe = useLoaderData();

  const { brand, description, image_url, price, title } = shoe;

  return (
    <div className="flex flex-row min-h-screen justify-center items-center">
      <div className="">
        <h1 className="text-5xl text-center font-bold mb-4">{title}</h1>

        <img className="h-[400px] m-auto" src={image_url} alt="product image" />

        <h3 className="text-2xl text-center font-semibold">Price : {price} $$</h3>
        <h3 className="text-xl text-center font-semibold">Brand : {brand}</h3>
        <p className="text-lg text-center font-light mt-4">{description}</p>
        <div className="card-actions justify-center mt-4 mb-4">
          <button className="btn btn-primary">
            <Link to="">Buy Now</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
