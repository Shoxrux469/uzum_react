import { useMutation } from "react-query";
import minus_img from "../../assets/minus_btn.svg";
import plus_img from "../../assets/plus_btn.svg";
import axios from "axios";
import trash_img from "../../assets/trash_img.png";
import GetGoods from "../../hooks/getGoods";
import { useState, useMemo, useCallback } from "react";
import { useDeleteData } from "../../modules/https";
const BagProdsCard = ({ good }) => {
  const { bagGoods } = GetGoods();
  const [showElement, setShowElement] = useState(true);
  const deleteDataMutation = useDeleteData();

  const res = useMemo(() => bagGoods.find((prod) => good.id === prod.prod_id),
    [
      bagGoods,
      good.id,
    ]);

  const [Num, setNum] = useState(res.num);

  const mutation = useMutation(
    async (newNum) => {
      const result = await axios.patch(
        `http://localhost:3001/bag/${res.id}`,
        {
          num: newNum,
        }
      );
      setNum(newNum);
      return result.data;
    },
    {
      onSuccess: () => {
        // Handle success if necessary
      },
      onError: (error) => {
        // Handle error if necessary
        console.error(error);
      },
    }
  );

  const handleMinusClick = useCallback(() => {
    mutation.mutateAsync(res.num - 1);
  }, [mutation, res.num]);

  const handlePlusClick = useCallback(() => {
    mutation.mutateAsync(res.num + 1);
  }, [mutation, res.num]);


  const handleDelete = async () => {
    const result = await deleteDataMutation.mutateAsync(res.id);
    result.then(res => {
      if (res.status !== 200 && res.status !== 201) return
      setShowElement(false)
      console.log('Delete operation successful:', result);
    })
  };

  const realPrice = useMemo(
    () =>
      (
        (good.price - Math.floor((good.price * good.salePercentage) / 100)) *
        Num
      )
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " руб",
    [good.price, good.salePercentage, Num]
  );

  return (
    <>
      {showElement && (
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
              <img
                className="cursor-pointer"
                onClick={handleMinusClick}
                src={minus_img}
                alt=""
              />
              <p>{Num}</p>
              <img
                className="cursor-pointer"
                onClick={handlePlusClick}
                src={plus_img}
                alt=""
              />
            </div>
            <p className="text-gray-600">{realPrice}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-end">
              <div onClick={handleDelete} className="flex items-center gap-1">
                <img className="max-w-6 h-fit" src={trash_img} alt="" />
                <p className="font-semibold cursor-pointer text-gray-500 hover:text-black duration-500 ease-in-out">
                  Удалить
                </p>
              </div>
              <h2 className="xl:text-2xl font-semibold">{realPrice}</h2>
              <p className="text-gray-500 line-through">
                {(good.price * res.num)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " руб"}
              </p>
            </div>
          </div>
        </div>
      )
      }
    </>
  );
};

export default BagProdsCard;
