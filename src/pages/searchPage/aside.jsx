import { useLocation } from "react-router-dom";


const Aside = () => {
    const location = useLocation();
    const arr = location.state?.arr || [];

    const calculateSalePrice = (price, salePercentage) => {
        return price - Math.floor((price * salePercentage) / 100);
    };


    const nums = arr.map((item) => {
        const salePrice = calculateSalePrice(item.price, item.salePercentage);
        return salePrice;
    })

    let min_num = Math.min(...nums);
    let max_num = Math.max(...nums);

    const colors = [{ color: "Коричненвый" }, { color: "Красный" }, { color: "Зеленый" }, { color: "Хаки" }, { color: "Фиолетовый" }, { color: "Розовый" },]

    const brands = [
        { brand: "Latt liv" },
        { brand: "SSMART" },
        { brand: "1MORE" },
        { brand: "7saber" },
        { brand: "HAGIBIS" },
        { brand: "NOVEY" },
    ]
    return (
        <aside className="hidden md:block w-[22%]">
            <div className="inner_aside w-11/12 h-fit sticky top-[12px] bottom-[12px]">
                <p className="text-sm mb-8">Главная <span className="opacity-80">/ Все категории</span></p>
                <div>
                    <h2 className="text-lg opacity-90">Категории</h2>
                    <p className="prod_title mt-4 mb-10"></p>
                    <div>
                        <p className="font-semibold opacity-95 mb-4">Цена</p>
                        <div className="flex gap-2">
                            <button
                                className="border text-sm opacity-80 flex justify-start gap-1 items-center pl-2 h-10 w-1/2">
                                от <span className="min_price">{
                                    min_num
                                        .toString()
                                        .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                                }</span>
                            </button>
                            <button
                                className="border text-sm opacity-80 flex justify-start gap-1 items-center pl-2 h-10 w-1/2">
                                до <span className="max_price">
                                    {max_num
                                        .toString()
                                        .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                                    }</span>
                            </button>
                        </div>
                        <div className="mt-4">
                            <div className="w-3/3 h-[2px] bg-[#7000ff] relative">
                                <div
                                    className="w-3 h-3 border bg-white border-[#7000ff] rounded-full absolute left-[-2px] top-1/2 translate-y-[-50%]">
                                </div>
                                <div
                                    className="w-3 h-3 border bg-white border-[#7000ff] rounded-full absolute right-[-2px] top-1/2 translate-y-[-50%]">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-8">
                    <p className="font-semibold text-lg mb-4 opacity-80 my-10">Цвет</p>
                    <ul className="flex flex-col gap-3">
                        {colors.map((item, i) => (
                            <li key={i} className="flex items-center text-sm">
                                <img className="w-6 rounded-full mr-3" src="/public/brown.png" alt="" />
                                {item.color}
                            </li>
                        ))}
                        <p className="opacity-50 text-sm underline decoration-dashed">Еще 13</p>
                    </ul>
                </div>
                <div>
                    <p className="font-semibold text-lg mb-3 opacity-80 mt-2">Бренд</p>
                    <ul className="flex flex-col gap-3">
                        {brands.map((item, i) => (
                            <li key={i} className="flex items-center text-sm opacity-95">
                                <input className="rounded mr-3" type="checkbox" />
                                {item.brand}
                            </li>
                        ))}
                        <p className="opacity-50 text-sm underline decoration-dashed mt-2">Ещё 418</p>
                    </ul>
                </div>
                <button className="mt-12 text-lg opacity-95 border py-2 w-full rounded-xl">Очистить все</button>
            </div>
        </aside>
    )
}
export default Aside