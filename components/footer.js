import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box marginTop="50px" padding="10px 0" align="center" opacity={0.6} fontSize="sm">
      &copy; {new Date().getFullYear()} Jinareum. All Rights Reserved.
    </Box>
  )
}

export default Footer
