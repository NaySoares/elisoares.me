import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import Section from "../../components/section";
import { GridItem } from "../../components/grid-item";

import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';

import snowGirl from "../../public/works/snowGirl.jpg";

const Posts = ({posts}) => (
  <Layout title="Posts">
    <Container>
      <Heading as="h4" fontSize={20} mb={4}>
        Posts
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          { posts.map(post => (
            <GridItem
              key={post.slug}
              title={post.title}
              thumbnail={snowGirl}
              href="/"
            />
          ))}
          
          <GridItem
            title="Primeiro post de teste"
            thumbnail={snowGirl}
            href="/"
          />
          <GridItem
            title="Primeiro post de teste"
            thumbnail={snowGirl}
            href="/"
          />
          <GridItem
            title="Primeiro post de teste"
            thumbnail={snowGirl}
            href="/"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
);

export default Posts;

export const getStaticProps = async () => {
  const prismic = getPrismicClient();
  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post')
  ], {
    fetch: ['post.title'],
    pageSize:  100,
  })

  const posts =  response.results.map(post => {
    return{
      slug: post.uid,
      title: RichText.asText(post.data.title),
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
    }
  })

  return{
    props: {
      posts
    }
  }
}
