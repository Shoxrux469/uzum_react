import { Link } from "react-router-dom";
import BagProdPrices from "../../hooks/bagProdPrices";
import { useEffect, useState } from "react";


const BagAside = ({ res }) => {
    const [time, setTime] = useState("Hello");
    const { getPrice, getRealPrice } = BagProdPrices();

    useEffect(() => {
        const currentDate = new Date();

        const tomorrowDate = new Date();
        tomorrowDate.setDate(currentDate.getDate() + 1);
        setTime(tomorrowDate.toDateString());
    }, []);

    const getPriceArr = res && res.map((data) => {
        const result = getPrice(data);
        return result;
    });

    const getRealPriceArr = res && res.map((data) => {
        const result = getRealPrice(data);
        return result;
    });

    const totalSum = getPriceArr && getPriceArr.reduce((total, sum) => total + sum, 0);

    const RealtotalSum = getRealPriceArr && getRealPriceArr.reduce((total, sum) => total + sum, 0);

    const saved_money = totalSum - RealtotalSum;

    return (
        <div className="checkout lg:w-full sticky h-full top-3 right-0 xl:w-[25%] xl:flex flex-col justify-center gap-6">
            <div className="border  rounded-lg px-4 py-3">
                <h2 className="text-lg font-semibold opacity-90">
                    Ваш заказ
                </h2>
                <ul className="flex justify-between items-center mt-5">
                    <li className="opacity-90">
                        Товары
                        <span className="prod_number">({res && res.length}):</span>
                    </li>
                    <li className="general_sum">
                        {totalSum && totalSum
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " руб"}
                    </li>
                </ul>
                <div className="delivery_date my-3 border border-[#7000ff] px-2 py-[1px] text-[#7000ff] text-center text-sm rounded">
                    Доставка {time} (Завтра)
                </div>
                <div className="flex justify-between items-start">
                    <p className="opacity-90">Итого</p>
                    <div className="flex flex-col items-end">
                        <p className="real_sum text-xl font-semibold">
                            {RealtotalSum && RealtotalSum.toString().replace(
                                /\B(?=(\d{3})+(?!\d))/g,
                                " "
                            )}{" "}
                            руб
                        </p>
                        <p className="trash_sum text-[#009c38] text-sm">
                            Вы экономите:{" "}
                            <span className="saved_money">
                                {saved_money && saved_money
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                                руб
                            </span>
                        </p>
                    </div>
                </div>
                <Link to="/orderPage">
                    <button className="checkout_btn hidden bg-[#7000ff] text-white xl:flex w-full text-lg mt-4 mb-2 font-semibold py-2 rounded-xl justify-center">
                        Перейти к оформлению
                    </button>
                </Link>
            </div>
            <div className="bg-[#f2f4f7] px-4 py-3 md:hidden lg:block rounded-xl">
                <div className="flex">
                    <p className="font-semibold">
                        Бесплатно доставим в пункт выдачи или курьером
                    </p>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ui-icon "
                    >
                        <path
                            d="M6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0ZM6 8.5C5.58579 8.5 5.25 8.83579 5.25 9.25C5.25 9.66421 5.58579 10 6 10C6.41421 10 6.75 9.66421 6.75 9.25C6.75 8.83579 6.41421 8.5 6 8.5ZM6 2.5C4.89543 2.5 4 3.39543 4 4.5C4 4.77614 4.22386 5 4.5 5C4.77614 5 5 4.77614 5 4.5C5 3.94772 5.44772 3.5 6 3.5C6.55228 3.5 7 3.94772 7 4.5C7 4.87058 6.91743 5.07932 6.63398 5.39755L6.51804 5.52255L6.25395 5.79209C5.71178 6.36031 5.5 6.76947 5.5 7.5C5.5 7.77614 5.72386 8 6 8C6.27614 8 6.5 7.77614 6.5 7.5C6.5 7.12942 6.58257 6.92068 6.86602 6.60245L6.98196 6.47745L7.24605 6.20791C7.78822 5.63969 8 5.23053 8 4.5C8 3.39543 7.10457 2.5 6 2.5Z"
                            fill="#C2C4CC"
                        ></path>
                    </svg>
                </div>
                <div className="flex gap-1 mt-3">
                    <div className="w-[28%] flex flex-col items-end gap-2">
                        <div className="green_line bg-[#00ad3a] h-1 rounded w-full"></div>
                        <p className="flex items-center text-[#00ad3a] gap-1 text-xs">
                            20 000 сум
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 12 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="ui-icon "
                            >
                                <path
                                    d="M6 0C2.97097 0 0.5 2.414 0.5 5.41071C0.5 10 5.09914 14.0012 6 14.0012C6.90086 14.0012 11.5 10.0021 11.5 5.41071C11.5 2.414 9.02903 0 6 0ZM6 7.5C4.89543 7.5 4 6.60457 4 5.5C4 4.39543 4.89543 3.5 6 3.5C7.10457 3.5 8 4.39543 8 5.5C8 6.60457 7.10457 7.5 6 7.5Z"
                                    fill="#00ad3a"
                                ></path>
                            </svg>
                        </p>
                    </div>
                    <div className="w-[72%] flex flex-col items-end gap-2">
                        <div className="green_line bg-[#00ad3a] h-1 rounded w-full"></div>
                        <p className="flex items-center text-[#00ad3a] gap-1 text-xs">
                            1 000 000 сум
                            <svg
                                width="14"
                                height="14"
                                viewBox="0 0 14 14"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="ui-icon "
                            >
                                <path
                                    d="M6.67217 0.623762C6.86034 0.46005 7.14038 0.460048 7.32855 0.623758L13.83 6.28016C14.0384 6.46141 14.0603 6.77723 13.8791 6.98556C13.6978 7.19389 13.382 7.21585 13.1737 7.0346L12.3348 6.30476V12.1311C12.3348 12.8868 11.7221 13.4995 10.9664 13.4995H9.00008L9.00094 7.85718C9.00094 7.58104 8.77708 7.35718 8.50094 7.35718H5.50029C5.22414 7.35718 5.00029 7.58104 5.00029 7.85718L4.99942 13.4995H3.03444C2.27869 13.4995 1.66602 12.8868 1.66602 12.1311V6.3048L0.827222 7.03459C0.618892 7.21585 0.303071 7.1939 0.121816 6.98557C-0.0594384 6.77724 -0.0374897 6.46142 0.17084 6.28016L6.67217 0.623762Z"
                                    fill="#00ad3a"
                                ></path>
                            </svg>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BagAside