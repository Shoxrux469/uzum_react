import React from "react";
import arrowBottom from "../assets/arrow_bottom.svg";
import apple from "../assets/apple.svg";
import googlePlay from "../assets/google_play.svg";
import insta from "../assets/insta.svg";
import telegram from "../assets/telegram.svg";
import youtube from "../assets/youtube.svg";
import facebook from "../assets/facebook.svg";

const Footer = () => {
  const renderFooterItem = (title, links) => (
    <ul className="flex_daddy flex flex-col items-center lg:items-start h-[20px] mb-4 lg:gap-4">
      <li className="font-semibold flex items-center gap-3 footer_ul">
        {title} <img className="w-6 lg:hidden" src={arrowBottom} alt="" />
      </li>
      {links.map((link, index) => (
        <li key={index} className="hiddens text-[#4D4E59] lg:opacity-100 hidden lg:block">
          <a href={link.url}>{link.label}</a>
        </li>
      ))}
    </ul>
  );

  return (
    <footer className="mt-20">
      <div className="footer my-24 flex justify-between flex-col lg:flex-row items-center lg:items-start mx-auto w-11/12">
        {renderFooterItem("О нас", [
          { label: "Пункты выдачи", url: "#" },
          { label: "Вакансии", url: "#" }
        ])}
        <div className="line border-[1px] lg:hidden my-4 border-gray-200 w-full"></div>
        {renderFooterItem("Пользователям", [
          { label: "Связаться с нами", url: "#" },
          { label: "Вопрос - Ответ", url: "#" }
        ])}
        <div className="line border-[1px] my-4 lg:hidden border-gray-200 w-full"></div>
        {renderFooterItem("Для предпринимателей", [
          { label: "Продавайте на Uzuma", url: "#" },
          { label: "Вход для продавцов", url: "#" }
        ])}
        <ul className="flex flex-col gap-8 mb-4">
          <li className="flex flex-col items-center lg:items-start gap-4">
            <p className="font-semibold flex gap-3 items-center">
              Скачать приложение
            </p>
            <div className="flex gap-3">
              <a className="flex items-center gap-1" href>
                {" "}
                <img src={apple} alt="" />
                <span>AppStore</span>
              </a>
              <a className="flex items-center gap-1" href>
                {" "}
                <img src={googlePlay} alt="" />
                <span>Google Play</span>
              </a>
            </div>
          </li>
          <li className="flex flex-col lg:items-start items-center gap-4">
            <p className="font-semibold">Uzum в соцсетях</p>
            <nav className="flex gap-3 w-28 lg:w-auto flex-wrap">
              <a href><img className="w-12 lg:w-auto" src={insta} alt="" /></a>
              <a href><img className="w-12 lg:w-auto" src={telegram} alt="" /></a>
              <a href><img className="w-12 lg:w-auto" src={youtube} alt="" /></a>
              <a href><img className="w-12 lg:w-auto" src={facebook} alt="" /></a>
            </nav>
          </li>
        </ul>
      </div>
      <div className="px-11 flex flex-col mb-20 md:mb-0 text-center gap-4 lg:flex-row pb-4 justify-between items-center">
        <p className="font-semibold text-[15px]">
          Соглашение о конфиденциональности{" "}
          <span className="ml-4">Пользовательское соглашение</span>
        </p>
        <p className="text-xs opacity-50">
          «2023© ООО «UZUM MARKET». ИНН 309376127. Все права защищены»
        </p>
      </div>
    </footer>
  );
};

export default Footer;
