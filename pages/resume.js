import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

const Resume = () => (
    <Layout title="Resume">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Resume
            </Heading>
        </Container>
        <Section>
            gg
        </Section>
    </Layout>
)
export default Resume;
export { getServerSideProps } from '../components/chakra'