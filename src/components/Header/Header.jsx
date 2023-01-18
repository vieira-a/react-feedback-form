import * as S from './styles';
import { SignOut } from 'phosphor-react';

export default function Header () {
  return (
    
    <S.Header>
      <div>
        <S.Heading bold>Service Feedback Form</S.Heading>
        <S.Text sm>Sua experiência utilizando os nossos serviços</S.Text>
      </div>
      <div>
        <SignOut size={24} />
      </div>
    </S.Header>
    
  )

}