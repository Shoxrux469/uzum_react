import Header from "../components/header/header";
import Footer from "../components/footer";
import searchContext from "../modules/searchContext";
import { useState } from "react";
import PopUpModal from "../components/common/popUpModal";
import PopUpContext from "../modules/popUpContext";
const Layout = ({ children }) => {
  const [searchText, setSearchText] = useState('');
  const [popUpData, setpopUpData] = useState(
    {
      itemImg: "",
      itemTitle: "",
      status: false
    }
  );
  const changeSearchText = (text) => {
    setSearchText(text)
  }

  return (
    <>
      <PopUpContext.Provider value={{ popUpData, setpopUpData }}>
        <searchContext.Provider value={{ searchText, changeSearchText }}>
          <Header />
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