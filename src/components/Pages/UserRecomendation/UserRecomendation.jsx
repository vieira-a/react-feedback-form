import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import PageIndicator from "../../PageIndicator/PageIndicator";

import * as S from "./styles"

export default function UserRecomendation () {
  return (
    <>
    <Header />
      <S.UserRecomendationMain>
        <S.Heading>
          <h2>Recomendaria os nossos serviços?</h2>
        </S.Heading>
        <S.RecomendationSection>
          <S.IconStar/>
          <S.IconStar/>
          <S.IconStar/>
          <S.IconStar/>
          <S.IconStar/>
        </S.RecomendationSection>
        <PageIndicator/>
      </S.UserRecomendationMain>
      <Footer />
    </>
  )
}