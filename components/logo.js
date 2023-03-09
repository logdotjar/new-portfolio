import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  display: inline-flex;
  align-items: center;
  height: 30px;
  padding: 10px;
  line-height: 20px;
  font-weight: 700;
  font-size: 18px;
`

const Logo = () => {
  return (
    (<Link href="/" scroll={false}>

      <LogoBox>
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
          ml={3}
        >
         log.jar
        </Text>
      </LogoBox>

    </Link>)
  );
}

export default Logo