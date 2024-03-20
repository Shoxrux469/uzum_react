import React, { useState, useMemo } from "react";
import { useDeleteData, useEditData } from "../../modules/https";
import minus_img from "../../assets/minus_btn.svg";
import plus_img from "../../assets/plus_btn.svg";
import trash_img from "../../assets/trash_img.png";
import GetGoods from "../../hooks/getGoods";
import { Link } from "react-router-dom";

const BagProdsCard = ({ good }) => {
  const { bagGoods } = GetGoods();
  const [showElement, setShowElement] = useState(true);
  const deleteDataMutation = useDeleteData();
  const editDataMutation = useEditData();

  const res = useMemo(() => bagGoods.find((prod) => good.id === prod.prod_id), [
    bagGoods,
    good.id,
  ]);

  const [num, setNum] = useState(res.num);

  const handleMinusClick = (e) => {
    e.stopPropagation()
    const newNum = res.num - 1;
    updateNum(newNum);
  };

  const handlePlusClick = (e) => {
    e.stopPropagation()
    const newNum = res.num + 1;
    updateNum(newNum);
  };

  const handleDelete = async () => {
    try {
      await deleteDataMutation.mutateAsync(`/bag/${res.id}`);
      setShowElement(false);
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  const updateNum = (newNum) => {
    editDataMutation.mutateAsync({ path: `/bag/${res.id}`, body: { num: newNum } })
      .then(updatedData => {
        setNum(updatedData.num);
      })
      .catch(error => {
        console.error("Error updating data:", error);
      });
  };

  const realPrice = useMemo(() => {
    const discountedPrice = good.price - Math.floor((good.price * good.salePercentage) / 100);
    return (discountedPrice * num).toLocaleString() + " руб";
  }, [good.price, good.salePercentage, num]);

  return (
    <>
      {showElement && (
        <Link to={`/product?id=${good.id}`}>
          <div className="flex items-center justify-between">
            {/* Product Info */}
            <div className="flex items-center justify-between">
              <input type="checkbox" />
              <img className="max-w-32 h-fit mx-4" src={good.media[0]} alt="" />
              <div>
                <h2 className="xl:text-lg">{good.title.slice(0, 40)}</h2>
                <p className="xl:text-lg">Продавец: Uzum</p>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex flex-col items-center">
              <div className="flex xl:px-2 xl:gap-2 items-center border border-gray-300">
                <img className="cursor-pointer" onClick={handleMinusClick} src={minus_img} alt="" />
                <p>{num}</p>
                <img className="cursor-pointer" onClick={handlePlusClick} src={plus_img} alt="" />
              </div>
              <p className="text-gray-600">{realPrice}</p>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-end">
                <div onClick={handleDelete} className="flex items-center gap-1 cursor-pointer">
                  <img className="max-w-6 h-fit" src={trash_img} alt="" />
                  <p className="font-semibold text-gray-500 hover:text-black duration-500 ease-in-out">
                    Удалить
                  </p>
                </div>
                <h2 className="xl:text-2xl font-semibold">{realPrice}</h2>
                <p className="text-gray-500 line-through">
                  {(good.price * num).toLocaleString() + " руб"}
                </p>
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default BagProdsCard;