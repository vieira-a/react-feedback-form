import styled from "styled-components";
import { color } from '../UI/Colors';
import { fs } from '../UI/Tipography'
import { SignOut, UserCircle, Smiley, Star, CheckCircle } from 'phosphor-react';


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
  color: ${color.zinc['200']};
`

export const Text = styled.p`
  font-size: ${props => props.sm ? fs.paragraph['sm'] : fs.paragraph['md']};
  font-weight: ${props => props.bold ? 700 : props.semibold ? 500 : 400};
  color: ${color.zinc['200']};
`

export const Nav = styled.nav`
  width: 100%;
`

export const IconSignOut = styled(SignOut)`
  cursor: pointer;
  font-size: 32px;
  color: ${color.zinc['700']};
  &:hover{
    transition: 0.7s;
    color: ${color.fuchsia['600']};
  }
  
`

export const IconUserCircle = styled(UserCircle)` 
  cursor: pointer;
  font-size: 32px;
  color: ${props => props.active ? color.fuchsia['600'] : color.zinc['700']};
  &:hover{
    transition: 0.7s;
    color: ${color.fuchsia['600']};
  }
`

export const IconStar = styled(Star)`
  cursor: pointer;
  font-size: 32px;
  color: ${props => props.active ? color.fuchsia['600'] : color.zinc['700']};
  &:hover{
    transition: 0.7s;
    color: ${color.fuchsia['600']};
  }
`

export const IconSmiley = styled(Smiley)`
  cursor: pointer;
  font-size: 32px;
  color: ${props => props.active ? color.fuchsia['600'] : color.zinc['700']};
  &:hover{
    transition: 0.7s;
    color: ${color.fuchsia['600']};
  }
`

export const IconCheckCircle = styled(CheckCircle)`
  cursor: pointer;
  font-size: 32px;
  color: ${props => props.active ? color.fuchsia['600'] : color.zinc['700']};
  &:hover{
    transition: 0.7s;
    color: ${color.fuchsia['600']};
  }
`

export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  padding-block: 32px;
`

export const MenuOptions = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${color.zinc['700']};
  &:hover{
    color: ${color.fuchsia['600']};
  }
`

export const ProgressLine = styled.hr`
  width: 44px;
  border: none;
  border-top: 1px solid ${color.zinc['700']};
`

export const ProgressIndicator = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Indicator = styled.span`
  width: 8px;
  height: 8px;
  background-color: ${props => props.active ? color.zinc['900'] : color.zinc['600']};
  border-radius: 50%;
  border: ${props => props.active ? `2px solid ${color.fuchsia['600']}` : 'none'}
`

export const ProgressLineIndicator = styled.hr`
  width: 20%;
  border: none;
  border-top: 1px solid ${color.zinc['700']};
`