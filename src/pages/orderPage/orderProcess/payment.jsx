import React, { useMemo } from "react";
import mastercard from "../../../assets/mastercard.svg";
import humo from "../../../assets/humo.svg";
import visa from "../../../assets/visa.svg";
import uzcard from "../../../assets/uzcard.svg";

const Payment = () => {
    const paymentMethods = useMemo(
        () => [
            {
                name: "Картой онлайн",
                icons: [mastercard, uzcard, humo, visa],
            },
            {
                name: "Рассрочка Uzum Nasiya",
                options: [
                    { months: "3 месяца", amount: "2 100 746 сум/мес" },
                    { months: "6 месяцев", amount: "1 219 183 сум/мес" },
                    { months: "12 месяцев", amount: "684 618 сум/мес" },
                ],
            },
            {
                name: "Наличными или картой при получении",
                description: "Оплата в пункте выдачи или курьеру при получении заказа",
            },
        ],
        []
    );

    return (
        <div className="border rounded-lg px-6 py-3">
            <h2 className="text-2xl mb-6 font-semibold">Способ оплаты</h2>
            {paymentMethods.map((method, index) => (
                <div key={index} className="mt-4 bg-[#f2f4f7] w-full md:w-7/12 lg:w-full rounded-xl px-5 py-3">
                    <div className="flex items-center gap-2">
                        <input className="rounded-full w-5 h-5" type="radio" name="payment" id={`payment_${index}`} />
                        <p className={method.options ? "mb-3" : "font-semibold"}>{method.name}</p>
                    </div>
                    {method.description && (
                        <p className="w-full flex pl-6 justify-end sm:justify-start">
                            <span className="opacity-60 text-xs">{method.description}</span>
                        </p>
                    )}
                    {method.icons && (
                        <nav className="flex gap-2 mt-6">
                            {method.icons.map((icon, i) => (
                                <img key={i} src={icon} alt="" />
                            ))}
                        </nav>
                    )}
                    {method.options && (
                        <ul className="flex flex-col gap-1 items-end">
                            {method.options.map((option, i) => (
                                <li key={i} className="bg-white w-11/12 py-2 text-sm sm:px-4 px-2 sm:text-base flex justify-between items-center rounded-xl">
                                    <p>{option.months}</p>
                                    <p>{option.amount}</p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Payment;