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

          <S.IconStarLabel htmlFor="star1">
            <S.CheckStar type='checkbox' name="star1" value='1'/>
            <S.IconStar/>
          </S.IconStarLabel>

          <S.IconStarLabel htmlFor="star2">
            <S.CheckStar type='checkbox' name="star2" value='2'/>
            <S.IconStar/>
          </S.IconStarLabel>

          <S.IconStarLabel htmlFor="star3">
            <S.CheckStar type='checkbox' name="star3" value='3'/>
            <S.IconStar/>
          </S.IconStarLabel>

          <S.IconStarLabel htmlFor="star4">
            <S.CheckStar type='checkbox' name="star4" value='4'/>
            <S.IconStar/>
          </S.IconStarLabel>

          <S.IconStarLabel htmlFor="star4">
            <S.CheckStar type='checkbox' name="star4" value='4'/>
            <S.IconStar/>
          </S.IconStarLabel>
          
            
            
        </S.RecomendationSection>
        <PageIndicator/>
      </S.UserRecomendationMain>
      <Footer />
    </>
  )
}