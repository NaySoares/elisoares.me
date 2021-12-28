import Head from "next/head";
import { getPrismicClient } from "../../services/prismic";
import { RichText } from "prismic-dom";

import { Heading, Box, Text} from "@chakra-ui/react";

const Post = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title} | E.Soares</title>
      </Head>

      <main>
        <article>
          <Heading as="h2" variant="page-title" my={4}>
            {post.title}
          </Heading>
          <Text my={2}>{post.updatedAt}</Text>

          <Box dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </main>
    </>
  );
};

export default Post;

export const getServerSideProps = async ({ req, params }) => {
  const { slug } = params;
  const prismic = getPrismicClient(req);
  const response = await prismic.getByUID("post", String(slug), {});

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      "pt-BR",
      {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }
    ),
  };

  return {
    props: {
      post,
    },
    redirect: 60 * 120, // 2 horas
  };
};
