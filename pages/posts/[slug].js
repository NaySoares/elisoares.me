import Head from "next/head";
import { getPrismicClient } from "../../services/prismic";
import { RichText } from "prismic-dom";

import styles from "./post.module.scss";

const Post = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title} | E.Soares</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>

          <div
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
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

  console.log(JSON.stringify(response, null, 2));

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
