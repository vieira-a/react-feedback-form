import { createContext, useState } from "react";

export const FeedbackContext = createContext();

export const FeedbackContextProvider = ({children}) => {

  const pages = ['userInfo', 'userSatisfaction', 'userRecomendation', 'feedbackFinish']

  const [currentPage, setCurrentPage] = useState(pages[0]);

  const goToNextPage = () => {

    const indexOfCurrentPage = pages.indexOf(currentPage)
    const nextPage = indexOfCurrentPage + 1

    setCurrentPage(pages[nextPage])
  }

  const goToBackPage = () => {

    const indexOfCurrentPage = pages.indexOf(currentPage)
    const backPage = indexOfCurrentPage - 1

    setCurrentPage(pages[backPage])
  }
  
  console.log(currentPage)
  return (
    <FeedbackContext.Provider value={{pages, currentPage, setCurrentPage, goToNextPage, goToBackPage}}>
      {children}
    </FeedbackContext.Provider>
  )

}
