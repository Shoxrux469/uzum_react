import { Link } from "react-router-dom";
import BagProdPrices from "../../hooks/bagProdPrices";
import { useMemo } from "react";

const Aside = ({ res }) => {
    const { getRealPrice } = BagProdPrices();

    const getRealPriceArr = useMemo(() => {
        if (!res) return [];
        return res.map((data) => getRealPrice(data));
    }, [res, getRealPrice]);

    const RealtotalSum = useMemo(() => {
        if (!getRealPriceArr) return 0;
        return getRealPriceArr.reduce((total, sum) => total + sum, 0);
    }, [getRealPriceArr]);

    if (!res) return null;

    return (
        <aside className="right lg:sticky top-20 w-full lg:w-[27%] h-fit mt-8 border px-5 py-3 flex flex-col gap-4 rounded-lg">
            <div className="flex justify-between items-center">
                <h2 className="text-xl">Ваш заказ</h2>
                <Link to={"/bagPage"} className="go_to_bag cursor-pointer opacity-60 underline">Перейти в корзину</Link>
            </div>
            <ul>
                <li className="flex justify-between text-sm items-center">
                    <p className="opacity-80">Товары <span className="prods_num text-sm">({res.length})</span></p>
                    <p className="prod_sum opacity-80">
                        {RealtotalSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} руб
                    </p>
                </li>
                <li className="flex opacity-80 justify-between items-center text-sm">
                    <p>Доставка:</p>
                    <p>бесплатно</p>
                </li>
            </ul>
            <div className="flex justify-between items-center">
                <p className="opacity-80">Итого</p>
                <h2 className="prod_sum text-xl font-semibold">
                    {RealtotalSum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} руб
                </h2>
            </div>
            <button className="bg-[#f2f4f7] flex items-center pl-5 gap-2 rounded-xl py-3">
                <img className="w-6 opacity-70" src="/public/arrow_bottom.svg" alt="" />
                <p className="opacity-70">Есть промокод?</p>
            </button>
            <button className="rounded-xl py-2 bg-[#7000ff] text-lg text-white">
                Оформить заказ
            </button>
            <span className='text-sm opacity-60 leading-5'>
                Размещая заказ, вы соглашаетесь на обработку персональных
                данных в соответствии с
                <span className="underline">Соглашением о конфиденциальности</span>
                и
                <span className="underline">Пользовательским соглашением</span> Uzum.
            </span>
        </aside>
    );
};

export default Aside;
