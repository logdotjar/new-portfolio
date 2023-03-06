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
  font-size:0.8em;
  color:#555;
`