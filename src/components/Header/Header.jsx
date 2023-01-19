import * as S from './styles';

export default function Header () {
  return (
    <>
      <S.Header>
        <div>
          <S.Heading bold>Service Feedback Form</S.Heading>
          <S.Text sm>Sua experiência utilizando os nossos serviços</S.Text>
        </div>
        <button>
          <S.IconSignOut />
        </button>
      </S.Header>
      <S.Nav>
        <S.Navigation>
          <S.Menu>
            <S.MenuOptions>
              <a href="#"><S.IconUserCircle active/></a>
              <S.ProgressLine />
            </S.MenuOptions>
            <S.MenuOptions>
              <a href="#"><S.IconSmiley /></a>
              <S.ProgressLine />
            </S.MenuOptions>
            <S.MenuOptions>
              <a href="#"><S.IconStar /></a>
              <S.ProgressLine />
            </S.MenuOptions>
            <S.MenuOptions>
              <a href="#"><S.IconCheckCircle/></a>
              </S.MenuOptions>
          </S.Menu>
          <S.ProgressIndicator>
            <S.ProgressLineIndicator />
            <S.Indicator active />
            <S.ProgressLineIndicator />
            <S.Indicator />
            <S.ProgressLineIndicator />
            <S.Indicator />
            <S.ProgressLineIndicator />
            <S.Indicator />
            <S.ProgressLineIndicator />
          </S.ProgressIndicator>
        </S.Navigation>
      </S.Nav>
    </>
  )

}