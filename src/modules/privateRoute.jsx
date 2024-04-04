// // PrivateRoute.js
// import { Route, Navigate, Routes } from "react-router-dom";
// import { user } from "./user"; // Предположим, что здесь хранится информация о пользователе

// const PrivateRoute = ({ element: Element, ...rest }) => {
//     return (
//         <Route
//             {...rest}
//             element={user ? <Element /> : <Navigate to="/" />} // Проверяем наличие пользователя, если нет, перенаправляем на страницу входа
//         />
//     );
// };

// export default PrivateRoute;