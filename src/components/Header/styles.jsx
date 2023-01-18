import styled from "styled-components";
import { color } from '../UI/Colors';
import { fs } from '../UI/Tipography'

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  border-bottom: 1px solid ${color.zinc['700']}
`

export const Heading = styled.p`
  font-size: ${props => props.sm ? fs.heading['sm'] : props.md ? fs.heading['md'] : fs.heading['lg']};
  font-weight: ${props => props.bold ? 700 : props.semibold ? 500 : 400};
`

export const Text = styled.p`
  font-size: ${props => props.sm ? fs.paragraph['sm'] : fs.paragraph['md']};
  font-weight: ${props => props.bold ? 700 : props.semibold ? 500 : 400};
`

export const Navigation = styled.nav`

`