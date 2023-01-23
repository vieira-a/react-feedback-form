import { useContext } from "react"
import { FeedbackContext } from "../../context/FeedbackContext"
import * as S from "./styles"

export default function PageIndicator(){

    const { currentPage, goToNextPage, goToBackPage } = useContext(FeedbackContext);
    console.log(currentPage)

    return (
        
        <S.SectionController>
            {currentPage === 'userInfo' ? 
            <>
                <S.IconForward onClick={goToNextPage}/>
            </> : 
            <>
                <S.IconBack onClick={goToBackPage}/>
                <S.IconForward onClick={goToNextPage}/>
            </>
             }
            
        </S.SectionController>
    )
}