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
    <Layout title="Oniljang">
        <Container>
            <Title>
                온일장(Oniljang) <Badge>2021.07-2021.12</Badge>
            </Title>
            <P>
                솔루션 커스터마이징 <br/>
                - Front UI 솔루션 전체 커스터 마이징 <br/>
                - 팝업 및 지역 선택 기능 개발 <br/>
                - 온일장 배송 기사님 전용 앱 프론트 SPA 개발 (HTML,CSS,JS,Vue)<br/>
                - vue 활용 배송 리스트 및 배송 준비중 - 완료 및 데이터 상태별 UI 개발
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="http://oniljang.com/" target="_blank">
                        http://oniljang.com/
                        <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Windows/macOS/Linux/iOS/Android</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>HTML,CSS(SCSS),Javascript,Webpack,PHP</span>
                </ListItem>
            </List>

            <WorkImage src="/images/works/oniljang_web01.png" alt="oniljang PC" />
            <WorkImage src="/images/works/oniljang_web02.png" alt="oniljang PC" />
            <WorkImage src="/images/works/oniljang_mobile.png" alt="oniljang Mobile APP" />
        </Container>
    </Layout>

)
export default Sdms;
export { getServerSideProps } from '../../components/chakra'
