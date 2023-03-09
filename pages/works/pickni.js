import {
    Container,
    Badge,
    List,
    ListItem, Heading, Center
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'


const Pickni = () => (
    <Layout title="Pick&I">
        <Container maxW="720px">
            <Title>
                픽앤아이(Pick&i) <Badge>2018.04-2019.11</Badge>
            </Title>
            <P>
                홈페이지 제작 솔루션 PNI(픽앤아이) 개발 참여<br/>
                - PNI FRONT(퍼블리싱 기여도 : 60%)<br/>
                - ADMIN (퍼블리싱 기여도 : 100%)<br/>
                - 고객 니즈대로 커스터마이징이 가능한 홈페이지 템플릿 (퍼블리싱 및 UI 개발 기여도 100%)
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <span>
                        사업 종료로 현재 서비스 사용 불가
                    </span>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Windows/macOS/Linux</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>HTML,CSS(SCSS),Javascript,Vue,PHP</span>
                </ListItem>
            </List>
            <Heading as="h4" fontSize={16} my={6}>
                <Center>Pick&I</Center>
            </Heading>
            <WorkImage src="/images/works/pickni/pickni_main.png" alt="pickni PC" />
            <WorkImage src="/images/works/pickni/pickni_preview.jpg" alt="pickni PC" />
            <Heading as="h4" fontSize={16} my={6}>
                <Center>Pick&I 상품 템플릿 </Center>
            </Heading>
            <WorkImage src="/images/works/pickni/themes.png" alt="pickni theme" />
            <WorkImage src="/images/works/pickni/themes02.png" alt="pickni theme" />
            <Heading as="h5" fontSize={14} my={6}>
                <Center>Pick&I 상품 템플릿 SASS 구조</Center>
            </Heading>
            <WorkImage src="/images/works/pickni/sass_layout.png" alt="pickni theme" />

        </Container>
    </Layout>

)
export default Pickni;
export { getServerSideProps } from '../../components/chakra'
