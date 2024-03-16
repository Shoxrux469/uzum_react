import GetGoods from "../../../hooks/getGoods"


const OrderProdsCard = ({ good }) => {
    const { bagGoods } = GetGoods()

    const num = bagGoods.find(item => item.prod_id === good.id)

    const realPrice =
        (
            (good.price - Math.floor((good.price * good.salePercentage) / 100)) *
            num.num
        )
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " руб";

    return (
        <div className="flex border-t pt-3 gap-4">
            <img src={good.media[0]} className="w-24 h-24" alt="" />
            <div className="flex flex-col w-full justify-between">
                <h2 className="text-lg">{good.title}</h2>
                <div className="flex justify-between items-start w-full">
                    <ul>
                        <li className="flex gap-1">
                            <p className="text-gray-400">Продавец: </p>
                            UZUM
                        </li>
                        <li className="flex gap-1">
                            <p className="text-gray-400">Тип: </p>
                            {good.type}
                        </li>
                    </ul>
                    <div>
                        <span className="text-gray-400">Количество: </span>
                        {num.num} шт
                    </div>
                    <span className="text-xl text-black/90 font-semibold">
                        {realPrice}
                    </span>
                </div>
            </div>
        </div>
    )
}
export default OrderProdsCard