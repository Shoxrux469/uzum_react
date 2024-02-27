import arrow_bottom from "../../assets/arrow_bottom.svg";
import "../../index.scss"
const BottomHeader = () => {
  return (
    <ol className="header_bottom mb-3 hidden lg:flex gap-[14px] w-12/12 mx-auto justify-center">
      <li className="text-[#595b66] h-[28px] cursor-pointer border-black">
        Электроника
      </li>
      <li className="text-[#595b66] h-[28px] cursor-pointer border-black">
        Бытовая техника
      </li>
      <li className="text-[#595b66] h-[28px] cursor-pointer border-black">
        Одежда
      </li>
      <li className="text-[#595b66] h-[28px] cursor-pointer border-black">
        Обувь
      </li>
      <li className="text-[#595b66] h-[28px] cursor-pointer border-black">
        Аксессуары
      </li>
      <li className="text-[#595b66] h-[28px] cursor-pointer border-black">
        Красота
      </li>
      <li className="text-[#595b66] h-[28px] cursor-pointer border-black">
        Здоровье
      </li>
      <li className="text-[#595b66] h-[28px] cursor-pointer border-black">
        Товары для дома
      </li>
      <li className="text-[#595b66] h-[28px] cursor-pointer border-black">
        Строительство и ремонт
      </li>
      <li className="text-[#595b66] h-[28px] cursor-pointer border-black hidden xl:block">
        Автотовары
      </li>
      <li className="text-[#595b66] h-[28px] cursor-pointer border-black hidden xl:block">
        Детские товары
      </li>
      <li className="text-[#595b66] h-[28px] cursor-pointer border-black flex items-center gap-1">
        Еще <img src={arrow_bottom} alt="" />
      </li>
    </ol>
  );
};

export default BottomHeader