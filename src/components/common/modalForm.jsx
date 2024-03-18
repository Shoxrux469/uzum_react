import { useState } from "react";
import LogInModal from "./logInModal";
import { BiX } from "react-icons/bi";
import LogInForm from "./logInForm";
import SignInForm from "./signInForm";
import axios from "axios";
import { useQuery } from "react-query";
import ErrorMessage from "./errorMessage";

const ModalForm = ({ isOpen, onClose }) => {
  const [logIn, setlogIn] = useState(true);
  const [status, setStatus] = useState(false);
  const [errorText, setErrorText] = useState("");

  const handleError = (value, text) => {
    setStatus(value);
    setErrorText(text);
  };

  const getData = async () => {
    const res = await axios.get("http://localhost:3001/users");
    return res.data;
  };

  const { data, isLoading, isError } = useQuery("users", getData);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  data.map((user) => {
    return <LogInForm user={user}></LogInForm>;
  });

  return (
    <>
      <ErrorMessage status={status} innerText={errorText} />
      <LogInModal isOpen={isOpen} onClose={onClose}>
        <div
          class="log_in_modal h-full flex bg-slate-950 bg-opacity-30 fixed z-50 top-0 left-0 right-0"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            class="log_in_box flex flex-col items-center translate-x-[-50%] translate-y-[-50%] ease-in-out duration-700 bg-slate-50 px-8 py-12 absolute top-1/2 rounded-lg left-1/2">
            <h2 class="modal_title text-4xl mb-8 font-semibold">
              Войти в аккаунт
            </h2>
            <button
              onClick={onClose}
              class="close_modal_btn absolute top-4 right-4"
            >
              <BiX
                onClick={() => console.log("svzdf")}
                className="w-8 h-8 absolute -right-2 -top-2"
              />
            </button>
            {logIn && (
              <LogInForm
                handleMessage={handleError}
                closeLogIn={() => setlogIn(false)}
              />
            )}
            {logIn === false && (
              <SignInForm
                handleMessage={handleError}
                closeSignIn={() => setlogIn(true)}
              />
            )}
          </div>
        </div>
      </LogInModal>
    </>
  );
};
export default ModalForm;
