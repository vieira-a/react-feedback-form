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
          <S.IconSatisfaction>
            <S.IconSmileySad/>
            <S.Text>Baixa</S.Text>
          </S.IconSatisfaction>
          <S.IconSatisfaction>
            <S.IconSmileyMeh/>
            <S.Text>Normal</S.Text>
          </S.IconSatisfaction>
          <S.IconSatisfaction>
            <S.IconSmiley/>
            <S.Text>Alta</S.Text>
          </S.IconSatisfaction>
        </S.SatisfactionSection>
        <PageIndicator />
      </S.UserSatisfactionMain>
      <Footer />
    </>
  )

}