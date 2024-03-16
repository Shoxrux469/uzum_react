import { useLocation } from "react-router-dom";
import yellow_star from "../../assets/start_yellow.svg";
import like_icon from "../../assets/like_icon.svg";
import minus_btn from "../../assets/minus_btn.svg";
import plus_btn from "../../assets/plus_btn.svg";
import purple_fire from "../../assets/purple_fire.svg";
import arrow_right from "../../assets/arrow_right.svg";
import exclamation from "../../assets/exclamation.svg";
import { useState } from "react";
import "./index.scss";
import SimilarProds from "./similarProds";
import GetGoods from "../../hooks/getGoods";
const Product = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = JSON.parse(searchParams.get("id"));
  const { Goods } = GetGoods()

  // const getData = async () => {
  //   const res = await axios.get("http://localhost:3001/goods");
  //   return res.data;
  // };

  // const { data, isLoading, isError } = useQuery("goods", getData);

  const myProd = Goods && Goods.find((good) => +good.id === id);

  console.log(myProd);

  let [quantity, setquantity] = useState(1);

  const handlePlus = () => {
    if (quantity <= 5) {
      setquantity(quantity++);
    }
  };
  const handleMinus = () => {
    if (quantity >= 1) {
      setquantity(quantity--);
    }
  };
  const similarProds = Goods && Goods.filter((good) => good.type === myProd && myProd.type);

  return (
    <section className="sm:w-fit mx-auto">
      <div className="container w-11/12 mx-auto flex flex-col justify-between">
        <p className="mb-5 text-sm">
          Main
          <span className="opacity-80"> / All categories /</span>
          <span className="prod_type opacity-80">{myProd && myProd.type}</span>
          <span className="opacity-80 title"></span>
        </p>
        <div className="flex flex-col md:flex-row mb-16">
          <div className="left_img_box flex w-full md:w-6/12 h-fit mb-5 md:mb-0 relative md:sticky top-[12px]">
            <div className="product_imgs flex flex-col gap-3 w-2/12 lg:h-[70vh] md:h-[100vh] overflow-y-scroll">
              {myProd && myProd.media.map((img) => (
                <img src={img} alt="" />
              ))}
            </div>
            <div className="selected_img w-8/12">
              <img src={myProd && myProd.media[0]} alt="" />
            </div>
          </div>
          <div className="right w-full md:w-6/12">
            <div className="flex justify-between items-center">
              <div className="flex text-xs opacity-80 gap-3">
                <span className="flex w-36 items-center">
                  <img src={yellow_star} alt="" />
                  5.0 (34 оценки)
                </span>
                <span>Более 200 заказов</span>
              </div>
              <div>
                <img src={like_icon} alt="" />
              </div>
            </div>
            <h2 className="prod_name text-2xl">{myProd && myProd.title}</h2>
            <div className="md:flex my-3 flex-col ">
              <div className="flex flex-col md:flex-row gap-4">
                <span className="modal_price text-xl text-[#7000FF] font-semibold">
                  {/* {myProd.price * quantity} руб/ед */}
                  {myProd && myProd.price -
                    Math.floor((myProd.price * myProd.salePercentage) / 100) *
                    quantity}{" "}
                  руб/ед
                </span>
                <span className="bg-[#5000AA] w-fit px-2 text-sm text-white font-medium rounded flex items-center justify-center">
                  Распродажа
                </span>
              </div>
            </div>
            <ul>
              <li className="flex flex-col md:flex-row md:gap-16 mt-3">
                <p>Продавец: </p>
                <p className="ml-3 underline">Uzum</p>
              </li>
              <li className="flex flex-col md:flex-row md:gap-16 mt-3">
                <p className="flex gap-2">
                  Доставка: <img src={exclamation} alt="" />
                </p>{" "}
                <span className="opacity-80">1 день, бесплатно</span>
              </li>
            </ul>
            <div className="line my-8 w-full h-[1px] bg-gray-300 "></div>

            <div className="flex">
              <p>
                Цвет: <span className="colors"></span>
              </p>
              <div className="color_img ml-2 font-semibold"></div>
            </div>
            <div className="hidden md:block">
              <p className="mb-3">Количество:</p>
              <div className="flex w-fit mb-4">
                <div className="flex border w-fit items-center">
                  <button onClick={handleMinus} className="minus text-4xl">
                    <img src={minus_btn} alt="" />
                  </button>
                  <p className="quantity text-lg mx-4">{quantity}</p>
                  <button onClick={handlePlus} className="plus text-3xl">
                    <img src={plus_btn} alt="" />
                  </button>
                </div>
                <p className="flex w-56 ml-4 items-center text-[#7000FF]">
                  <img className="w-6" src={purple_fire} alt="" /> Осталось
                  всего 5
                </p>
              </div>
            </div>
            <div className="hidden md:flex flex-col ">
              <p>Цена:</p>
              <div className="flex gap-4">
                <span className="price text-xl font-semibold">
                  {myProd && myProd.price -
                    Math.floor((myProd.price * myProd.salePercentage) / 100) *
                    quantity}{" "}
                  руб/ед
                </span>
                <span className="bg-[#5000AA] w-fit px-2 text-sm text-white font-medium rounded flex items-center justify-center">
                  Распродажа
                </span>
              </div>
            </div>
            <div className="muttaham_btn py-[12px] my-8 px-3 flex items-center bg-[#f2f4f7] rounded-xl justify-between">
              <div className="flex items-center gap-2">
                <span className="monthly_price bg-[#FF0] h-fit font-semibold px-2 py-1 rounded-lg">
                  {Math.floor((myProd && myProd.price * 12) / 100)} руб/мес
                </span>
                <p>в рассрочку</p>
              </div>
              <img className="w-[30px]" src={arrow_right} alt="" />
            </div>
            <div className="hidden md:flex gap-2 mb-5">
              <button className="add_to_bag bg-[#7000FF] text-white flex items-center justify-center py-[14px] font-semibold text-lg w-1/2 rounded-xl">
                Добавить в корзину
              </button>
              <button className="buy_product  text-[#7000FF] border border-[#7000FF] flex items-center justify-center py-[14px] font-semibold text-lg w-1/2 rounded-xl">
                Купить в 1 клик
              </button>
            </div>
            <p className="flex items-center gap-1 text-sm opacity-95 bg-[#fff8e6] rounded-lg px-6 py-2">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14 4.5C12.2402 4.5 11 5.88779 11 7.5H17C17 5.88779 15.7598 4.5 14 4.5ZM9.5 11.5V9H7.5V14.25C7.5 14.6642 7.16421 15 6.75 15C6.33578 15 6 14.6642 6 14.25V8.25V7.5H6.75H9.5C9.5 5.11221 11.3598 3 14 3C16.6402 3 18.5 5.11221 18.5 7.5H21.25H22V8.25V21.75C22 22.9926 20.9926 24 19.75 24H15.25C14.8358 24 14.5 23.6642 14.5 23.25C14.5 22.8358 14.8358 22.5 15.25 22.5H19.75C20.1642 22.5 20.5 22.1642 20.5 21.75V9H18.5V11.5H17V9H11V11.5H9.5ZM14.2738 18.0323C14.5667 17.7395 14.5667 17.2646 14.2738 16.9717C13.9809 16.6788 13.506 16.6788 13.2131 16.9717L7.99548 22.1893L5.78034 19.9742C5.48744 19.6813 5.01257 19.6813 4.71967 19.9741C4.42678 20.267 4.42677 20.7419 4.71966 21.0348L7.46513 23.7803C7.60579 23.921 7.79655 24 7.99547 24C8.19438 24 8.38515 23.921 8.5258 23.7803L14.2738 18.0323Z"
                  fill="#141415"
                ></path>
              </svg>
              24 человека купили на этой неделе
            </p>
            <div className="mt-16 flex flex-col">
              <p>Коротко о товаре:</p>
              <ul className="opacity-80 mt-2 flex pl-5 flex-col gap-2">
                <li>Красивый дезайн</li>
                <li>бесплатная гарантия в течении 1 года</li>
                <li>Выгодная покупка в рассрочку</li>
                <li>Доступность возврата в случае недоразумений</li>
                <li>Приемлемая цена</li>
                <li>Большой ассортимент продукции</li>
                <li>Высокое качество сырья</li>
              </ul>
            </div>
          </div>
        </div>
        <SimilarProds similarProds={similarProds && similarProds} />
      </div>
    </section>
  );
};

export default Product;
