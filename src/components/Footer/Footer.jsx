import * as S from './styles';

export default function Footer () {
  return (
    <S.FooterSection>
      <S.Text sm>Desenvolvido por Anderson Vieira</S.Text>
      <S.SocialNetwork>
        <S.IconGithub />
        <S.IconLinkedin />
      </S.SocialNetwork>
    </S.FooterSection>
  )
}