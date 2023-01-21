import { GlobalStyle } from "./components/GlobalStyle"
import UserInfo from "./components/Pages/UserInfo/UserInfo";
import UserSatisfaction from "./components/Pages/UserSatisfaction/UserSatisfaction";

import { useContext } from "react";
import { FeedbackContext } from "./context/FeedbackContext";

function App() {

  const { currentPage, setCurrentPage } = useContext(FeedbackContext);

  return (
    <>
      <GlobalStyle />
      {currentPage === 'userInfo' && <UserInfo />}
      {currentPage === 'userSatisfaction' && <UserSatisfaction/>}
    </>
  )
}

export default App
