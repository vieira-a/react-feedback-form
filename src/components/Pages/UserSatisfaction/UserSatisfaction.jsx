import Footer from "../../Footer/Footer"
import Header from "../../Header/Header"

import * as S from "./styles"

export default function UserSatisfaction () {
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
        <S.SectionController>
          <S.IconBack/>
          <S.IconForward/>
        </S.SectionController>
      </S.UserSatisfactionMain>
      <Footer />
    </>
  )

}