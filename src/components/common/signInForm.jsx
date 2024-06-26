import axios from "axios";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

const postUser = async (userData) => {
  const res = await axios.post(`http://localhost:3001/users`, userData);
  return res.data;
};

const SignInForm = ({ closeSignIn, handleMessage }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const mutation = useMutation(postUser);

  const errorStyle = {
    border: "2px solid red",
  };

  const onSubmit = async (data) => {
    await axios
      .get("http://localhost:3001/users?phone=" + data.phone)
      .then((res) => {
        if (res.data.length !== 0) {
          handleMessage(true, "This acc already exists");
        } else {
          mutation.mutateAsync(data);
          localStorage.setItem("user", JSON.stringify(data));
          window.location.reload();
          // console.log(data);
        }
      });
  };
  setTimeout(() => {
    handleMessage(false);
  }, 3000);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="sign_in_form flex flex-col gap-2"
      name="sign_in"
      action=""
    >
      <input
        {...register("name", {
          required: "Введите имя",
        })}
        className="border-0 py-3 pl-4 text-2xl bg-[#e6e8ed] w-[360px] rounded-xl"
        type="text"
        placeholder="Имя"
      />
      {errors.name?.type === "required" ? (
        <span className="text-xs text-red-600 font-medium">
          {errors.name?.message}
        </span>
      ) : null}
      <input
        {...register("surname", {
          required: "Введите свою фамилию",
        })}
        className="border-0 py-3 pl-4 text-2xl bg-[#e6e8ed] w-[360px] rounded-xl"
        type="text"
        placeholder="Фамилия"
      />
      {errors.surname?.type === "required" ? (
        <span className="text-xs text-red-600 font-medium">
          {errors.surname?.message}
        </span>
      ) : null}
      <input
        {...register("phone", {
          required: "Введите номер телефона",
          pattern:
            /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/,
        })}
        className="border-0 py-3 pl-4 text-2xl bg-[#e6e8ed] w-[360px] rounded-xl"
        style={errors.phone?.type === "pattern" ? errorStyle : undefined}
        placeholder="00 000-00-00"
      />
      {errors.phone?.type === "required" ? (
        <span className="text-xs text-red-600 font-medium">
          {errors.phone?.message}
        </span>
      ) : null}
      <input
        {...register("email", {
          required: "Введите свой эмайл",
          pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
        })}
        className="border-0 py-3 pl-4 text-2xl bg-[#e6e8ed] w-[360px] rounded-xl"
        style={errors.email?.type === "pattern" ? errorStyle : undefined}
        type="email"
        placeholder="Эмайл"
      />
      <input
        {...register("password", {
          required: "Введите пароль",
        })}
        className="password_log_in border-0 py-3 pl-4 text-2xl bg-[#e6e8ed] w-[360px] rounded-xl"
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
        className="border-0 py-3 pl-4 text-2xl bg-[#7000ff] text-slate-50 w-[360px] rounded-xl"
      >
        Отправить
      </button>
      <a
        onClick={closeSignIn}
        href
        className="open_log_in cursor-pointer mx-auto mt-6 text-lg underline text-blue-700"
      >
        Уже есть аккаунт
      </a>
    </form>
  );
};
export default SignInForm;
