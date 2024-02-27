import { useForm } from "react-hook-form";
import { user } from "../../modules/user";
import axios from "axios";
const ProfileInfo = ({ status }) => {
  const errorStyle = {
    border: "2px solid red",
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const log_out = () => {
    localStorage.removeItem("user");
    window.location.reload();
    window.location.assign("/");
  };

  const user_arr = {};

  const onSubmit = async () => {
    const res = await axios
      .get("http://localhost:3001/users?phone_num=" + +user.phone_num)
      .then((res) => {
        for (let item of res.data) {
          axios
            .patch("http://localhost:3001/users/" + item.id, user_arr)
            .then((rea) => {
              if (res.status !== 200 && res.status !== 201) return;
              localStorage.removeItem("user");
              localStorage.setItem("user", JSON.stringify(res.data));
            });
        }
      });
    console.log(res);
  };
  return (
    <div style={status === false ? { display: "flex" } : { display: "none" }}>
      <form
        name="profile_info"
        className="settings p-1 sm:p-5 h-fit w-full sm:border-[1px] rounded-[2px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2>Мои данные</h2>
        <div className="flex flex-col lg:flex-row gap-2 my-5">
          <div className="flex flex-col sm:flex-row gap-2 w-66%">
            <div className="w-full sm:w-[50%]">
              <label htmlFor="surname">Фамилия</label>
              <input
                {...register("surname", {
                  required: "Введите фамилию",
                  pattern: /^[а-яА-ЯёЁa-zA-Z]+$/,
                })}
                defaultValue={user.surname}
                id="surname"
                className="surname mb-5 w-full rounded-xl sm:rounded border-[rgba(54,54,64,.2)]"
                style={errors.name?.type === "pattern" ? errorStyle : undefined}
              />
            </div>
            <div className="w-full sm:w-[50%]">
              <label htmlFor="name">Имя</label>
              <input
                {...register("name", {
                  required: "Введите имя",
                  pattern: /^[а-яА-ЯёЁa-zA-Z]+$/,
                })}
                id={"name"}
                defaultValue={user.name}
                className="name mb-5 rounded-xl sm:rounded w-full xl:w-fit border-[rgba(54,54,64,.2)]"
                style={
                  errors.phone?.type === "pattern" ? errorStyle : undefined
                }
              />
              {errors.name?.type === "required" ? (
                <span className="text-xs text-red-600 font-medium">
                  {errors.name?.message}
                </span>
              ) : null}
            </div>
          </div>

          <div className="w-full sm:w-[50%]">
            <label htmlFor="middlename">Отчество</label>
            <input
              {...register("middlename", {
                pattern: /^[а-яА-ЯёЁa-zA-Z]+$/,
              })}
              id={"middlename"}
              defaultValue={user.middlename}
              className="middle_name rounded-xl mb-5 xl:w-fit sm:rounded w-full border-[rgba(54,54,64,.2)]"
              placeholder="Отчество"
            />
          </div>
        </div>
        <div className="line my-2 w-full h-[1px] bg-gray-200"></div>
        <div className="flex flex-col sm:flex-row w-full gap-2 my-5">
          <div className="w-full sm:w-1/2 xl:w-fit">
            <label htmlFor="email">Электронная почта</label>
            <input
              {...register("email", {
                pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
              })}
              id={"email"}
              defaultValue={user.email}
              className="w-full email xl:w-fit rounded-xl mb-5 sm:rounded border-[rgba(54,54,64,.2)]"
            />
          </div>
          <div className="w-full sm:w-1/2 xl:w-fit">
            <label htmlFor="phone">Номер телефона</label>
            <input
              {...register("phone", {
                required: "Введите номер телефона",
                pattern:
                  /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/,
              })}
              defaultValue={user.phone_num}
              id={"phone"}
              className="w-full rounded-xl xl:w-fit phone_num mb-5 sm:rounded border-[rgba(54,54,64,.2)]"
              name="phone_num"
            />
            {errors.phone?.type === "required" ? (
              <span className="text-xs text-red-600 font-medium">
                {errors.phone?.message}
              </span>
            ) : null}
          </div>
        </div>
        <div className="line my-2 w-full h-[1px] bg-gray-200"></div>
        <div className="flex flex-col my-5">
          <div className="mt-5">
            <p>Пол</p>
            <div className="flex sex_btns">
              <button
                type="button"
                name="male"
                className="w-fit py-[5px] text-[#4d4f59] px-[20px] border border-r-0 border-[rgba(54,54,64,.2)] male"
              >
                Мужской
              </button>
              <button
                type="button"
                name="female"
                className="w-fit py-[5px] text-[#4d4f59] px-[20px] border border-[rgba(54,54,64,.2)] female"
              >
                Женский
              </button>
            </div>
          </div>
          <div className="w-full sm:w-1/2 mt-5 flex flex-col gap-1">
            <label htmlFor="birthdate">Дата рождения</label>
            <input
              {...register("birthdate", {
                pattern: /^\d{2}\/\d{2}\/\d{4}$/,
              })}
              id={"birthdate"}
              defaultValue={user.birthdate}
              className="w-full rounded-xl lg:w-fit birthday sm:rounded border-[rgba(54,54,64,.2)]"
              placeholder="дд/мм/гггг"
            />
          </div>
        </div>
        <div className="flex justify-between my-5">
          <button
            type="button"
            onClick={log_out}
            className="log_out sm:text-base ease-in-out duration-300 hover:bg-gray-300 rounded-xl py-2 text-lg font-normal px-4"
          >
            Выйти из системы
          </button>
          <button
            type="submit"
            className="bg-[#7000ff] text-[#fff] text-sm sm:text-base py-2 px-5 rounded-xl font-semibold"
          >
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
};
export default ProfileInfo;
