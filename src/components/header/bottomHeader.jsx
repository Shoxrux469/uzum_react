import arrow_bottom from "../../assets/arrow_bottom.svg";
import "../../index.scss"
import "./index.scss"
const BottomHeader = () => {
  const Categories = [
    { name: "Электроника" },
    { name: "Бытовая техника" },
    { name: "Одежда" },
    { name: "Обувь" },
    { name: "Аксессуары" },
    { name: "Красота" },
    { name: "Здоровье" },
    { name: "Товары для дома" },
    { name: "Строительство и ремонт" },
  ]

  return (
    <ul className="header_bottom mb-3 hidden lg:flex gap-[14px] w-12/12 mx-auto justify-center">
      {Categories.map((item, i) => (
        <li className="categories_style" key={i}>{item.name}</li>
      ))}
      <li className="categories_style hidden xl:block">
        Автотовары
      </li>
      <li className="categories_style hidden xl:block">
        Детские товары
      </li>
      <li className="categories_style flex items-center gap-1">
        Еще <img src={arrow_bottom} alt="" />
      </li>
    </ul>
  );
};

export default BottomHeader