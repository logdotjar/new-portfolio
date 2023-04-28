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
          Introduce
        </Heading>
        <Paragraph>
          4년간 웹 퍼블리셔(UI 개발자)로 일하며 기획이 반영된 디자인을 서비스 화면 UI 개발을 하였습니다.<br/>
          컴포넌트로 시작하여 레이아웃, 웹 페이지까지 화면별로 나누어 효율적인 코드 작성 및 관리를 추구하고, 효율적인 개발을 위해 반복적으로 쓰이는 코드를 활용할 수 있게 재구성하여 불필요한 코드작성을 줄이는 작업을 했습니다. <br/><br/>
          <strong>개발</strong>은 팀원과 약속과 커뮤니케이션으로 이루어진다고 생각합니다. <br/>
          팀원과 커뮤니케이션을 통해서 효율적인 코드 작성 및 유지보수를 하기 위해 끊임없는 공부를 하고있습니다.<br/>
          타 직군과의 커뮤니케이션을 통해 기획의도를 파악하고, 방법과 의견을 제안하는 등 유연한 의사소통을 지향합니다.<br/><br/>
          코드와 업무 의사소통도 경청하며, 유연하게 소통할 수 있는 개발자가 되기 위해 노력하겠습니다!

        </Paragraph>
        <Box align="center" my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="teal"
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
          <BioYear>18.04 - 19.12</BioYear>
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
