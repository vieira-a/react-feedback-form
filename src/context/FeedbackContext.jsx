import { createContext, useState } from "react";

export const FeedbackContext = createContext();

export const FeedbackContextProvider = ({children}) => {

  const pages = ['userInfo', 'userSatisfaction', 'userRecomendation', 'feedbackFinish']

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <FeedbackContext.Provider value={{pages, currentPage, setCurrentPage}}>
      {children}
    </FeedbackContext.Provider>
  )

}
