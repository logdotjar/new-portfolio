import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  List,
  ListItem,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear , BioRole } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { IoLogoGithub , IoMail } from 'react-icons/io5'
import CopyAddr from '../components/copyAddr'
import Image from 'next/image'

import dynamic from 'next/dynamic'
import VoxelTigerLoader from '../components/voxel-tiger-loader'
const LazyVoxelDog = dynamic(() => import('../components/voxel-tiger'), {
  ssr: false,
  loading: () => <VoxelTigerLoader />
})


const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container maxW="840px">
      <LazyVoxelDog/>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.900', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
       안녕하세요. 웹 프론트엔드 개발자 진아름입니다.
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Better than yesterday.
          </Heading>
          <p>보다 개선된 제품의 성능, 보다 좋은 사용자의 경험을 제공하고자 합니다.</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="blackAlpha.500"
            borderWidth={2}
            borderStyle="solid"
            w="100px"
            h="100px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/jinareum.jpeg"
              alt="Profile image"
              borderRadius="full"
              width="100"
              height="100"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
          Hello~🖐🏻
        </Heading>
        <Paragraph>
          안녕하세요!<br/>
          저는 사용자의 입장에서 개선되어야 할 문제점을 찾고, 협업을 통해서 개선해나가며 성장하고 있는 신입 프론트엔드 개발자입니다.<br/>
          웹 서비스로 브랜드의 가치를 고객에게 전달하기 위해 다양한 직군과 커뮤니케이션을 하며 협업해왔습니다.<br/>
          UI를 시작으로 프론트엔드로 달려나가며 비즈니스의 성장에 적극적으로 임합니다.
        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            fontWeight="500"
            rightIcon={<ChevronRightIcon />}
            // backgroundColor="#FBB6CE"
            colorScheme="purple"
          >
            Portfolio
          </Button>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Experience
        </Heading>
        <BioSection>
          <BioYear>20.06 - 22.12</BioYear>
          CNDF.
          <BioRole>개발2팀 대리 / UI 개발자</BioRole>
        </BioSection>
        <BioSection>
          <BioYear>20.01 - 20.02</BioYear>
          프리랜서
        </BioSection>
        <BioSection>
          <BioYear>18.04 - 19.11</BioYear>
          innoIT
          <BioRole>개발팀 주임</BioRole>
        </BioSection>
        <BioSection>
          <BioYear>17.09 - 18.01</BioYear>
          YellowForm
          <BioRole>사원</BioRole>
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Connect
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/logdotjar" target="_blank">
              <Button
                  variant="link"
                  colorScheme="gray"
                  fontWeight="400"
                  leftIcon={<IoLogoGithub/>}
              >
                @logdotjar
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Button
                variant="link"
                minW="0"
                colorScheme="gray"
                fontWeight="400"
                leftIcon={<IoMail/>}
                onClick={() => CopyAddr("devofjar@gmail.com","이메일이 복사되었습니다.")}
            >
              devofjar@gmail.com
            </Button>
          </ListItem>
        </List>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
