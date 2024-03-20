import like_icon from "../../assets/like_icon.svg";
import star_icon from "../../assets/start_icon.svg";
import purple_like from "../../assets/purple_heart.svg";
import bag_icon from "../../assets/product_bag_icon.svg";
// import ProductStatus from "./ProductStatus";
import { useMutation } from "react-query";
import axios from "axios";
import { useState } from "react";
import GetGoods from "../../hooks/getGoods";
import { addToBagMutation, patchtoBagMutation } from "../../hooks/addToBag";
import { Link } from "react-router-dom";

const ProductCard = ({ good }) => {
  const [status, setStatus] = useState(good && good.status);
  const { bagGoods } = GetGoods()

  const { addToBag } = addToBagMutation();
  const { patchtoBag } = patchtoBagMutation();

  const { mutate: updateStatus } = useMutation(async (newStatus) =>
    await axios.patch(
      `http://localhost:3001/goods/${good.id}`,
      {
        status: newStatus,
      }
    )
  );


  const handleLike = async (e) => {
    e.preventDefault();
    e.stopPropagation()

    const newStatus = !status;
    setStatus(newStatus);
    updateStatus(newStatus);
  };

  const handleBag = (e) => {
    e.preventDefault();
    e.stopPropagation()
    const isProdExist = bagGoods.find(prod => +prod.prod_id === +good.id)
    // console.log(bagGoods);
    // console.log(good.id);
    if (isProdExist === undefined) {
      // console.log(good.id);
      addToBag(good && { productId: good.id, media: good.media[0], title: good.title });
    } else {
      console.log("Product Num:", isProdExist);
      isProdExist && patchtoBag(good && { productId: isProdExist.id, productNum: isProdExist.num, media: good.media[0], title: good.title })

    }
  };

  return (
    <>
      <Link to={`/product?id=${good.id}`}>
        <ul key={good && good.id} className="w-[230px]">
          <li className="w-full relative">
            <img
              className="w-7 absolute right-0 cursor-pointer"
              src={status ? purple_like : like_icon}
              alt=""
              onClick={(e) => {
                setStatus(!status);
                handleLike(e);
              }}
            />
            <img className="w-full" src={good && good.media[0]} alt="" />
            <div className="bg-[#5000AA] absolute bottom-0 left-0 w-fit text-white px-[6px] rounded text-center">
              Акция
            </div>
          </li>
          <li className="mt-2">
            <p className="text-sm text-black/75">
              {good && good.title.slice(0, 48) + ".."}
            </p>
            <span className="flex items-center text-black/70 text-sm">
              <img src={star_icon} alt="" /> {good && good.rating}
            </span>
            <p className="bg-[#FFFF00] w-fit px-1 my-2 rounded text-sm">
              {Math.floor((good && good.price * 12) / 100)} руб/мес
            </p>
            <div className="flex justify-between items-center">
              <div>
                <p className="line-through text-[#757575] text-xs">
                  {good && good.price} руб
                </p>
                <span>
                  {good && good.price -
                    Math.floor((good.price * good.salePercentage) / 100)}
                  руб
                </span>
              </div>
              <img
                onClick={(e) => handleBag(e)}
                className="w-8 cursor-pointer"
                src={bag_icon}
                alt=""
              />
            </div>
          </li>
        </ul>
      </Link>
    </>
  );
};

export default ProductCard;
