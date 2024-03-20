import { useContext } from "react"
import Aside from "./aside"
import searchContext from "../../modules/context/searchContext"
import BagGoods from "../../hooks/getGoods"
import ProductCard from "../../components/common/ProductCard"
import { useLocation } from "react-router-dom"


const SearchPage = () => {
    const location = useLocation();
    const arr = location.state?.arr || [];

    console.log(arr);

    return (
        <div className="container w-full md:w-11/12 flex-col md:flex-row mx-auto flex">
            <Aside />
            <div className="searcher_content w-full md:w-[78%]">
                <div className="w-11/12 mx-auto">

                    <h2 className="text-bade ml-2 md:text-2xl opacity-60 mt-10 font-bold md:opacity-90">Найдено <span
                        className="prod_num">{arr.length}</span> товаров в 1
                        категории</h2>
                    <button className="px-3 mt-4 mb-3 py-[6px] bg-[#f2f4f7] flex items-center gap-1 rounded-xl">
                        <img src="/public/searcher_icon.svg" alt="" />
                        <p>Искать везде</p>
                    </button>
                </div>

                <p
                    className="text-sm mb-10 w-11/12 mx-auto pt-4 flex justify-between md:justify-start md:flex-start border-t items-center">
                    <span className="hidden md:block opacity-80 mr-1">
                        Сначала показывать:
                    </span>
                    <span className="flex md:hidden items-center gap-2">
                        <svg data-v-a2a73d2a="" width="24" height="24" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg" className="ui-icon ">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M6 5.75C6 4.7835 6.7835 4 7.75 4C8.69794 4 9.46984 4.75369 9.49914 5.69452C9.49713 5.71274 9.49609 5.73125 9.49609 5.75C9.49609 5.76875 9.49713 5.78726 9.49914 5.80548C9.46984 6.74631 8.69794 7.5 7.75 7.5C6.7835 7.5 6 6.7165 6 5.75ZM7.75 3C9.09803 3 10.2195 3.96994 10.4547 5.25H18.5C18.7761 5.25 19 5.47386 19 5.75C19 6.02614 18.7761 6.25 18.5 6.25H10.4547C10.2195 7.53006 9.09803 8.5 7.75 8.5C6.40197 8.5 5.28047 7.53006 5.04534 6.25H1.49976C1.22361 6.25 0.999756 6.02614 0.999756 5.75C0.999756 5.47386 1.22361 5.25 1.49976 5.25H5.04534C5.28047 3.96994 6.40197 3 7.75 3ZM10.5 14.25C10.5 13.2835 11.2835 12.5 12.25 12.5C13.2119 12.5 13.9925 13.276 13.9999 14.2361C13.9998 14.2407 13.9998 14.2453 13.9998 14.25C13.9998 14.2547 13.9998 14.2593 13.9999 14.2639C13.9925 15.224 13.2119 16 12.25 16C11.2835 16 10.5 15.2165 10.5 14.25ZM14.9547 14.75C14.7195 16.0301 13.598 17 12.25 17C10.902 17 9.78047 16.0301 9.54534 14.75H1.50366C1.22752 14.75 1.00366 14.5261 1.00366 14.25C1.00366 13.9739 1.22752 13.75 1.50366 13.75H9.54534C9.78047 12.4699 10.902 11.5 12.25 11.5C13.598 11.5 14.7195 12.4699 14.9547 13.75H18.5037C18.7798 13.75 19.0037 13.9739 19.0037 14.25C19.0037 14.5261 18.7798 14.75 18.5037 14.75H14.9547Z"
                                fill="black"></path>
                        </svg>
                        Фильтры
                    </span>
                    <span className="flex items-center md:gap-1 gap-12">
                        Популярные
                        <img className="w-5 md:w-6" src="/public/arrow_bottom.svg" alt="" />
                    </span>
                </p>
                <div className="product_content flex gap-4 flex-wrap justify-center">
                    {arr.map((item, i) => (
                        <ProductCard good={item} key={i} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SearchPage