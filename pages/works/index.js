import { Container, Heading, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import Section from "../../components/section";
import { WorkGridItem } from "../../components/grid-item";
import Layout from "../../components/layouts/article";
import { getPrismicClient } from "../../services/prismic";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";

const Works = ({ works }) => {
  const gradientText = useColorModeValue("#319795", "#D53F8C");
  const gradientTextSecond = useColorModeValue("#5490FF", "#8257E6");
  return (

    <Layout title="Projetos">
      <Container minWidth="100%" mt={30}>
        <Heading
          as="h2"
          size="xl"
          align="left"
          mb={{base:2, md:5}}
          paddingLeft={2}
          css={{
            "backgroundImage": `linear-gradient(45deg, ${gradientText}, ${gradientTextSecond})`,
            "backgroundSize": "50%",
            "WebkitBackgroundClip": "text",
            "WebkitTextFillColor": "transparent"
          }}>
          Projetos
        </Heading>
        <Section delay={0.1}>
          <SimpleGrid columns={[1, 1, 1]} gap={6}>
            {works.map((work, i) => (
              <div key={work.slug}>
                <Section delay={Number(`0.${i + 1}`)}>
                  <WorkGridItem
                    path="works"
                    id={work.slug}
                    title={work.title}
                    thumbnail={work.cover}
                    stack={work.stack}
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
  )
};

export default Works;

export const getStaticProps = async () => {
  const prismic = getPrismicClient();
  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "work")],
    {
      fetch: ["work.title, work.cover, work.description, work.stack"],
      pageSize: 100,
    }
  );

  const works = response.results.map((work) => {
    return {
      slug: work.uid,
      cover: work.data.cover.url,
      title: RichText.asText(work.data.title),
      description: RichText.asText(work.data.description),
      stack: RichText.asText(work.data.stack)
    };
  });

  return {
    props: {
      works,
    },
    redirect: 60 * 120, // 2 horas
  };
};
