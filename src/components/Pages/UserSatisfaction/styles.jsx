import styled from "styled-components";
import { color } from '../../UI/Colors';
import { fs } from '../../UI/Tipography';
import {Smiley, SmileyMeh, SmileySad, CaretRight, CaretLeft } from 'phosphor-react'

export const UserSatisfactionMain = styled.section`
  padding: 44px;
`
export const Heading = styled.section`
  margin-top: 24px;
  margin-bottom: 48px;
  text-align: center;
`

export const Text = styled.p`
  font-size: ${props => props.sm ? fs.paragraph['sm'] : fs.paragraph['md']};
  font-weight: ${props => props.bold ? 700 : props.semibold ? 500 : 400};
  color: ${color.zinc['200']};
`

export const SatisfactionSection = styled.section`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
`

export const IconSatisfaction = styled.button`
  width: 80px;
  padding-block: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 1px solid ${color.zinc['400']};
  border-radius: 8px;
  &:focus {
    border: 1px solid ${color.fuchsia['600']};
  }
`

export const IconSmiley = styled(Smiley)` 
  cursor: pointer;
  font-size: 32px;
  color: ${color.zinc['200']};
`

export const IconSmileyMeh = styled(SmileyMeh)` 
  cursor: pointer;
  font-size: 32px;
  color: ${color.zinc['200']};
`

export const IconSmileySad = styled(SmileySad)` 
  cursor: pointer;
  font-size: 32px;
  color: ${color.zinc['200']};
`

export const SectionController = styled.section`
  padding-top: 56px;
  display: flex;
  text-align: center;
  justify-content: center;
  margin-block: 32px;
`


export const IconForward = styled(CaretRight)`
  cursor: pointer;
  font-size: 48px;
  color: ${color.fuchsia['600']};
  &:hover{
    transition: 0.7s;
    transform: scale(1.2);
  }
`

export const IconBack = styled(CaretLeft)`
  cursor: pointer;
  font-size: 48px;
  color: ${color.fuchsia['600']};
  &:hover{
    transition: 0.7s;
    transform: scale(1.2);
  }
`