import styled from "styled-components";
import { color } from "../../UI/Colors";
import {Star} from "phosphor-react"

export const UserRecomendationMain = styled.section`
  padding: 44px;
`
export const Heading = styled.section`
  margin-top: 24px;
  margin-bottom: 48px;
  text-align: center;
`

export const RecomendationSection = styled.section`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
`

export const CheckStar = styled.input`
    visibility: hidden;
`

export const IconStar = styled(Star)` 
  cursor: pointer;
  font-size: 32px;
  color: ${color.zinc['200']};
`