import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbPatagonia from '../public/images/works/patagonia_web.png'
import thumbOniljang from '../public/images/works/oniljang_web01.png'
import thumbSdms from '../public/images/works/sdms-web.png'
import thumbBarumi from '../public/images/works/barumi_web.png'
import thumbPickni from '../public/images/works/pickni/thumbnail.png'
import thumbSchoolSafe from '../public/images/works/schoolsafe_thumbnail.png'
import thumbYelloform from '../public/images/works/yelloform/yelloform_thumbnail.png'
import thumbT9 from '../public/images/works/t9_thumbnail.png'

const Works = () => (
  <Layout title="Works">
    <Container maxW="640px">
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
              id="patagonia"
              title="파타고니아"
              thumbnail={thumbPatagonia}
          >
            파타고니아 코리아 통합 쇼핑몰 리뉴얼
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
              id="oniljang"
              title="온일장"
              thumbnail={thumbOniljang}
          >
            B2B 식자재 쇼핑몰
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
            id="sdms"
            title="SDMS/CDMS"
            thumbnail={thumbSdms}
          >
           식품 유통관리 시스템 `SDMS`<br/>
            카드배송 관리시스템 `CDMS`
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
              id="t9"
              title="T9"
              thumbnail={thumbT9}
          >
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
              id="barumi"
              title="바르미"
              thumbnail={thumbBarumi}
          >
            바르미&인터불고 호텔 배달 서비스
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
              id="pickni"
              title="픽앤아이"
              thumbnail={thumbPickni}
          >
            커스터마이징 홈페이지 판매 자사 서비스
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
              id="school"
              title="학교안전공제중앙회"
              thumbnail={thumbSchoolSafe}
          >
            리뉴얼 구축
          </WorkGridItem>
        </Section>
        <Section delay={0.1}>
          <WorkGridItem
              id="yelloform"
              title="에이전시 옐로폼"
              thumbnail={thumbYelloform}
          >
          </WorkGridItem>
        </Section>
      </SimpleGrid>

    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
