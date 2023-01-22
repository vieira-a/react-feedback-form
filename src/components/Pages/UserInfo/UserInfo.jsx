import * as S from './styles';
import Header from "../../Header/Header";
import Footer from '../../Footer/Footer';
import PageIndicator from '../../PageIndicator/PageIndicator';

import { useContext } from 'react';
import { FeedbackContext } from '../../../context/FeedbackContext';

export default function UserInfo () {

  const { goToNextPage} = useContext(FeedbackContext);
 
  return (
    <>
      <Header />
      <S.UserInfoMain>
        <S.Heading>
          <h2>Conte-nos um pouco sobre você</h2>
        </S.Heading>
        <S.UserInfoLabel name='name'>
          <S.Text>Qual o seu nome?</S.Text>
          <S.UserInfoInput type='text' name='name' placeholder='Digite o seu nome'/>
        </S.UserInfoLabel>
        <S.UserInfoLabel name='email'>
          <S.Text>Qual o seu e-mail?</S.Text>
          <S.UserInfoInput type='email' name='email' placeholder='Digite o seu e-mail'/>
        </S.UserInfoLabel>
        <PageIndicator/>
      </S.UserInfoMain>
      <Footer />
    </>
  )
}