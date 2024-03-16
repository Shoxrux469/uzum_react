import mastercard from "../../../assets/mastercard.svg"
import humo from "../../../assets/humo.svg"
import visa from "../../../assets/visa.svg"
import uzcard from "../../../assets/uzcard.svg"

const Payment = () => {
    return (
        <div className="border rounded-lg px-6 py-3">
            <h2 className="text-2xl mb-6 font-semibold">Способ оплаты</h2>
            <div className="bg-[#f2f4f7] w-full md:w-7/12 lg:w-full rounded-xl px-5 py-3">
                <div className="flex items-center gap-2">
                    <input className="rounded-full w-5 h-5" type="radio" name="payment" id="" />
                    <p>Картой онлайн</p>
                </div>
                <span className="text-xs opacity-60 ml-7">UZCARD, HUMO, Visa, MasterCard</span>
                <nav className="flex gap-2 mt-6">
                    <img src={mastercard} alt="" />
                    <img src={uzcard} alt="" />
                    <img src={humo} alt="" />
                    <img src={visa} alt="" />
                </nav>
            </div>
            <div className="mt-4 bg-[#f2f4f7] w-full md:w-7/12 lg:w-full rounded-xl px-5 py-3">
                <div className="flex items-center gap-2">
                    <input className="rounded-full w-5 h-5" type="radio" name="payment" id="" />
                    <p className="mb-3">Рассрочка Uzum Nasiya</p>
                </div>
                <ul className="flex flex-col gap-1 items-end">
                    <li
                        className="bg-white w-11/12 py-2 text-sm sm:px-4 px-2 sm:text-base flex justify-between items-center rounded-xl">
                        <p>3 месяца</p>
                        <p>2 100 746 сум/мес</p>
                    </li>
                    <li
                        className="bg-white py-2 w-11/12 sm:px-4 px-2 text-sm sm:text-base flex justify-between items-center rounded-xl">
                        <p>6 месяцев</p>
                        <p>1 219 183 сум/мес</p>
                    </li>
                    <li
                        className="bg-white py-2 w-11/12 sm:px-4 px-2 text-sm sm:text-base flex justify-between items-center rounded-xl">
                        <p>12 месяцев</p>
                        <p>684 618 сум/мес</p>
                    </li>
                </ul>

            </div>
            <div className="mt-4 bg-[#f2f4f7] w-full md:w-7/12 lg:w-full rounded-xl px-5 py-3">
                <div className="flex items-center gap-2">
                    <input className="rounded-full w-5 h-5" type="radio" name="payment" id="" />
                    <p className="font-semibold">Наличными или картой при получении</p>
                </div>
                <p className="w-full flex pl-6 justify-end sm:justify-start">
                    <span className="opacity-60 text-xs">
                        Оплата в пункте выдачи или курьеру при получении
                        заказа
                    </span>
                </p>
            </div>
        </div>
    )
}
export default Payment