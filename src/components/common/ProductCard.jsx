import like_icon from "../../assets/like_icon.svg";
import star_icon from "../../assets/start_icon.svg";
import purple_like from "../../assets/purple_heart.svg";
import bag_icon from "../../assets/product_bag_icon.svg";
// import ProductStatus from "./ProductStatus";
import { useMutation } from "react-query";
import axios from "axios";
import { useContext, useState } from "react";
import BagGoods from "../../hooks/getGoods";
import PopUpContext from "../../modules/popUpContext";
// import { Link } from "react-router-dom";

const ProductCard = ({ good }) => {
  const [status, setStatus] = useState(good && good.status);
  const { bagGoods } = BagGoods()
  const { setpopUpData } = useContext(PopUpContext);

  const { mutate: updateStatus } = useMutation(async (newStatus) =>
    await axios.patch(
      `http://localhost:3001/goods/${good.id}`,
      {
        status: newStatus,
      }
    )
  );

  const { mutate: addToBag } = useMutation(async (productId) => {

    await axios.post(
      "http://localhost:3001/bag",
      {
        prod_id: productId,
        num: 1
      }
    ).then(res => {
      if (res.status !== 200 && res.status !== 201) return;
      setpopUpData(
        {
          itemImg: good.media[0],
          itemTitle: good.title,
        }
      );
      setTimeout(() => {
        setpopUpData(
          {
            status: true
          }
        )
      }, 500)
    })
    setTimeout(() => {
      setpopUpData({ status: false })
    }, 3000)
  }
  );
  const { mutate: patchtoBag } = useMutation(async ({ productId, productNum }) => {
    await axios.patch(
      `http://localhost:3001/bag/${productId}`,
      {
        num: productNum += 1
      }
    ).then(res => {
      if (res.status !== 200 && res.status !== 201) return;
      setpopUpData(
        {
          itemImg: good.media[0],
          itemTitle: good.title,
        }
      );
      setTimeout(() => {
        setpopUpData(
          {
            status: true
          }
        )
      }, 500)
    })
    setTimeout(() => {
      setpopUpData({ status: false })
    }, 3000)
  }
  );

  const handleLike = async () => {
    const newStatus = !status;
    setStatus(newStatus);
    updateStatus(newStatus);

  };

  const handleBag = () => {
    const isProdExist = bagGoods.find(prod => prod.prod_id === good && good.id)
    if (isProdExist === undefined) {
      console.log(good && good.id);
      addToBag(good && good.id);
    } else {
      // console.log("Product Num:", isProdExist.num);
      isProdExist && patchtoBag({ productId: isProdExist.id, productNum: isProdExist.num })
    }
  };

  return (
    <>
      {/* <Link to={`/product?id=${good.id}`}> */}
      <ul key={good && good.id} className="w-[230px]">
        <li className="w-full relative">
          <img
            className="w-7 absolute right-0 cursor-pointer"
            src={status ? purple_like : like_icon}
            alt=""
            onClick={() => {
              setStatus(!status);
              handleLike(good.id);
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
