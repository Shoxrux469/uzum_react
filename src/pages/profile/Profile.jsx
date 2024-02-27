import MyOrders from "./myOrders";
import ProfileInfo from "./ProfileInfo";
import user from "../../modules/user";
import { useState } from "react";
import "./index.scss";
const Profile = () => {
  const [isShown, setIsShown] = useState(true);

  return (
    <>
      <section className="w-11/12 mx-auto">
        <h2 className="mb-3 text-2xl font-semibold text-[#1f2026]">Шохрух</h2>
        <div className="flex mt-5 mb-10 relative">
          <aside className="w-3/12 h-full hidden lg:block sticky top-3">
            <ul className="flex flex-col gap-3">
              <li
                onClick={() => setIsShown(true)}
                className={isShown ? "li_btns_active w-fit" : "li_btns w-fit"}
              >
                Мои заказы
              </li>
              <li
                onClick={() => setIsShown(false)}
                className={isShown ? "li_btns w-fit" : "li_btns_active w-fit"}
              >
                Настройки
              </li>
            </ul>
          </aside>
          <div className="flex flex-col w-full lg:w-9/12 h-fit">
            <MyOrders status={isShown} />
            <ProfileInfo status={isShown} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
