import React, { useMemo } from "react";

const GetProd = () => {

    const deliveryOptions = useMemo(
        () => [
            {
                label: "Пункт выдачи Uzum",
                description: [
                    "Можно забрать 25 декабря (Завтра),",
                    <span key="free" className="text-[#009c38]">
                        бесплатно
                    </span>,
                ],
            },
            {
                label: "Курьером до двери",
                description: ["Доставим завтра, ", <span key="free">бесплатно</span>],
            },
        ],
        []
    );

    return (
        <div className="border px-6 py-3 rounded-lg">
            <h2 className="text-xl mb-6">Способ получения и адрес доставки:</h2>

            <div className="flex flex-col gap-2">
                <p>Город доставки</p>
                <button className="border rounded-lg flex justify-between items-center w-full lg:w-1/2 py-2 px-4">
                    <p className="text-sm">Самарканд</p>
                    <img src="/public/arrow_down.svg" alt="" />
                </button>
            </div>

            <div className="flex mt-6 flex-col gap-4">
                <p>Способ получения</p>
                {deliveryOptions.map((option, index) => (
                    <div key={index} className="bg-[#f2f4f7] rounded-lg px-5 py-4 w-full lg:w-fit">
                        <div className="flex items-center gap-3 font-semibold">
                            <input className="rounded-full w-5 h-5 custom-checkbox" type="radio" name="delivery" />
                            <p>{option.label}</p>
                        </div>
                        <p className="text-sm ml-8 my-2 opacity-80 font-semibold">{option.description}</p>
                    </div>
                ))}
            </div>

            <div className="mt-10">
                <p>Выберите пункт выдачи</p>
                <div className="ml-7 mt-6 flex gap-3 items-start">
                    <input className="rounded-full mt-1 w-5 h-5" type="checkbox" name="" id="" />
                    <ul className="flex flex-col">
                        <li className="font-semibold">г. Ташкент, Чиланзарский район, квартал-7, д 45б (Катартал)</li>
                        <li className="text-sm">10:00 – 20:00, без выходных</li>
                        <li className="text-sm font-semibold">
                            Можно забрать 25 декабря (Завтра) самостоятельно.
                        </li>
                        <li className="text-sm">Заказ будет ожидать Вас на пункте выдачи в течение 5 дней</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default GetProd;
