import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    Heading,
    Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'


const Yelloform = () => (
    <Layout title="학교안전공제중앙회">
        <Container maxW="720px">
            <Title>
                에이전시 옐로폼 <Badge>2017.09-2018.01</Badge>
            </Title>
            <P>
                반응형 웹 리뉴얼과 어드민<br/>
                - 하이브리드 웹 <br/>
                - 데이터 시각화
            </P>

            <Heading as="h3" fontSize={18} my={6}>
                <Center>하이브리드 웹</Center>
            </Heading>
            <P>선택한 아티스트에 관한 모든 자료를 한눈에 볼 수 있는 iOS 전용 모바일 웹</P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <span>경영악화로 링크 삭제</span>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>iOS/Mac</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>ionic,SASS,Angular,Gulp</span>
                </ListItem>
            </List>
            <WorkImage src="/images/works/yelloform/peter_contents.png" alt="Peter Contents" />
            <WorkImage src="/images/works/yelloform/peter_scroll.gif" alt="Peter Contents gif" />

            <Heading as="h3" fontSize={18} my={6}>
                <Center>학과별 데이터 시각화 </Center>
            </Heading>
            <P>각 대학교 학과별 연관성을 gephi로 node-edge를 생성하여 추출 후 일러스트레이터로 단과대별 시각화 작업</P>
            <WorkImage src="/images/works/yelloform/wise_contents.png" alt="학과별 데이터" />

        </Container>
    </Layout>
)
export default Yelloform;
export { getServerSideProps } from '../../components/chakra'
