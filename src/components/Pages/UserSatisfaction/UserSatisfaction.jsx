import Footer from "../../Footer/Footer"
import Header from "../../Header/Header"
import PageIndicator from "../../PageIndicator/PageIndicator"

import { useContext } from "react"
import { FeedbackContext } from "../../../context/FeedbackContext"

import * as S from "./styles"

export default function UserSatisfaction () {

  const { goToNextPage, goToBackPage } = useContext(FeedbackContext)

  return (
    <>
      <Header />
      <S.UserSatisfactionMain>
        <S.Heading>
          <h2>Qual o seu nível de satisfação?</h2>
        </S.Heading>
          <S.SatisfactionSection>
          
          <S.IconSatisfactionContainer>
            <S.IconSatisfactionLabel htmlFor="satisfaction">
              <S.IconSatisfactionInput type='radio' name="satisfaction" value='low' />
              <S.IconSmileySad/>
            </S.IconSatisfactionLabel>
            <S.Text>Baixa</S.Text>
          </S.IconSatisfactionContainer>
          
          <S.IconSatisfactionContainer>
            <S.IconSatisfactionLabel htmlFor="satisfaction">
              <S.IconSatisfactionInput type='radio' name="satisfaction" value='normal'/>
              <S.IconSmileyMeh/>
            </S.IconSatisfactionLabel>
            <S.Text>Normal</S.Text>
          </S.IconSatisfactionContainer>

          <S.IconSatisfactionContainer>
            <S.IconSatisfactionLabel htmlFor="satisfaction">
              <S.IconSatisfactionInput type='radio' name="satisfaction" value='high'/>
              <S.IconSmiley/>
            </S.IconSatisfactionLabel>
            <S.Text>Alta</S.Text>
          </S.IconSatisfactionContainer>

        </S.SatisfactionSection>
        <PageIndicator />
      </S.UserSatisfactionMain>
      <Footer />
    </>
  )

}