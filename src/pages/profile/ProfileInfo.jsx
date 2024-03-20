import { useForm } from "react-hook-form";
import { user } from "../../modules/user";
import "./index.scss";
import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { useState } from "react";
const getUser = async () => {
	const res = await axios.get("http://localhost:3001/users");
	return res.data;
};

const ProfileInfo = ({ status, handleMessage }) => {
	const [IsMale, setIsMale] = useState(user.gender || "");
	const errorStyle = {
		border: "2px solid red",
	};
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm();

	const mutation = useMutation(async ({ id, user }) => {
		const res = axios.patch("http://localhost:3001/users/" + id, user);
		return res.data;
	});

	const log_out = () => {
		localStorage.removeItem("user");
		window.location.reload();
		window.location.assign("/");
	};

	const handleChange = (item, data) => {
		mutation.mutateAsync({ id: item.id, user: data });
		localStorage.removeItem("user");
		localStorage.setItem("user", JSON.stringify(data));
	};

	const { data: usersArr, isLoading, isError } = useQuery("goods", getUser);

	const onSubmit = async (data) => {
		if (data.phone !== user.phone) {
			// console.log(data);
			for (let item of usersArr) {
				if (data.phone === item.phone) {
					handleMessage(true, "acc with this phone num already exists");
				} else {
					const res = await axios
						.get("http://localhost:3001/users?phone=" + +user.phone)
						.then((res) => {
							for (let item of res.data) {
								console.log(data);
								handleChange(item, data);
							}
						});
					return res;
				}
			}
		} else {
			const res = await axios
				.get("http://localhost:3001/users?phone=" + +user.phone)
				.then((res) => {
					for (let item of res.data) {
						console.log(data);
						handleChange(item, data);
					}
				});
			return res;
		}
		setTimeout(() => {
			handleMessage(false);
		}, 3000);
	};

	const toggle_sex = (value) => {
		setValue("gender", value)
		setIsMale(value)
	}

	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error fetching data</div>;
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
								className="surname w-full profile_inputs "
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
								className="name  profile_inputs  w-full xl:w-fit"
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
							style={errors.phone?.type === "pattern" ? errorStyle : undefined}
							defaultValue={user.middlename}
							className="middle_name profile_inputs  xl:w-fit  w-full"
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
							style={errors.phone?.type === "pattern" ? errorStyle : undefined}
							className="w-full email xl:w-fit profile_inputs"
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
							id={"phone"}
							defaultValue={user.phone}
							style={errors.phone?.type === "pattern" ? errorStyle : undefined}
							className="w-full profile_inputs xl:w-fit phone_num"
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
								name="gender"
								value="male"
								style={IsMale === "male" ? { background: "rgba(54,54,64,.2)" } : { background: "white" }}
								className="w-fit py-[5px] text-[#4d4f59] px-[20px] border-r-0 male border border-[rgba(54,54,64,.2)]"
								onClick={() => toggle_sex("male")}
							>
								Мужской
							</button>
							<button
								type="button"
								name="gender"
								value="female"
								style={IsMale === "female" ? { background: "rgba(54,54,64,.2)" } : { background: "white" }}
								className="w-fit py-[5px] text-[#4d4f59] px-[20px] female border border-[rgba(54,54,64,.2)]"
								onClick={() => toggle_sex("female")}
							>
								Женский
							</button>
						</div>
					</div>
					<div className="w-full sm:w-1/2 mt-5 flex flex-col gap-1">
						<label htmlFor="birthdate">Дата рождения</label>
						<input
							{...register("birthdate")}
							id={"birthdate"}
							defaultValue={user.birthdate}
							className="w-full profile_inputs lg:w-fit birthday "
							placeholder="дд/мм/гггг"
						/>
					</div>
				</div>
				<div className="flex justify-between my-5">
					<button
						type="button"
						onClick={log_out}
						className="log_out sm:text-base ease-in-out duration-300 hover:bg-gray-300 profile_inputs py-2 text-lg xl:text-[18px] font-normal px-4"
					>
						Выйти из системы
					</button>
					<button
						type="submit"
						className="bg-[#7000ff] text-[#fff] text-sm sm:text-base py-2 px-5 profile_inputs font-semibold"
					>
						Сохранить
					</button>
				</div>
			</form >
		</div >
	);
};
export default ProfileInfo;
