import Header from "../components/header/header";
import Footer from "../components/footer";
import searchContext from "../modules/searchContext";
import { useState } from "react";
import PopUpModal from "../components/popUpModal";
const Layout = ({ children }) => {
  const [searchText, setSearchText] = useState('');

  const changeSearchText = (text) => {
    setSearchText(text)
  }

  return (
    <>
      <searchContext.Provider value={{ searchText, changeSearchText }}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </searchContext.Provider>
    </>
  );
};
export default Layout;