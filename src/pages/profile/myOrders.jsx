import { useState } from "react";
import "./index.scss";
const MyOrders = ({ status }) => {
  const [isShown, setIsShown] = useState(false);
  const [activeButton, setActiveButton] = useState(3);

  const btns = [
    { number: 1, text: "Все заказы" },
    { number: 2, text: "Неоплачнные" },
    { number: 3, text: "Активные" },
  ];

  const prod_card = [
    {
      id: "ID заказа 13093481",
      status_span: "Статус",
      status: "Доставлен в пункт выдачи",
      update_time: "Обновлен 12 декабря 2023 г. в 11:38",
      order_code: "Код получения заказа:",
      code: "8686",
      order_li: [
        {
          span: "Дата заказа:",
          p: "понедельник, 11 декабря 2023 г. в 19:15"
        },
        {
          span: "Дата доставки:",
          p: "вторник, 12 декабря"
        },
        {
          span: "Пункт выдачи:",
          p: "г. Ташкент, Сергелийский район, улица Мирзы Турсунзаде, дом 42А"
        },
        {
          span: "Часы работы:",
          p: "10:00-20:00"
        },
        {
          span: "Сумма заказа:",
          p: "149 000 сум",
        }
      ],
      check: "Электронный чек",
      prod_num: "1 товар"
    },
    {
      id: "ID заказа 13093481",
      status_span: "Статус",
      status: "Доставлен в пункт выдачи",
      update_time: "Обновлен 12 декабря 2023 г. в 11:38",
      order_code: "Код получения заказа:",
      code: "8686",
      order_li: [
        {
          span: "Дата заказа:",
          p: "понедельник, 11 декабря 2023 г. в 19:15"
        },
        {
          span: "Дата доставки:",
          p: "вторник, 12 декабря"
        },
        {
          span: "Пункт выдачи:",
          p: "г. Ташкент, Сергелийский район, улица Мирзы Турсунзаде, дом 42А"
        },
        {
          span: "Часы работы:",
          p: "10:00-20:00"
        },
        {
          span: "Сумма заказа:",
          p: "149 000 сум",
        }
      ],
      check: "Электронный чек",
      prod_num: "1 товар"
    }
  ]

  const handleButtonClick = (buttonNumber) => {
    setActiveButton(buttonNumber);
    setIsShown(buttonNumber === 1 ? true : false);
  };

  return (
    <>
      {status && (
        <div
          className="my_orders flex flex-col justify-center"
        >
          <div className="btns flex justify-center sm:justify-start mb-5">
            {btns.map(({ number, text }) => (
              <button
                key={number}
                onClick={() => handleButtonClick(number)}
                className={
                  activeButton === number ? "btns_style bg-gray-300" : "btns_style"
                }
              >
                {text}
              </button>
            ))}
          </div>
          <div
            style={isShown ? { display: "none" } : { display: "flex" }}
            className="active_orders py-12 flex flex-col items-center"
          >
            <h1 className="text-[rgba(54,54,64,.35)] mb-4 text-3xl font-bold">
              Здесь пусто :(
            </h1>
            <p className="text-lg">У вас отсутствуют активные заказы!</p>
            <p className="text-lg text-center">
              Воспользуйтесь поиском, чтобы найти всё что нужно.
            </p>
            <button className="start_shopping bg-[#7000ff] padding text-[#fff] rounded-xl font-semibold mt-4 text-[18px] h-[45px] px-4">
              Начать покупки
            </button>
            <div className="line w-11/12 h-[1px] bg-gray-200 mt-4"></div>
            <a
              href
              className="start_shopping mt-4 text-lg underline text-[#1f2026]"
            >
              Вернуться на главную
            </a>
          </div>
          <div
            style={!isShown ? { display: "none" } : { display: "flex" }}
            className="all_orders flex flex-col gap-5"
          >
            {prod_card.map((item, i) => (
              <div className="order_card border-2 border-b-[3px]">
                <h2 className="text-lg opacity-80 font-semibold border-b px-6 py-[10px]">
                  {item.id}
                </h2>
                <ul className="px-6 py-5">
                  <li className="flex mb-[6px]">
                    <span className="w-36 text-[#595b66] text-sm font-semibold">
                      {item.status_span}
                    </span>
                    <p>
                      <span className="bg-[#e6e8ed] opacity-80 py-[5px] mr-3 px-[10px] rounded">
                        {item.status}
                      </span>{" "}
                      <span className="opacity-50">
                        {item.update_time}
                      </span>
                    </p>
                  </li>
                  <li className="flex mb-[6px]">
                    <span className="w-36 text-[#595b66] text-sm font-semibold">
                      {item.order_code}
                    </span>
                    <p className="bg-[#e6e8ed] opacity-80 rounded px-2 flex justify-center items-center">
                      {item.code}
                    </p>
                  </li>
                  {item.order_li.map((item, i) => (
                    <li key={i} className="flex mb-[6px]">
                      <span className="w-36 text-[#595b66] text-sm font-semibold">
                        {item.span}
                      </span>
                      <p>{item.p}</p>
                    </li>
                  ))}
                  <a className="text-[#595b66] underline" href>
                    {item.check}
                  </a>
                </ul>
                <div className="flex justify-between px-6 py-2 border-t opacity-80 font-semibold">
                  <p>{item.prod_num}</p> <img src="/public/arrow_bottom.svg" alt="" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MyOrders;
