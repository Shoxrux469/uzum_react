import React, { useContext } from "react";
import searcher_icon from "../../../assets/searcher_icon.svg";
import searchContext from "../../../modules/context/searchContext";
import { useNavigate } from "react-router-dom";
import SearchHint from "./searchHint";
import SearchPage from "../../../pages/searchPage/searchPage";
import GetGoods from "../../../hooks/getGoods";

const SearchComponent = () => {
    const { changeSearchText } = useContext(searchContext)
    const navigate = useNavigate();
    const { searchHintGoods } = GetGoods()

    const handleKeyUp = (e) => {
        changeSearchText(e.target.value)
        if (e.key === "Enter") {
            <SearchPage arr={searchHintGoods} />
            navigate("/searcher", { state: { arr: searchHintGoods } })
        }
    }
    return (
        <div
            className="searcher_div lg:bg-white relative flex lg:justify-between bg-[#edeff2] pl-1 items-center rounded-lg lg:border w-full lg:rounded-md"
        >
            <img className="ml-4 my-1 lg:hidden" src={searcher_icon} alt="" />
            <input
                type="text"
                className="searcher_inp outline-none w-full lg:bg-white lg:w-96 rounded-lg lg:rounded-none bg-[#edeff2] text-sm lg:text-base border-none lg:h-8 text-gray-500"
                placeholder="Искать товары и категории"
                onKeyUp={handleKeyUp}
            />
            <img
                className="hidden lg:block bg-gray-100 px-6 py-2 rounded-r"
                src={searcher_icon}
                alt=""
            />
            {searchHintGoods.length !== 0 ? (
                <div className="searcher_modal">
                    <SearchHint />
                </div>
            ) : null}
        </div>
    );
};
export default SearchComponent;