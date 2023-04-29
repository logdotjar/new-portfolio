import {
    Container,
    Badge,
    List,
    ListItem, Heading, Center, Link
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import {ExternalLinkIcon} from "@chakra-ui/icons";


const Happy = () => (
    <Layout title="HappyPoint">
        <Container maxW="720px">
            <Title>
                해피포인트/GFS <Badge>2021-2022</Badge>
            </Title>
            <P>
                - SPC네트윅스에서 운영하는 마일리지 브랜드로 자회사가 공동으로 사용하는 포인트 적립 시스템 이벤트 페이지 개발, 유지보수, 운영<br/>
                - 해피포인트 홈페이지 운영<br/>
                - GFS 홈페이지,어드민 개발,유지보수, 운영
            </P>
            <List ml={4} my={4}>
                <ListItem display="flex" flexWrap="wrap">
                    <Meta>Website</Meta>
                    <span style={{display:'flex',flexWrap:'wrap'}}>
                        <Link href="https://www.happypointcard.com" target="_blank">
                        https://www.happypointcard.com
                        <ExternalLinkIcon mx="2px" />
                        </Link>
                        <Link href="https://www.spcgfs.com" target="_blank" ml="5px">
                            https://www.spcgfs.co.kr
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </span>

                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Windows/macOS/Linux</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>Java(JSP), HTML, CSS, JavaScript</span>
                </ListItem>
            </List>
            <Heading as="h4" fontSize={16} my={6}>
                <Center>해피포인트</Center>
            </Heading>
            <WorkImage src="/images/works/happy_01.png" alt="spc" />
            <WorkImage src="/images/works/happy_02.png" alt="spc" />
            <WorkImage src="/images/works/happy_03.png" alt="spc" />
            <Heading as="h4" fontSize={16} my={6}>
                <Center>GFS </Center>
            </Heading>
            <WorkImage src="/images/works/gfs_web.png" alt="gfs" />
            <WorkImage src="/images/works/gfs_mob.png" alt="gfs" />
        </Container>
    </Layout>

)
export default Happy;
export { getServerSideProps } from '../../components/chakra'
