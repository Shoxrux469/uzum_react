import { user } from "../../../modules/user"
import "../index.scss"
const PersonalInfo = () => {

    return (
        <div className="flex border flex-col gap-6 rounded-lg px-6 py-3">
            <h2 className="text-xl">Получатель заказа:</h2>
            <ul className="profile_info_ul flex flex-col lg:flex-row gap-4">
                <li>
                    <laber className="mb-2">Фамилия *</laber>
                    <input defaultValue={user.surname} className="profile_inp surname w-full lg:w-fit rounded-xl" type="text" name="" id="" />
                </li>
                <li>
                    <label className="mb-2">Имя *</label>
                    <input defaultValue={user.name} className="profile_inp name w-full lg:w-fit rounded-xl" type="text" />
                </li>
            </ul>

            <p className="opacity-70 w-dull sm:w-9/12">
                Мы пришлем уведомление о статусе заказа на указанный вами телефон.
                Курьер свяжется с вами по телефону для уточнения времени доставки.
            </p>

            <div>
                <p className="mb-2">Номер телефона *</p>
                <input defaultValue={("+998 " + user.phone)} className="profile_inp phone_num w-full lg:w-fit rounded-xl" type="text" />
            </div>
            <div className="flex gap-2">
                <input className="w-5 mt-1 h-5 border-2 rounded-[2px] border-gray-400" type="checkbox" name=""
                    id="" />
                <p className="w-full lg:w-9/12">
                    Подписаться на наши новости и акции. Вы будете одними из первых узнавать о новых
                    скидках, акциях и распродажах.
                </p>
            </div>

        </div>
    )
}
export default PersonalInfo