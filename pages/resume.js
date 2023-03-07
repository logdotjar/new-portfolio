import {
    Container,
    Heading,
    Grid, GridItem,
    Wrap, WrapItem,
    Link,
    chakra,
    Circle,
    Text, Button,
    Badge,
    useColorModeValue
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import P from '../components/paragraph'
import Image from "next/image";
import CopyAddr from '../components/copyAddr'
import {
    BioSection, BioYear , BioRole ,
    ResumeYear, ResumeRole, ResumeCompany,
    ListDot
} from '../components/bio'
const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Resume = () => (
    <Layout title="Resume">
        <Container maxW="740px">
            <Heading as="h2" fontSize={'2rem'} mb={4}>
               👩🏻‍💻 Resume | 기술 이력서
            </Heading>
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
                <b>Career.‍💻</b>
            </Heading>
            <Text as="b">
                <Link
                    href="https://cndfactory.com/"
                    target="_blank"
                    mr="5px"
                    pl="4px"
                    pr="4px"
                    bg={useColorModeValue('blue.100', 'whiteAlpha.600')}
                >
                    CNDF
                </Link>

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
                <GridItem  colSpan={2} pt={3} pb={3} mb={6}아>
                    <ListDot>
                       <Link href="https://www.patagonia.co.kr/" target="_blank">파타고니아 코리아</Link> 리뉴얼
                    </ListDot>
                    <ListDot>미국 본사와 같은 UI/UX , 컨텐츠페이지 등 고객 니즈를 반영한 반응형 쇼핑몰 리뉴얼 프론트 개발</ListDot>
                    <ListDot>파타고니아 프론트 레이아웃 , Sass를 이용한 Component로 전환</ListDot>
                    <ListDot>신규 입사자를 위한 프론트 레이아웃/컴포넌트/컨텐츠 페이지 제작 가이드 작성</ListDot>
                </GridItem>
                <GridItem pt={3} pb={3} mb={6}>
                    <ResumeRole>솔루션사업팀(TF)</ResumeRole>
                    <Text fontSize="14px" pb={1}><b>온일장</b></Text>
                    <Text fontSize="12px" pb={1}>21.09 - 22.02</Text>
                </GridItem>
                <GridItem  colSpan={2} pt={3} pb={3} mb={6}>
                    <ListDot>
                        솔루션을 이용한 B2B 식자재 쇼핑몰
                        <Link href="https://www.oniljang.com/" target="_blank" ml={1}>온일장</Link>
                    </ListDot>
                    <ListDot>
                        온일장 배송기사님 전용 배송을 위한 앱 제작<br/>
                        배송리스트 api 연결 장및 배송 준비중, 완료 등 데이터 상태별 UI 개발<br/>
                        스택 : HTML,CSS,Javascript,Vue,사내 자체 JS 프레임워크
                    </ListDot>

                </GridItem>
                <GridItem  pt={3} pb={3} mb={6}>
                    <ResumeRole>TA/Front팀 사원</ResumeRole>
                    <Text fontSize="14px" pb={1}><b>CDMS</b></Text>
                    <Text fontSize="12px" pb={1}>21.01 - 22.07</Text>
                    <Text fontSize="14px" pb={1}><b>SDMS</b></Text>
                    <Text fontSize="12px" pb={1}>20.06 - 21.02</Text>
                </GridItem>
                <GridItem  colSpan={2} pt={3} pb={3} mb={6}>
                    <ListDot>SDMS/CDMS 공통 개발 사항</ListDot>
                    <ListDot>주 기술스택 : HTML,CSS,Javascript,사내 자체 JS 프레임워크,Vue</ListDot>
                    <ListDot>카드배송 관리 시스템</ListDot>
                    <ListDot>어드민 웹 전체 레이아웃 설계 , 공통 UI Component</ListDot>
                    <ListDot>로그인 페이지</ListDot>
                    <ListDot>전체 페이지 물류별 정보 검색 조건 UI</ListDot>
                    <ListDot>vue 활용 : GNB, GNB 메뉴별 즐겨찾기 기능, 반복되는 조건 레이아웃 설계</ListDot>
                    <ListDot><b>SDMS</b>: 현장에서 출력 가능한 물류 레포트,스티커 약 20종류 제작 (Print.js / Api) </ListDot>
                </GridItem>
                <GridItem  pt={3} pb={3} mb={6}>
                    <ResumeRole>TA/Front팀 사원</ResumeRole>
                    <Text fontSize="14px" pb={1}><b>T9</b></Text>
                    <Text fontSize="12px" pb={1}>20.06 - 20.09</Text>
                    <Text fontSize="14px" pb={1}><b>바르미</b></Text>
                    <Text fontSize="12px" pb={1}>20.07 - 20.09</Text>
                </GridItem>
                <GridItem  colSpan={2} pt={3} pb={3} mb={6}>
                    <ListDot>주 기술스택 : HTML,CSS,Javascript,사내 자체 JS 프레임워크,Vue</ListDot>
                    <ListDot>
                        vue 템플릿 문법,클래스,스타일바인딩,조건부,리스트렌더링,컴포넌트 문법 활용
                    </ListDot>
                    <ListDot>SPA 개발</ListDot>
                    <ListDot>전체 레이아웃 설계 , 공통 UI Component</ListDot>
                </GridItem>
            </Grid>
            <Text
                as="b"
                mr="5px"
                pl="4px"
                pr="4px"
                bg={useColorModeValue('blue.100', 'whiteAlpha.600')}
            >
                프리랜서
            </Text>
            <ResumeYear>20.01 - 20.02</ResumeYear>
            <ResumeCompany>innoIT 홈페이지 퍼블리싱 의뢰건</ResumeCompany>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}>
                <GridItem pt={3} pb={3} mb={6}>
                    <Text fontSize="14px" pb={1}><b>코오롱스포렉스 부산 아시아드점</b></Text>
                </GridItem>
                <GridItem  colSpan={2} pt={3} pb={3} mb={6}>
                    <ListDot>
                        링크 접근불가(http://www.sporexfit-bs.com/)
                    </ListDot>
                    <ListDot>
                        코오롱스포렉스 부산 아시아드점 홈페이지 퍼블리싱
                    </ListDot>
                </GridItem>
            </Grid>
            <Text
                as="b"
                mr="5px"
                pl="4px"
                pr="4px"
                bg={useColorModeValue('blue.100', 'whiteAlpha.600')}
            >
                innoIT
            </Text>
            <ResumeYear>18.04 - 19.12</ResumeYear>
            <ResumeCompany>웹 에이전시</ResumeCompany>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}>
                <GridItem pt={3} pb={3} mb={6}>
                    <Text fontSize="14px" pb={1}><b>학교안전공제중앙회</b></Text>
                    <Text fontSize="12px" pb={1}>19.05 - 19.07</Text>
                </GridItem>
                <GridItem  colSpan={2} pt={3} pb={3} mb={6}>
                    <ListDot>
                        <Link href="https://www.ssif.or.kr/" target="_blank">학교안전공제중앙회</Link> 리뉴얼 및 어드민 개발
                    </ListDot>
                    <ListDot>반응형 홈페이지로 리뉴얼 (프론트 기여도:100%)</ListDot>
                    <ListDot>프론트 레이아웃 설계 및 UI Component 개발</ListDot>
                    <ListDot>Admin 프론트 레이아웃 퍼블리싱</ListDot>
                </GridItem>
                <GridItem pt={3} pb={3} mb={6}>
                    <Text fontSize="14px" pb={1}><b>픽앤아이</b></Text>
                    <Text fontSize="12px" pb={1}>18.04 - 19.12</Text>
                    <Text fontSize="12px" pb={1}>사업종료로 링크 접근 불가</Text>
                </GridItem>
                <GridItem  colSpan={2} pt={3} pb={3} mb={6}>
                    <ListDot>홈페이지 제작 솔루션 PNI(픽앤아이) 개발</ListDot>
                    <ListDot>PNI FRONT(퍼블리싱 기여도 : 60%)</ListDot>
                    <ListDot>Admin (퍼블리싱 기여도 : 100%)</ListDot>
                    <ListDot> 고객 니즈대로 커스터마이징이 가능한 홈페이지 템플릿 (퍼블리싱 및 UI 개발 기여도 100%)</ListDot>
                </GridItem>
            </Grid>
            <Text
                as="b"
                mr="5px"
                pl="4px"
                pr="4px"
                bg={useColorModeValue('blue.100', 'whiteAlpha.600')}
            >
                YellowForm
            </Text>
            <ResumeYear>17.09 - 18.01</ResumeYear>
            <ResumeCompany>웹 에이전시</ResumeCompany>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }}>
                <GridItem pt={3} pb={3} mb={6}>
                    <Text fontSize="14px" pb={1}><b>데이터시각화</b></Text>
                </GridItem>
                <GridItem  colSpan={2} pt={3} pb={3} mb={6}>
                    <ListDot>
                        각 대학교 학과별 연관성을 gephi로 node-edge를 생성하여 추출 후 일러스트레이터로 단과대별 시각화 작업
                    </ListDot>
                </GridItem>
                <GridItem pt={3} pb={3} mb={6}>
                    <Text fontSize="14px" pb={1}><b>Peter</b></Text>
                </GridItem>
                <GridItem  colSpan={2} pt={3} pb={3} mb={6}>
                    <ListDot>
                        선택한 아티스트에 관한 모든 자료를 한눈에 볼 수 있는 iOS 전용 모바일 웹
                    </ListDot>
                    <ListDot>
                        ionic 컴포넌트, SASS를 이용한 퍼블리싱
                    </ListDot>
                </GridItem>
            </Grid>

        </Container>

        <Container maxW="740px"  mt={6} mb={'2rem'} pt={5} pb={'1rem'} borderBottom="1px solid #eee">
            <Heading as="h4" fontSize={'20px'} mb={3}>
                <b>Skills.🔍️</b>
            </Heading>
            <Wrap spacingX="5px" spacingY="3px" align="center" shouldWrapChildren>
                <WrapItem>
                    <Badge>Javascript</Badge>
                </WrapItem>
                <WrapItem>
                    <Badge>React.js</Badge>
                </WrapItem>
                <WrapItem>
                    <Badge>Next.js</Badge>
                </WrapItem>
                <WrapItem>
                    <Badge>HTML</Badge>
                </WrapItem>
                <WrapItem>
                    <Badge>CSS/SASS</Badge>
                </WrapItem>
                <WrapItem>
                    <Badge colorScheme="green">Node.js</Badge>
                </WrapItem>
                <WrapItem>
                    <Badge colorScheme="green">Express</Badge>
                </WrapItem>
                <WrapItem>
                    <Badge colorScheme="purple">Git</Badge>
                </WrapItem>
                <WrapItem>
                    <Badge colorScheme="purple">Github</Badge>
                </WrapItem>
                <WrapItem>
                    <Badge colorScheme="purple">Jira</Badge>
                </WrapItem>
                <WrapItem>
                    <Badge colorScheme="purple">Figma</Badge>
                </WrapItem>
            </Wrap>
        </Container>
        <Container maxW="740px"  mt={6} mb={'2rem'} pt={5} pb={'1rem'} borderBottom="1px solid #eee">
            <Heading as="h4" fontSize={'20px'} mb={3}>
                <b>Education.📖️</b>
            </Heading>
            <BioSection>
                <BioYear>22.08 - </BioYear>
                방송통신대학교
                <BioRole>컴퓨터과학과 편입</BioRole>
            </BioSection>
            <BioSection>
                <BioYear>18.01 - 18.02</BioYear>
                웹퍼블리셔를 위한 Javascript 기초 & D3.js
                <BioRole>JS의 기초, 데이터 시각화 강의 수료</BioRole>
            </BioSection>
            <BioSection>
                <BioYear>17.04 - 17.09</BioYear>
                디지털앱 & 웹컨텐츠 제작
                <BioRole>국비 웹퍼블리셔 과정 수료</BioRole>
            </BioSection>
        </Container>
    </Layout>
)
export default Resume;
export { getServerSideProps } from '../components/chakra'