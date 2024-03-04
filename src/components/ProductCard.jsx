import like_icon from "../assets/like_icon.svg";
import star_icon from "../assets/start_icon.svg";
import purple_like from "../assets/purple_heart.svg";
import bag_icon from "../assets/product_bag_icon.svg";
// import ProductStatus from "./ProductStatus";
import { useMutation } from "react-query";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const updateProductStatus = async (productId, newStatus) => {
  const response = await axios.patch(
    `http://localhost:3001/goods/${productId}`,
    {
      status: newStatus,
    }
  );
  console.log(response.data);
  return response.data;
};

const ProductCard = ({ good }) => {
  const [status, setStatus] = useState(good.status);

  const { mutate, isLoading } = useMutation(
    () => updateProductStatus(good.id, !status),
  );

  const handleLike = async () => {
    try {
      await mutate(!status);
    } catch (error) {
      console.error("Error updating product status:", error);
    }
  };

  const mutation = useMutation(async ({ good }) => {
    const res = axios.post("http://localhost:3001/users", good);
    return res.data;
  });

  const handleBag = () => {
    mutation.mutateAsync(good);
  };

  return (
    <>
      {/* <Link to={`/product?id=${good.id}`}> */}
      <ul key={good.id} className="w-[230px]">
        <li className="w-full relative">
          <img
            className="w-7 absolute right-0 cursor-pointer"
            src={status ? purple_like : like_icon}
            alt=""
            onClick={() => {
              setStatus(!status);
              handleLike(good.id);
            }}
            disabled={isLoading}
          />
          <img className="w-full" src={good.media[0]} alt="" />
          <div className="bg-[#5000AA] absolute bottom-0 left-0 w-fit text-white px-[6px] rounded text-center">
            Акция
          </div>
        </li>
        <li className="mt-2">
          <p className="text-sm text-black/75">
            {good.title.slice(0, 48) + ".."}
          </p>
          <span className="flex items-center text-black/70 text-sm">
            <img src={star_icon} alt="" /> {good.rating}
          </span>
          <p className="bg-[#FFFF00] w-fit px-1 my-2 rounded text-sm">
            {Math.floor((good.price * 12) / 100)} руб/мес
          </p>
          <div className="flex justify-between items-center">
            <div>
              <p className="line-through text-[#757575] text-xs">
                {good.price} руб
              </p>
              <span>
                {good.price -
                  Math.floor((good.price * good.salePercentage) / 100)}
                руб
              </span>
            </div>
            <img
              onClick={handleBag}
              className="w-8 cursor-pointer"
              src={bag_icon}
              alt=""
            />
          </div>
        </li>
      </ul>
      {/* </Link> */}
    </>
  );
};

export default ProductCard;
