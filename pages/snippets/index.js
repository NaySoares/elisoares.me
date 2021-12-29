import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Section from "../../components/section";
import { WorkGridItem } from "../../components/grid-item";
import { SnippetGridItem } from "../../components/grid-item";
import Layout from "../../components/layouts/article";
import Link from 'next/link';

import { getPrismicClient } from "../../services/prismic";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";

import snowGirl from "../../public/works/snowGirl.jpg";

const Snippets = ({ snippets }) => (
  <Layout title="Posts">
    <Container>
      <Heading as="h4" fontSize={20} mb={4}>
        Snippets
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1, 1, 1]} gap={1}>
          {snippets.map((snippet) => (
            <Link href={`/snippets/${snippet.slug}`}>
              <a>
                <SnippetGridItem
                  key={snippet.slug}
                  title={snippet.title}
                  language="JavaScript"
                  date="Maio de 2021"
                />
              </a>
            </Link>
          ))}
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
);

export default Snippets;

export const getStaticProps = async () => {
  const prismic = getPrismicClient();
  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "snippet")],
    {
      fetch: ["snippet.title", "snippet.cover"],
      pageSize: 100,
    }
  );

  const snippets = response.results.map((snippet) => {
    return {
      slug: snippet.uid,
      cover: snippet.data.cover.url,
      title: RichText.asText(snippet.data.title),
      updatedAt: new Date(snippet.last_publication_date).toLocaleDateString(
        "pt-BR",
        {
          day: "2-digit",
          month: "long",
          year: "numeric",
        }
      ),
    };
  });

  return {
    props: {
      snippets,
    },
    redirect: 60 * 120, // 2 horas
  };
};