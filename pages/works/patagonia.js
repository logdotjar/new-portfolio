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


const Patagonia = () => (
    <Layout title="Patagonia">
        <Container maxW="720px">
            <Title>
                파타고니아(Patagonia Kr) <Badge>2022.02-2022.08</Badge>
            </Title>
            <P>
                솔루션 커스터마이징 <br/>
                - 반응형 홈페이지로 커스텀 <br/>
                - 미국 본사와 같은 UI의 컨텐츠 페이지와 쇼핑몰 프론트 커스텀 개발 <br/>
                - 프론트 레이아웃 및 컨텐츠 페이지 제작 가이드 작성<br/>
                - 프로젝트 협업을 위한 프론트 가이드 문서 작성
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://www.patagonia.co.kr/" target="_blank">
                        https://www.patagonia.co.kr/
                        <ExternalLinkIcon mx="2px" />
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Windows/macOS/Linux</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>HTML,CSS(SASS),Javascript,Webpack,PHP</span>
                </ListItem>
            </List>

            <WorkImage src="/images/works/patagonia_web.png" alt="patagonia PC" />
            <WorkImage src="/images/works/patagonia_menu.png" alt="patagonia PC" />
            <WorkImage src="/images/works/patagonia_mobile.png" alt="patagonia Mobile" />
        </Container>
    </Layout>

)
export default Patagonia;
export { getServerSideProps } from '../../components/chakra'
