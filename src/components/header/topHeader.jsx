import compass_icon from "../../assets/compass-icon.svg";
import ru_lang_icon from "../../assets/ru_lang_icon.svg";

const TopHeader = () => {
  return (
    <div className="top_header lg:flex py-[6px] hidden bg-[#F4F5F5] w-full">
      <div className="top_header justify-between items-center w-11/12 flex mx-auto">
        <div className="flex items-center">
          <img src={compass_icon} alt="" />
          <p className="text-[#141415] cursor-pointer">
            Город:<span className="font-medium">Ташкент</span>
          </p>
          <p className="ml-5 font-medium cursor-pointer">Пункты выдачи</p>
        </div>
        <div className="text-[#62656A] hidden xl:block">
          Доставим ваш заказ бесплатно — всего за 1 день!
        </div>
        <ul className="flex gap-[15px] items-center">
          <li className="text-[#62656A] hover:text-black text-sm cursor-pointer">
            Вопрос-ответ
          </li>
          <li className="text-[#62656A] hover:text-black text-sm cursor-pointer">
            Мои заказы
          </li>
          <li className="flex text-[#62656A] gap-1 cursor-pointer">
            <img src={ru_lang_icon} alt="" />
            Русский
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopHeader
