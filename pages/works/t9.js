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


const T9 = () => (
    <Layout title="Sdms">
        <Container maxW="720px">
            <Title>
                T9 <Badge>2020.06-2020.09</Badge>
            </Title>
            <P>
                복권 구매시 데이터를 확인 할 수 있는 앱과 복권 구매 키오스크 개발참여<br/>
                앱 : SPA 방식의 프론트 개발<br/>
                - vue 활용 컴포넌트 및 데이터 정렬 <br/>
                - 키오스크 화면 웹 퍼블리싱
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://www.t9company.co.kr/" target="_blank">
                        https://www.t9company.co.kr/
                        <ExternalLinkIcon mx="2px" mr="1rem"/>
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>iOS/Android/Kiosk</span>
                </ListItem>
            </List>

            <WorkImage src="/images/works/t9.png" alt="t9" />
        </Container>
    </Layout>
)
export default T9;
export { getServerSideProps } from '../../components/chakra'
