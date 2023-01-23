import { GlobalStyle } from "./components/GlobalStyle"
import UserInfo from "./components/Pages/UserInfo/UserInfo";
import UserSatisfaction from "./components/Pages/UserSatisfaction/UserSatisfaction";

import { useContext } from "react";
import { FeedbackContext } from "./context/FeedbackContext";
import UserRecomendation from "./components/Pages/UserRecomendation/UserRecomendation";

function App() {

  const { currentPage, setCurrentPage } = useContext(FeedbackContext);

  return (
    <>
      <GlobalStyle />
      {currentPage === 'userInfo' && <UserInfo />}
      {currentPage === 'userSatisfaction' && <UserSatisfaction/>}
      {currentPage === 'userRecomendation' && <UserRecomendation/>}
    </>
  )
}

export default App
