import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const TigerSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const TigerContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="voxel-dog"
    m="auto"
    mt={['-20px', '-60px', '-60px']}
    mb={['-40px', '-70px', '-70px']}
    w={['100%', '100%', 400]}
    h={[280, 480, 400]}
    position="relative"
  >
    {children}
  </Box>
))

const Loader = () => {
  return (
    <TigerContainer>
      <TigerSpinner />
    </TigerContainer>
  )
}

export default Loader
