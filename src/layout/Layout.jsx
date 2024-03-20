import Header from "../components/header/header";
import Footer from "../components/footer";
import searchContext from "../modules/context/searchContext";
import { useState } from "react";
import PopUpModal from "../components/common/popUpModal";
import PopUpContext from "../modules/context/popUpContext";

const Layout = ({ children, includeHeader = true }) => {
  const [searchText, setSearchText] = useState('');
  const [popUpData, setpopUpData] = useState({
    itemImg: "",
    itemTitle: "",
    status: false
  });

  const changeSearchText = (text) => {
    setSearchText(text);
  }

  return (
    <>
      <PopUpContext.Provider value={{ popUpData, setpopUpData }}>
        <searchContext.Provider value={{ searchText, changeSearchText }}>
          {includeHeader && <Header />}
          <main>
            <PopUpModal />
            {children}
          </main>
          <Footer />
        </searchContext.Provider>
      </PopUpContext.Provider>
    </>
  );
};

export default Layout;
