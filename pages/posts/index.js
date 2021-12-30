import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import Section from "../../components/section";
import { GridItem } from "../../components/grid-item";
import Link from "next/link";

import { getPrismicClient } from "../../services/prismic";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";

const Posts = ({ posts }) => (
  <Layout title="Posts">
    <Container>
      <Heading as="h4" fontSize={20} mb={4}>
        Posts
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          {posts.map((post) => (
            <Link href={`/posts/${post.slug}`}>
              <a>
                <GridItem
                  key={post.slug}
                  title={post.title}
                  thumbnail={post.cover}
                />
              </a>
            </Link>
          ))}
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
);

export default Posts;

export const getStaticProps = async () => {
  const prismic = getPrismicClient();
  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "post")],
    {
      fetch: ["post.title, post.cover"],
      pageSize: 100,
    }
  );

  const posts = response.results.map((post) => {
    return {
      slug: post.uid,
      cover: post.data.cover.url,
      title: RichText.asText(post.data.title),
    };
  });

  return {
    props: {
      posts,
    },
    redirect: 60 * 120, // 2 horas
  };
};
