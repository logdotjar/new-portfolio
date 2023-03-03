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


const Barumi = () => (
    <Layout title="Patagonia">
        <Container>
            <Title>
                바르미(barumi) <Badge>2020.07-2020.08</Badge>
            </Title>
            <P>
                프론트 페이지 추가 개발 및 DB 쿠폰 운영 <br/>
                - 쿠폰 페이지 / 메인 페이지 / 가게별 페이지 추가 페이지 추가 개발 참여<br/>
                - 고객 구매금액별 쿠폰 발급 DB 관리 <br/>
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="http://bareumi.com/" target="_blank">
                        http://bareumi.com/
                        <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Windows/macOS/Linux/iOS/Android</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>HTML,CSS,Javascript,Vue</span>
                </ListItem>
            </List>

            <WorkImage src="/images/works/barumi_web.png" alt="barumi PC" />
            <WorkImage src="/images/works/barumi_mobile.png" alt="barumi mobile APP" />
        </Container>
    </Layout>

)
export default Barumi;
export { getServerSideProps } from '../../components/chakra'
