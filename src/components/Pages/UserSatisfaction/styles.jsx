import styled from "styled-components";
import { color } from '../../UI/Colors';
import { fs } from '../../UI/Tipography';
import {Smiley, SmileyMeh, SmileySad } from 'phosphor-react'

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
`

export const SatisfactionSection = styled.section`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
`

export const IconSatisfactionContainer = styled.div`
  text-align: center;
  width: 80px;
  padding-block: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 1px solid ${color.zinc['400']};
  border-radius: 8px; 
  &:focus-within { 
    color: ${color.fuchsia['600']};
    border: 1px solid ${color.fuchsia['600']};
    transition: 0.3s;
  }
`

export const IconSatisfactionLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const IconSatisfactionInput = styled.input`
  opacity: 0;
  position: absolute;
  cursor: pointer;
  &:checked ~ svg {
    color: ${color.fuchsia['600']};
  }
`

export const IconSmiley = styled(Smiley)` 
  font-size: 32px;
  color: ${color.zinc['200']};
  transition: 0.3s;
`

export const IconSmileyMeh = styled(SmileyMeh)` 
  font-size: 32px;
  color: ${color.zinc['200']};
  transition: 0.3s;
`

export const IconSmileySad = styled(SmileySad)` 
  font-size: 32px;
  color: ${color.zinc['200']};
  transition: 0.3s;
`