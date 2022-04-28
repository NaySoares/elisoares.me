import { Container, SimpleGrid } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import Section from "../../components/section";
import { GridItem } from "../../components/grid-item";

import { getPrismicClient } from "../../services/prismic";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";
import { Title } from "../../components/texts/title.js";

const Posts = ({ posts }) => {
  return (
    <Layout title="Posts">
      <Container maxW="100%" mt={30}>
        <Title>
          Posts
        </Title>
        <Section delay={0.1}>
          <SimpleGrid columns={[1, 1, 1]} gap={6}>
            {posts.map((post) => (
              <GridItem
                key={post.slug}
                title={post.title}
                tags={post.tags}
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
      fetch: ["post.title", "post.tag"],
      pageSize: 100,
    }
  );

  const posts = response.results.map((post) => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      tags: post.tags,
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
