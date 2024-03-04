import { useQuery } from "react-query";
import minus_img from "../../assets/minus_btn.svg";
import plus_img from "../../assets/plus_btn.svg";
import axios from "axios";
import trash_img from "../../assets/trash_img.png";

// export const RealPrice = async ({ good, res }) => {
//   const result =
//     (
//       (good.price - Math.floor((good.price * good.salePercentage) / 100)) *
//       res[0].num
//     )
//       .toString()
//       .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " руб";
//   return await result;
// };

const BagProdsCard = ({ good }) => {
  const getData = async () => {
    const res = await axios.get("http://localhost:3001/bag");
    return res.data;
  };

  // const minus_btn = (data) => {
  //   mutation.mutateAsync({ num: data });
  // };
  // const plus_btn = (data) => {
  //   mutation.mutateAsync({ num: data });
  // };

  const toggleNum = async(newNum) => {
    try {
      const response = await axios.patch(
        `http://localhost:3001/bag/${good.id}`,
        {
          num: newNum,
        }
      );
    } catch(e) {
      console.error("Error updating product status:", e);
    }
  }

  const { data, isLoading, isError } = useQuery("bag", getData);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  const res = data.filter((prod) => +good.id === prod.prod_id);

  const realPrice =
    (
      (good.price - Math.floor((good.price * good.salePercentage) / 100)) *
      res[0].num
    )
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " руб";

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between">
          <input type="checkbox" />
          <img className="max-w-32 h-fit mx-4" src={good.media[0]} alt="" />
          <div>
            <h2 className="xl:text-lg">{good.title.slice(0, 40)}</h2>
            <p className="xl:text-lg">Продавец: Uzum</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex xl:px-2 xl:gap-2 items-center border border-gray-300">
            <img onClick={() => toggleNum(res[0].num--)} src={minus_img} alt="" />
            <p>{res[0].num}</p>
            <img onClick={() => toggleNum(res[0].num++)} src={plus_img} alt="" />
          </div>
          <p className="text-gray-600">{realPrice}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-1">
              <img className="max-w-6 h-fit" src={trash_img} alt="" />
              <p className="font-semibold text-gray-500">Удалить</p>
            </div>
            <h2 className="xl:text-2xl font-semibold">{realPrice}</h2>
            <p className="text-gray-500 line-through">
              {(good.price * res[0].num)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " руб"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default BagProdsCard;
