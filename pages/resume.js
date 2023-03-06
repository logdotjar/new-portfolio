import {
    Container,
    Heading,
    Grid, GridItem,
    Link,
    chakra,
    Circle,
    Text, useColorModeValue, Button
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import P from '../components/paragraph'
import Image from "next/image";
import CopyAddr from '../components/copyAddr'
import {ResumeYear, ResumeRole, ResumeCompany, ResumeText , ListDot } from '../components/bio'
const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Resume = () => (
    <Layout title="Resume">
        <Container maxW="740px">
            <Heading as="h2" fontSize={'2rem'} mb={4}>
               👩🏻‍💻 Resume | 기술 이력서
            </Heading>
        </Container>
        <Container maxW="740px" borderBottom="1px solid #eee">
            <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }}>
                <GridItem  >
                    <Circle h="100%">
                        <ProfileImage
                            src="/images/jinareum.jpeg"
                            alt="Profile image"
                            borderRadius="full"
                            border="2px solid #ccc"
                            width="120"
                            height="120"
                        />
                    </Circle>
                </GridItem>
                <GridItem
                    colSpan={3} p={3}
                    bg={useColorModeValue('transparent', 'whiteAlpha.600')}
                    lineHeight={2}
                >
                    <Text as="b" color="#d9730d">Contact ✨</Text>
                    <Text>
                        📧
                        <Button
                            variant="link"
                            minW="0"
                            fontWeight="400"
                            marginLeft={3}
                            onClick={() => CopyAddr("devofjar@gmail.com","이메일이 복사되었습니다.")}
                        >
                            devofjar@gmail.com
                        </Button>
                    </Text>
                    <Text>
                        🌴
                        <Link
                            href="https://github.com/logdotjar"
                            target="_blank"
                            marginLeft={3}
                        >
                            @logdotjar
                        </Link>
                    </Text>
                    <Text>
                        📱
                        <Button
                            variant="link"
                            minW="0"
                            fontWeight="400"
                            marginLeft={3}
                            onClick={() => CopyAddr("01094759790","전화번호가 복사되었습니다.")}
                        >
                            010-9475-9790
                        </Button>
                    </Text>
                </GridItem>
            </Grid>
        </Container>
        <Container maxW="740px" mt={6} mb={'2rem'} pt={5} pb={'1rem'} borderBottom="1px solid #eee">
            <Heading as="h4" fontSize={'20px'} mb={3}>
                <b>Introduce.☁️</b>
            </Heading>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}>
                <GridItem colSpan={2}  >
                    <P>
                        안녕하세요 프론트엔드 개발자 진아름입니다.<br/>
                        <br/>
                        4년간 UI 개발자로 일을 하면서 기획을 반영한 디자인 의도를 UI로 개발했습니다.<br/>
                        자체 서비스 개발의 경험부터 대규모 서비스 개발 과정을 거치면서 효율적인 개발을 위해 반복적으로 쓰이는 코드는 재사용할 수 있도록 컴포넌트화하고 불필요한 코드 작성을 피하기 위한 개발을 했습니다.<br/>
                        TA/Front 팀을 시작으로 TF팀을 거쳐 개발업무를 진행하며 프로젝트별 요구하는 역량에 따라 개발을 참여하였습니다.<br/>
                        <br/>
                        서비스의 첫 인상을 맡고있는 프론트엔드 개발자로서 민감하고, 꾸준하게 학습합니다.<br/>
                        다양한 문제를 능동적으로 해결하기 위해 많은 탐구와 질문을 좋아합니다.<br/>
                        사용자에게 좋은 경험을 전달하는 일에 큰 보람을 느끼고, 다양한 분야에서 도전적인 경험을 쌓고 싶습니다!
                    </P>
                </GridItem>
            </Grid>
        </Container>
        <Container maxW="740px" mt={6} mb={'2rem'} pt={5} pb={'1rem'} borderBottom="1px solid #eee">
            <Heading as="h4" fontSize={'20px'} mb={3}>
                <b>Career.☁️</b>
            </Heading>
            <Text as="b">
                <Link href="https://cndfactory.com/" target="_blank" mr="5px">CNDF</Link>
                <ResumeYear>20.06 - 22.12</ResumeYear>
            </Text>
            <ResumeCompany>대기업 협력사 업무와 함께 의뢰를 받아 서비스를 제작하는 SI 회사입니다.</ResumeCompany>

            <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}>
                <GridItem  pt={3} pb={3} mb={6}>
                    <ResumeRole>개발2팀 대리</ResumeRole>
                </GridItem>
                <GridItem  colSpan={2} pt={3} pb={3} mb={6}>
                    <ListDot>주 기술스택 : HTML,CSS,Javascript,사내 자체 JS 프레임워크 </ListDot>
                    <ListDot>
                        <Link href="https://www.happypointcard.com/page/main/index.spc" target="_blank">
                            해피포인트 웹
                        </Link> 프론트 UI 유지보수
                    </ListDot>
                    <ListDot>
                        <Link href="https://www.spcgfs.co.kr/" target="_blank">
                            GFS
                        </Link> Front : 레이아웃 및 DB / Admin : 버그 및 기능 개선
                    </ListDot>
                    <ListDot>
                        삼다수 배달 기사님 전용 화면 구축 퍼블리싱
                    </ListDot>
                </GridItem>
                <GridItem pt={3} pb={3} mb={6}>
                    <ResumeRole>솔루션사업팀(TF)</ResumeRole>
                    <Text fontSize="14px" pb={1}><b>파타고니아</b></Text>
                    <Text fontSize="12px" pb={1}>22.03 - 22.08</Text>
                </GridItem>
                <GridItem  colSpan={2} pt={3} pb={3} mb={6}>
                    <ListDot>
                       <Link href="https://www.patagonia.co.kr/" target="_blank">파타고니아 코리아</Link> 리뉴얼
                    </ListDot>
                    <ListDot>미국 본사와 같은 UI/UX , 컨텐츠페이지 등 고객 니즈를 반영한 반응형 쇼핑몰 리뉴얼 프론트 개발</ListDot>
                    <ListDot>파타고니아 프론트 레이아웃 , Sass를 이용한 Component로 전환</ListDot>
                    <ListDot>신규 입사자를 위한 프론트 레이아웃/컴포넌트/컨텐츠 페이지 제작 가이드 작성</ListDot>
                </GridItem>
                <GridItem>
                    <ResumeRole>솔루션사업팀(TF)</ResumeRole>
                    <Text fontSize="14px" pb={1}><b>온일장</b></Text>
                    <Text fontSize="12px" pb={1}>21.09 - 22.02</Text>
                </GridItem>
                <GridItem  colSpan={2}>
                    <ListDot>
                        솔루션을 이용한 B2B 식자재 쇼핑몰
                        <Link href="https://www.oniljang.com/" target="_blank">온일장</Link>
                    </ListDot>
                    <ListDot>온일장 배송기사님 전용 배송을 위한 앱 제작</ListDot>
                </GridItem>
            </Grid>
        </Container>

        <GridItem  bg='papayawhip' >

        </GridItem>
        <GridItem  bg='red' >????????????</GridItem>
    </Layout>
)
export default Resume;
export { getServerSideProps } from '../components/chakra'