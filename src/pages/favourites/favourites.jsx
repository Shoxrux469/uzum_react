/* eslint-disable no-use-before-define */
import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import ProductCard from "../../components/common/ProductCard";

const Favourites = () => {
  const getData = async () => {
    const res = await axios.get("http://localhost:3001/goods");
    return res.data;
  };
  const { data, isLoading, isError } = useQuery("goods", getData);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  const Armchairs = data.filter((good) => good.type === "furniture");
  const Favourites = data.filter((good) => good.status === true);
  return (
    <section>
      {Favourites.length === 0 ? (
        <div class="container border-t mt-5 pt-3 pb-10 mx-auto">
          <div class="inner_content mx-auto flex flex-col items-center my-20">
            <img class="w-32" src="/public/hearts_img.png" alt="" />
            <h2 class="text-2xl mt-5 font-semibold text-center opacity-95">
              Добавьте то, что понравилось
            </h2>
            <p class="mt-3 text-sm opacity-95 text-center">
              Перейдите на главную страницу и нажмите на ♡ в товаре
            </p>
            <button class="main_page_btn bg-[#7000ff] rounded-lg border text-white py-2 px-4 font-semibold mt-3">
              <Link to="/">На главную</Link>
            </button>
          </div>
          <div class="pop_products mt-5">
            <h2 class="text-2xl font-semibold py-4">Популярные товары</h2>
            <div class="pop_content flex items-center w-full gap-5">
              <div class="swiper">
                <div class="swiper-wrapper">
                  {Armchairs.map((good) => (
                    <ProductCard key={good.id} good={good} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div class="prod_container mt-5 w-11/12 justify-center lg:justify-start mx-auto flex flex-wrap gap-6 items-center">
          {Favourites.map((good) => (
            <ProductCard key={good.id} good={good} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Favourites;
