import { Link } from "react-router-dom";
import trash_icon from "../../../assets/trash_img.png";
import GetGoods from "../../../hooks/getGoods";

const BagModal = ({ item }) => {
  const { bagGoods } = GetGoods()

  const myProd = bagGoods && bagGoods.find(good => +good.prod_id === +item.id)

  return (
    <>
      {item &&
        <Link to={`/product?id=${item.id}`}>
          <div
            key={item.id}
            className="flex gap-3 py-2 px-3 items-center hover:bg-gray-200"
          >
            <img className="w-12 h-12" src={item.media[0]} alt="" />
            <div className="flex flex-col items-start w-full">
              <p className="text-sm">{item.title.slice(0, 40)}...</p>
              <span className="font-semibold text-sm">
                {(item.price -
                  Math.floor((item.price * item.salePercentage) / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")) + " "}
                руб
                X
                {" "}
                {myProd && myProd.num}
              </span>
            </div>
            <img className="w-4 h-fit" src={trash_icon} alt="" />
          </div>
        </Link>
      }
    </>
  );
};
export default BagModal;
