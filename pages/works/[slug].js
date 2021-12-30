import { Container } from "@chakra-ui/react";
import { Title } from "../../components/work";
import Layout from "../../components/layouts/article";
import { getPrismicClient } from "../../services/prismic";
import { RichText } from "prismic-dom";
import styles from "./work.module.scss";


const Work = ({ work }) => (
    <Layout title="snowgirl">
      <Container>
        <Title path="Projetos" truePath="works">
          {work.title}
        </Title>

        <main className={styles.container}>
          <article className={styles.post}>
            <h1>{work.title}</h1>

            <div
              className={styles.postContent}
              dangerouslySetInnerHTML={{ __html: work.content }}
            />
          </article>
        </main>
      </Container>
    </Layout>
  );

export default Work;

export const getServerSideProps = async ({ req, params }) => {
  const { slug } = params;
  const prismic = getPrismicClient(req);
  const response = await prismic.getByUID("work", String(slug), {});

  const work = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
  };

  return {
    props: {
      work,
    },
    redirect: 60 * 120, // 2 horas
  };
};
