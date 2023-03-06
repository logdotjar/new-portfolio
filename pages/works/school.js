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


const SchoolSafe = () => (
    <Layout title="학교안전공제중앙회">
        <Container maxW="720px">
            <Title>
                학교안전공제중앙회 <Badge>2019.05-2019.07</Badge>
            </Title>
            <P>
                반응형 웹 리뉴얼과 어드민<br/>
                - 반응형 홈페이지로 리뉴얼 (프론트 기여도:100%) <br/>
                - 프론트 레이아웃 설계 및 UI Component 개발 <br/>
                - Admin 프론트 레이아웃 퍼블리싱 (프론트 기여도:100%)
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link href="https://www.ssif.or.kr/" target="_blank">
                        https://www.ssif.or.kr/
                        <ExternalLinkIcon mx="2px" mr="1rem"/>
                    </Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Windows/macOS/Linux</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>HTML,CSS,Javascript,PHP</span>
                </ListItem>
            </List>

            <Heading as="h4" fontSize={16} my={6}>
                <Center>학교안전공제중앙회 반응형 웹</Center>
            </Heading>
            <WorkImage src="/images/works/schoolsafe_web.png" alt="학교안전공제중앙회 웹" />

            <Heading as="h4" fontSize={16} my={6}>
                <Center>학교안전공제중앙회 어드민 </Center>
            </Heading>
            <WorkImage src="/images/works/schoolsafe_admin.png" alt="학교안전공제중앙회 어드민" />

        </Container>
    </Layout>
)
export default SchoolSafe;
export { getServerSideProps } from '../../components/chakra'
