import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

export const BioSection = styled(Box)`
  display: flex;
  flex-flow: wrap;
  align-content: center;
  margin-bottom:0.5em;
  //padding-left: 3.4em;
  //text-indent: -3.4em;
`

export const BioYear = styled.span`
  display: flex;
  min-width: 100px;
  margin-right: 0.5rem;
  font-weight: 700;
`
export const BioRole = styled.span`
  display: flex;
  align-items: center;
  margin-left:0.5em;
  font-size:0.7em;
`
export const ListDot = styled.span`
  position:relative;
  display: block;
  align-items: center;
  padding-left:20px;
  line-height: 1.6;
  &::before{
    content:"";
    position: absolute;
    left:5px;
    top:12px;
    //transform:translateY(-50%);
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color:#333;
  }
`
export const ResumeCompany = styled.p`
  padding:5px 0;
  font-size: 0.8rem;
  color:#787774;
`
export const ResumeYear = styled.span`
  color:#37352f;
  font-size: 0.9rem;
  font-weight: 400;
`
export const ResumeRole = styled.span`
  padding-bottom:1rem;
`
export const ResumeText = styled.span`
  display: inline-flex;
  align-items: center;
`