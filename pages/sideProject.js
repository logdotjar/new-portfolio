import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbFitness from '../public/images/contents/react-fitness.png';
import thumbNetflix from '../public/images/contents/netflix.png';
import thumbJweet from '../public/images/contents/react.png';
import thumbPortfolio from '../public/images/contents/react-portfolio.png';

const SidePrjoect = () => (
    <Layout title="React">
        <Container maxW="640px">
            <Heading as="h3" fontSize={20} mb={4}>
                React
            </Heading>

            <Section delay={0.1}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        title="RapidApi를 이용한 Fitness 홈페이지"
                        thumbnail={thumbFitness}
                        href="https://github.com/logdotjar/react-fitness"
                    />
                    <GridItem
                        title="포트폴리오"
                        thumbnail={thumbPortfolio}
                        href="https://github.com/tigerenergy/nextjs"
                    />
                </SimpleGrid>
            </Section>

            <Section delay={0.3}>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <GridItem
                        title="넷플릭스"
                        thumbnail={thumbNetflix}
                        href="https://642ccab921493d24a8909a1f--preeminent-selkie-597d36.netlify.app/"
                    />
                    <GridItem
                        title="리액트로 나만의 Jweet"
                        thumbnail={thumbJweet}
                        href="https://github.com/logdotjar/jweet"
                    />
                </SimpleGrid>
            </Section>

        </Container>
    </Layout>
)

export default SidePrjoect
export { SidePrjoect } from '../components/chakra'
