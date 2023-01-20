import * as S from './styles';
import Header from "../../Header/Header";

export default function UserInfo () {
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
          <S.IconForward />
        </S.SectionController>
      </S.UserInfoMain>
    </>
  )
}