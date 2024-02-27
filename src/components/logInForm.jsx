import axios from "axios";
import { useForm } from "react-hook-form";
const LogInForm = ({ closeLogIn, handleMessage }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const errorStyle = {
    border: "2px solid red",
  };

  const onSubmit = async (data) => {
    const res = await axios
      .get("http://localhost:3001/users?phone_num=" + data.phone)
      .then((res) => {
        console.log(res);
        if (res.data.length === 0) {
          handleMessage(true, "This acc does not exist");
        } else {
          console.log(res.data[0].password);
          if (res.data[0].password === data.password) {
            window.location.reload();
            localStorage.setItem("user", JSON.stringify(res.data[0]));
          } else {
            handleMessage(true, "Wrong password");
          }
        }
      })
      .catch((err) => {
        console.error("Error sending Telegram message:", err);
      });
    setTimeout(() => {
      handleMessage(false);
    }, 3000);
    console.log(data);
    return res;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      class="log_in_form flex flex-col gap-4"
      name="log_in"
    >
      <input
        {...register("phone", {
          required: "Введите номер телефона",
          pattern:
            /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/,
        })}
        id={"phone"}
        class="phone_num_log_in border-0 py-3 outline-none pl-4 text-2xl bg-[#e6e8ed] w-[360px] rounded-xl"
        style={errors.phone?.type === "pattern" ? errorStyle : undefined}
        placeholder="00-000-00-00"
      />
      {errors.phone?.type === "required" ? (
        <span className="text-xs text-red-600 font-medium">
          {errors.phone?.message}
        </span>
      ) : null}
      <input
        {...register("password", {
          required: "Введите пароль",
        })}
        class="password_log_in border-0 py-3 pl-4 text-2xl bg-[#e6e8ed] w-[360px] rounded-xl"
        type="password"
        placeholder="Пароль"
      />
      {errors.password?.type === "required" ? (
        <span className="text-xs text-red-600 font-medium">
          {errors.password?.message}
        </span>
      ) : null}
      <button
        type="submit"
        class="border-0 py-3 pl-4 text-2xl bg-[#7000ff] text-slate-50 w-[360px] rounded-xl"
      >
        Отправить
      </button>
      <a
        onClick={closeLogIn}
        href
        class="open_sign_in cursor-pointer mx-auto mt-12 text-lg underline text-blue-700"
      >
        Зарегистрироваться
      </a>
    </form>
  );
};
export default LogInForm;
