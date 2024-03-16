import ProductCard from "../../components/ProductCard";

const SimilarProds = ({ similarProds }) => {
  return (
    <>
      <div className="border-y">
        <div className="points flex gap-4 pt-4 w-[65%] mx-auto">
          <div className="flex flex-col">
            <span className="mb-4">Описание товара</span>
            <div className="line border hidden border-[#d4cbdf] h-[2px]"></div>
          </div>
          <div className="flex flex-col">
            <span className="mb-4">Инструкция</span>
            <div className="line hidden border border-[#7000FF] h-[2px]"></div>
          </div>
          <div className="flex flex-col">
            <span className="mb-4">Отзывы</span>
            <div className="line hidden border border-[#7000FF] h-[2px]"></div>
          </div>
        </div>
      </div>
      <div className="container w-full mx-auto flex flex-col justify-between">
        <div className="description"></div>
        <div>
          <h2 className="text-2xl font-semibold">Похожие товары</h2>
          <div className="similar_products flex mt-4 overflow-x-scroll w-full gap-8">
            {similarProds && similarProds.map((good) => (
              <ProductCard key={good.id} good={good} />
            ))}
          </div>
        </div>
      </div>
      <div className="add_to_bag_modal w-full flex px-4 py-2 justify-between items-center bg-white border-t fixed bottom-0 md:hidden">
        <div>
          <p className="opacity-80">Цена общая</p>
          <span className="prod_price text-xl"></span>
        </div>
        <button className="add_to_bag py-[6px] flex items-center gap-2 px-3 border rounded-2xl border-[#7000FF]">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="slightly transparent icon-pushcart"
            data-v-1a3a46a8=""
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1 3.25C1 2.83579 1.34178 2.5 1.7634 2.5H3.05714C3.8309 2.5 4.51617 2.99077 4.75295 3.71448L5.99146 7.5H21.2174C22.4332 7.5 23.2917 8.67021 22.9072 9.8034L20.5322 16.8034C20.2898 17.518 19.6091 18 18.8424 18H9.12149C8.34772 18 7.66245 17.5092 7.42568 16.7855L3.2994 4.1735C3.26557 4.07011 3.16768 4 3.05714 4H1.7634C1.34178 4 1 3.66421 1 3.25Z"
              fill="#7000FF"
            ></path>
            <path
              d="M19.8305 21C19.8305 21.8284 19.1469 22.5 18.3037 22.5C17.4604 22.5 16.7769 21.8284 16.7769 21C16.7769 20.1716 17.4604 19.5 18.3037 19.5C19.1469 19.5 19.8305 20.1716 19.8305 21Z"
              fill="#7000FF"
            ></path>
            <path
              d="M11.6876 21C11.6876 21.8284 11.004 22.5 10.1608 22.5C9.31754 22.5 8.63397 21.8284 8.63397 21C8.63397 20.1716 9.31754 19.5 10.1608 19.5C11.004 19.5 11.6876 20.1716 11.6876 21Z"
              fill="#7000FF"
            ></path>
          </svg>
          <span className="text-[#7000FF]">Перейти</span>
        </button>
      </div>
    </>
  );
};

export default SimilarProds;
