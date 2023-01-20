import styled from "styled-components";
import { fs } from "../UI/Tipography";
import { color } from "../UI/Colors";
import {GithubLogo, LinkedinLogo} from 'phosphor-react';

export const FooterSection = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-block: 24px;
  border-top: 1px solid ${color.fuchsia['600']};
  gap: 12px;
`
export const Text = styled.p`
  font-size: ${props => props.sm ? fs.paragraph['sm'] : fs.paragraph['md']};
  font-weight: ${props => props.bold ? 700 : props.semibold ? 500 : 400};
  color: ${color.zinc['200']};
`

export const SocialNetwork = styled.section`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const IconGithub = styled(GithubLogo)`
  cursor: pointer;
  font-size: 24px;
  color: ${color.zinc['700']};
  &:hover{
    transition: 0.7s;
    color: ${color.fuchsia['600']};
  }
`

export const IconLinkedin = styled(LinkedinLogo)`
  cursor: pointer;
  font-size: 24px;
  color: ${color.zinc['700']};
  &:hover{
    transition: 0.7s;
    color: ${color.fuchsia['600']};
  }
`


