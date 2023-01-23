import styled from "styled-components";
import { color } from "../UI/Colors";
import { CaretRight, CaretLeft } from 'phosphor-react';


export const SectionController = styled.section`
  text-align: center;
  margin-block: 64px;
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
