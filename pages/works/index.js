import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../../components/section";
import { WorkGridItem } from "../../components/grid-item";
import Layout from "../../components/layouts/article";
import { getPrismicClient } from "../../services/prismic";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";

const Works = ({ works }) => (
  <Layout title="Posts">
    <Container>
      <Heading as="h4" fontSize={20} mb={4}>
        Projetos
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {works.map((work, i) => (
            <div key={work.slug}>
              <Section delay={Number(`0.${i + 1}`)}>
                <WorkGridItem
                  path="works"
                  id={work.slug}
                  title={work.title}
                  thumbnail={work.cover}
                >
                  {work.description}
                </WorkGridItem>
              </Section>
            </div>
          ))}
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
);

export default Works;

export const getStaticProps = async () => {
  const prismic = getPrismicClient();
  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "work")],
    {
      fetch: ["work.title, work.cover, work.description"],
      pageSize: 100,
    }
  );

  const works = response.results.map((work) => {
    return {
      slug: work.uid,
      cover: work.data.cover.url,
      title: RichText.asText(work.data.title),
      description: RichText.asText(work.data.description),
    };
  });

  return {
    props: {
      works,
    },
    redirect: 60 * 120, // 2 horas
  };
};
