import { Link } from "react-router-dom"
import Logo from "../../assets/logo_uzum.svg"

const FakeHeader = () => {
    return (
        <Link to="/">
            <div className="fake_header bg-white fixed z-10 top-0 w-full py-4">
                <div className="flex mx-auto items-center w-11/12 justify-between">

                    <img src={Logo} alt="" />
                    <div className="lg:flex items-center hidden gap-2">
                        <img className="w-5" src="/public/lock.svg" alt="" />
                        <span className="text-sm opacity-80">Соединение защищено</span>
                    </div>
                    <ul className="lg:flex hidden gap-10">
                        <li className="text-sm underline opacity-70">Правила возврата</li>
                        <li className="text-sm underline opacity-70">Служба поддержки</li>
                    </ul>
                    <p className="user_name opacity-50 hidden lg:block text-sm font-semibold"></p>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg" alt="icon-cabinet" className="ui-icon  cabinet-icon lg:hidden">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M19.3379 17.8756C20.6282 16.2662 21.4 14.2232 21.4 12C21.4 6.80852 17.1915 2.6 12 2.6C6.80852 2.6 2.6 6.80852 2.6 12C2.6 14.2232 3.37183 16.2662 4.66214 17.8756C6.58788 16.0916 9.1672 15 12 15C14.8328 15 17.4121 16.0916 19.3379 17.8756ZM18.2348 19.0348C16.5949 17.5226 14.4059 16.6 12 16.6C9.59408 16.6 7.40509 17.5226 5.76516 19.0348C7.42434 20.5064 9.60782 21.4 12 21.4C14.3922 21.4 16.5757 20.5064 18.2348 19.0348ZM12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM14.4 10V9C14.4 7.67452 13.3255 6.6 12 6.6C10.6745 6.6 9.6 7.67452 9.6 9V10C9.6 11.3255 10.6745 12.4 12 12.4C13.3255 12.4 14.4 11.3255 14.4 10ZM12 5C9.79086 5 8 6.79086 8 9V10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10V9C16 6.79086 14.2091 5 12 5Z"
                            fill="black"></path>
                    </svg>
                </div>
            </div>
        </Link>
    )
}

export default FakeHeader