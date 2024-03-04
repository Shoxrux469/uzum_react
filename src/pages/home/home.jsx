import SwiperFade from "../../components/swiper";
import arrow_right from "../../assets/arrow_right.svg";
import axios from "axios";
import { useQuery } from "react-query";
import discountsSlider from "../../assets/discounts_slider.png";
import cashbackSlide from "../../assets/cashback_slide.svg";
import technoSlide from "../../assets/techno_slide.svg";
import clothesSlide from "../../assets/clothes_slide.svg";
import kitchenSlide from "../../assets/kitcher_slide.svg";
import "../../index.scss";
import ProductCard from "../../components/ProductCard";
const Home = () => {
  const getData = async () => {
    const res = await axios.get("http://localhost:3001/goods");
    return res.data;
  };

  const { data, isLoading, isError } = useQuery("goods", getData);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  const likedGoods = data.filter((good) => good.status === true);
  const saleGoods = data.filter((good) => good.isBlackFriday);

  const sortedGoods = [...likedGoods, ...saleGoods];

  const slicedGoods = sortedGoods.slice(0, 15);

  const Armchairs = data.filter((good) => good.type === "furniture");

  const PC = data.filter((good) => good.type === "PC");

  const TV = data.filter((good) => good.type === "TV");

  const Audio = data.filter((good) => good.type === "audio");

  const Kitchen = data.filter((good) => good.type === "kitchen");
  return (
    <>
      <section className="w-11/12 mx-auto">
        <SwiperFade />
      </section>
      <section className="section_style">
        <h1 className="flex items-center text-lg lg:text-2xl">
          <p className="mb-2 font-bold">Распродажа</p>
          <img src={arrow_right} alt="" />
        </h1>
        <div className="prods_div">
          {slicedGoods.map((good) => (
            <ProductCard key={good.id} good={good} />
          ))}
        </div>
      </section>
      <section className="section_style">
        <img src={discountsSlider} alt="" />
        <div>
          <h1 className="my-5 text-lg lg:text-2xl flex items-center font-bold">
            <p className="mb-2">Кресла</p>
            <img src={arrow_right} alt="" />
          </h1>
          {/* <ReloadGoods sortedGoods={Armchairs} /> */}
          <div className="prods_div">
            {Armchairs.map((good) => (
              <ProductCard key={good.id} good={good} />
            ))}
          </div>
        </div>
      </section>
      <section className="section_style">
        <img src={cashbackSlide} alt="" />
        <div>
          <h1 className="my-5 text-lg lg:text-2xl flex items-center font-bold">
            <p className="mb-2">Компьютеры</p> <img src={arrow_right} alt="" />
          </h1>
          {/* <ReloadGoods sortedGoods={PC} /> */}
          <div className="prods_div">
            {PC.map((good) => (
              <ProductCard key={good.id} good={good} />
            ))}
          </div>
        </div>
      </section>
      <section className="section_style">
        <img src={technoSlide} alt="" />
        <div>
          <h1 className="my-5 text-lg lg:text-2xl flex items-center font-bold">
            <p className="mb-2">Телевизоры</p> <img src={arrow_right} alt="" />
          </h1>
          {/* <ReloadGoods sortedGoods={TV} /> */}
          <div className="prods_div">
            {TV.map((good) => (
              <ProductCard key={good.id} good={good} />
            ))}
          </div>
        </div>
      </section>
      <section className="section_style">
        <img src={clothesSlide} alt="" />
        <div>
          <h1 className="my-5 text-lg lg:text-2xl flex items-center font-bold">
            <p className="mb-2">Аудио</p> <img src={arrow_right} alt="" />
          </h1>
          {/* <ReloadGoods sortedGoods={Audio} /> */}
          <div className="prods_div">
            {Audio.map((good) => (
              <ProductCard key={good.id} good={good} />
            ))}
          </div>
        </div>
      </section>
      <section className="section_style">
        <img src={kitchenSlide} alt="" />
        <div>
          <h1 className="my-5 text-lg lg:text-2xl flex items-center font-bold">
            <p className="mb-2">Бытовая техника</p>{" "}
            <img src={arrow_right} alt="" />
          </h1>
          {/* <ReloadGoods sortedGoods={Kitchen} /> */}
          <div className="prods_div">
            {Kitchen.map((good) => (
              <ProductCard key={good.id} good={good} />
            ))}
          </div>
          <button className="mx-auto bg-gray-200 my-12 w-7/12 rounded font-semibold py-3 flex justify-center items-center">
            Больше продуктов не дали
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
