import * as S from './styles';
import Header from "../../Header/Header";
import Footer from '../../Footer/Footer';

import { useContext } from 'react';
import { FeedbackContext } from '../../../context/FeedbackContext';

export default function UserInfo () {

  const { pages, currentPage, setCurrentPage} = useContext(FeedbackContext);
  console.log(pages.indexOf(currentPage))

  const goTonextPage = () => {

    const indexOfCurrentPage = pages.indexOf(currentPage)
    const nextPage = indexOfCurrentPage + 1

    setCurrentPage(pages[nextPage])
  }

  return (
    <>
      <Header />
      <S.UserInfoMain>
        <S.UserInfoLabel name='name'>
          <S.Text>Qual o seu nome?</S.Text>
          <S.UserInfoInput type='text' name='name' placeholder='Digite o seu nome'/>
        </S.UserInfoLabel>
        <S.UserInfoLabel name='email'>
          <S.Text>Qual o seu e-mail?</S.Text>
          <S.UserInfoInput type='email' name='email' placeholder='Digite o seu e-mail'/>
        </S.UserInfoLabel>
        <S.SectionController>
          <S.IconForward onClick={goTonextPage}/>
        </S.SectionController>
      </S.UserInfoMain>
      <Footer />
    </>
  )
}