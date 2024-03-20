import GetGoods from "../../hooks/getGoods"
import Aside from "./aside"
import FakeHeader from "./fakeHeader"
import OrderProdsCard from "./orderProcess/orderProdsCard"
import PersonalInfo from "./orderProcess/personalInfo"
import GetProd from "./orderProcess/getProd"
import Payment from "./orderProcess/payment"
import arrow_bottom from "../../assets/arrow_bottom.svg"
import { useState } from "react"

const OrderPage = () => {
    const { res } = GetGoods()
    const [toggleCard, settoggleCard] = useState(false);

    const handleToggle = () => {
        settoggleCard(!toggleCard)
    }

    return (
        <section>
            <FakeHeader />

            <div className="container mt-24 w-full lg:w-11/12 mx-auto">
                <h1 className="text-2xl font-bold ml-2 sm:ml-0">Оформление заказа</h1>
                <div className="flex flex-col lg:flex-row gap-5">
                    <div className="left flex flex-col gap-4 mt-8 w-full lg:w-[73%]">
                        <GetProd />
                        <PersonalInfo />
                        <Payment />
                        <div
                            className="border rounded-lg px-6 py-3">
                            <div
                                onClick={(handleToggle)}
                                className="switcher flex items-center justify-between">
                                <div className="text-2xl w-1/2 pb-4">Товары в заказе</div>
                                <img className={`arrow_bottom w-7 transform ${toggleCard ? "rotate-180" : ""
                                    }  transition-transform duration-300`} src={arrow_bottom} alt="" />
                            </div>
                            <div className={`bag_prods flex flex-col gap-4 ${toggleCard ? "expanded" : "collapsed"
                                }`}>
                                {res.map((item, i) => (
                                    <OrderProdsCard key={i} good={item} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <Aside res={res} />
                </div>
            </div>
        </section>
    )
}

export default OrderPage