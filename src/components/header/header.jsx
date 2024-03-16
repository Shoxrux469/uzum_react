import nothing from "../../assets/Без названия.svg";
import TopHeader from "./topHeader";
import MiddleHeader from "./middleHeader/middleHeader";
import BottomHeader from "./bottomHeader";
const Header = () => {
  return (
    <header>
      <div className="media_top_head lg:hidden w-11/12 mx-auto flex justify-between items-center">
        <div className=" flex">
          <img src={nothing} alt="" />
          <div className="ml-4">
            <p>Uzum Market</p>
            <p className="text-sm">Скачать приложение</p>
          </div>
        </div>
        <button className="bg-[#7000ff] text-[#fff] px-4 py-1 rounded-lg">
          Скачать
        </button>
      </div>
      <TopHeader />
      <MiddleHeader />
      <BottomHeader />
    </header>
  );
};

export default Header;
