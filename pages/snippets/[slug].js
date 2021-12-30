import { Title } from "../../components/work";
import Layout from "../../components/layouts/article";
import { CopyBlock, dracula } from "react-code-blocks";
import { getPrismicClient } from "../../services/prismic";
import { RichText } from "prismic-dom";
import styles from "./snippet.module.scss";

const Snippet = ({ snippet }) => (
  <Layout title="Snippet">
    <Title
      path="Snippets"
      truePath="snippets"  
    >{snippet.title}</Title>

    <main className={styles.container}>
      <article className={styles.post}>
        <div className="codeBlock">
          <CopyBlock
            language={snippet.language}
            text={snippet.code}
            showLineNumbers={false}
            theme={dracula}
            wrapLines={true}
            codeBlock
          />
        </div>
        <h1>{snippet.title}</h1>
        <time>{snippet.updatedAt}</time>

        <div
          className={styles.postContent}
          dangerouslySetInnerHTML={{ __html: snippet.content }}
        />
      </article>
    </main>
  </Layout>
);

export default Snippet;

export const getServerSideProps = async ({ req, params }) => {
  const { slug } = params;
  const prismic = getPrismicClient(req);
  const response = await prismic.getByUID("snippet", String(slug), {});

  const snippet = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    language: RichText.asText(response.data.body[0].primary.language),
    code: RichText.asText(response.data.body[1].primary.code),
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
      snippet,
    },
    redirect: 60 * 120, // 2 horas
  };
};
