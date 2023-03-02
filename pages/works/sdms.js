import {
    Container,
    Badge,
    Link,
    List,
    ListItem
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'


const Sdms = () => (
    <Layout title="Sdms">
        <Container>
            <Title>
                SDMS <Badge>2020.06-2021.12</Badge>
            </Title>
            <P>
                어드민 웹 전체 레이아웃 설계 , 공통 UI Component <br/>
                - 로그인 페이지 <br/>
                - 전체 페이지 물류별 정보 검색 조건 UI <br/>
                - vue 활용 GNB, GNB 메뉴별 즐겨찾기 기능 <br/>
                - vue 문법 활용한 반복되는 조건 레이아웃 설계 <br/>
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://sdms-front.spc.co.kr/" target="_blank">
                        https://sdms-front.spc.co.kr/
                        <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Windows/macOS/Linux</span>
                </ListItem>
                <ListItem>
                    <Meta>Front Stack</Meta>
                    <span>HTML,CSS,Javascript,Vue</span>
                </ListItem>
            </List>

            <WorkImage src="/images/works/sdms-web.png" alt="sdms" />
            <WorkImage src="/images/works/sdms-web-mob.png" alt="sdms" />
        </Container>
    </Layout>

)
export default Sdms;
export { getServerSideProps } from '../../components/chakra'
