import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbPatagonia from '../public/images/works/patagonia_thumbnail.png'
import thumbOniljang from '../public/images/works/oniljang_thumbnail.png'
import thumbSdms from '../public/images/works/sdms-web.png'
import thumbBarumi from '../public/images/works/barumi_web.png'
import thumbPickni from '../public/images/works/pickni_thumbnail.png'
import thumbSchoolSafe from '../public/images/works/schoolsafe_web.png'
import thumbYelloform from '../public/images/works/yelloform/yelloform_thumbnail.png'
import thumbT9 from '../public/images/works/t9_thumbnail.png'
import thumbHappy from '../public/images/works/happy_thumbnail.png'

const Works = () => (
  <Layout title="Works">
    <Container maxW="640px">
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
          <WorkGridItem
              id="happy"
              title="해피포인트"
              thumbnail={thumbHappy}
          >
            마일리지 사용 포인트 적립 시스템 운영
          </WorkGridItem>
        </Section>
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
        <Section delay={0.2}>
          <WorkGridItem
            id="sdms"
            title="SDMS/CDMS"
            thumbnail={thumbSdms}
          >
           식품 유통관리 시스템 `SDMS`<br/>
            카드배송 관리시스템 `CDMS`
          </WorkGridItem>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem
              id="t9"
              title="T9"
              thumbnail={thumbT9}
          >
            복권 구매 키오스크와 구매이력 조회 앱
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
              id="barumi"
              title="바르미"
              thumbnail={thumbBarumi}
          >
            바르미&인터불고 호텔 배달 서비스
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
              id="pickni"
              title="픽앤아이"
              thumbnail={thumbPickni}
          >
            커스터마이징 홈페이지 판매 자사 서비스
          </WorkGridItem>
        </Section>
        <Section delay={0.4}>
          <WorkGridItem
              id="school"
              title={["학교안전공제중앙회", <br/>, "학교 안전교육 전문강사 인력풀"]}
              thumbnail={thumbSchoolSafe}
          >
          </WorkGridItem>
        </Section>
        <Section delay={0.4}>
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
