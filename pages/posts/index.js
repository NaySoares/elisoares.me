import { Container, Heading, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import Section from "../../components/section";
import { GridItem } from "../../components/grid-item";

import { getPrismicClient } from "../../services/prismic";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";

const Posts = ({ posts }) => {
  const gradientText = useColorModeValue("#319795", "#D53F8C");
  const gradientTextSecond = useColorModeValue("#5490FF", "#8257E6");

  return (
    <Layout title="Posts">
      <Container maxW="100%" mt={30}>
        <Heading
          as="h2"
          size="xl"
          align="left"
          mb={{ base: 2, md: 5 }}
          paddingLeft={2}
          css={{
            "backgroundImage": `linear-gradient(45deg, ${gradientText}, ${gradientTextSecond})`,
            "backgroundSize": "50%",
            "WebkitBackgroundClip": "text",
            "WebkitTextFillColor": "transparent"
          }}>
          Posts
        </Heading>
        <Section delay={0.1}>
          <SimpleGrid columns={[1, 1, 1]} gap={6}>
            {posts.map((post) => (
              <GridItem
                key={post.slug}
                title={post.title}
                href={`/posts/${post.slug}`}
                date={post.updatedAt}
              />
            ))}
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  );
}

export default Posts;

export const getStaticProps = async () => {
  const prismic = getPrismicClient();
  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "post")],
    {
      fetch: ["post.title"],
      pageSize: 100,
    }
  );

  const posts = response.results.map((post) => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      updatedAt: new Date(post.last_publication_date).toLocaleDateString(
        "pt-BR",
        {
          month: "long",
          year: "numeric",
        }
      ),
    };
  });

  return {
    props: {
      posts,
    },
    redirect: 60 * 120, // 2 horas
  };
};
