import { Container, Text, useColorModeValue, Flex, Image } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";

import styles from "./journey.module.scss";
import EventCard from "../../components/event-card";

import { getPrismicClient } from "../../services/prismic";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";
import { CardAnimationLeft, CardAnimationRight } from "../../components/layouts/card";
import { Title } from "../../components/texts/title.js";


const Journey = ({ timeline, currentDate }) => {
  const colorDefault = useColorModeValue("#5490FF", "#D53F8C");

  return (
    <Layout title="Jornada">
      <Container minWidth="100%" mt={50}>
        <Title fontSize="lg">
          Esta é a minha jornada, ela é atualizada todos os dias. Role a tela e aproveite comigo toda a minha hist&oacute;ria na programaç&atilde;o.
        </Title>
        <Flex
          className={styles.head}
          alignItems="center"
          justifyContent="center"
          marginLeft={{ base: 0, md: "auto" }}
          marginRight="auto"
          bg={colorDefault}
          w={200}
          h={45}
          borderRadius={8}
        >
          <Text as="strong">
            O começo de tudo
          </Text>
        </Flex>
        <div className={styles.timeline}>
          <div className={styles.lineCenter} style={{ background: `${colorDefault}` }} />

          {timeline.map((card, index) => {
            if (index % 2 === 0) {
              return (
                <CardAnimationRight key={card.slug}>
                  <div className={`${styles.container} ${styles.left}`}>
                    <div className={styles.bubble} style={{ background: `${colorDefault}` }} />
                    <div className={styles.stick} style={{ background: `${colorDefault}` }} />
                    <div className={styles.date}>{card.date}</div>
                    <EventCard
                      title={card.title}
                      description={card.description}
                      path={card.path}
                      category={card.category}
                      attachment={card.attachment}
                    />
                  </div>
                </CardAnimationRight>
              )
            } else {
              return (
                <CardAnimationLeft key={card.slug}>
                  <div className={`${styles.container} ${styles.right}`}>
                    <div className={styles.bubble} style={{ background: `${colorDefault}` }} />
                    <div className={styles.stick} style={{ background: `${colorDefault}` }} />
                    <div className={styles.date}>{card.date}</div>
                    <EventCard
                      title={card.title}
                      description={card.description}
                      path={card.path}
                      category={card.category}
                      attachment={card.attachment}
                    />
                  </div>
                </CardAnimationLeft>
              )
            }
          })}
        </div>

        <Flex
          direction="column"
          align="center"
          justifyContent="center"
          p={{ base: "15px 0", md: 0 }}
          borderRadius={{ base: "15px", md: 0 }}
          border={{ base: `2px dotted ${colorDefault}`, md: 0 }}
        >
          <Image
            borderRadius="full"
            width="60px"
            height="60px"
            css={{ "border": `2px solid ${colorDefault}` }}
            src="http://github.com/NaySoares.png"
            alt="pic profile"
          />
          <Text
            as="p"
            p="8px"
            pb="2px"
            fontSize="12px"
            borderBottom="1px solid"
            borderColor={`${colorDefault}`}>
            {currentDate}
          </Text>
          <Text
            as="strong"
            align="center"
            m="20px"
          >
            Na vida somos apenas viajantes e como viajante não cabe a mim decidir onde vou parar, sigo conhecendo, aprendendo e descobrindo coisas novas.
          </Text>
        </Flex>
      </Container>
    </Layout>
  )
};

export default Journey;

export const getStaticProps = async () => {
  const prismic = getPrismicClient();
  const response = await prismic.query(
    [Prismic.predicates.at("document.type", "timeline")],
    {
      fetch: ["timeline.title, timeline.description, timeline.category, timeline.path, timeline.attachment, timeline.date"],
      pageSize: 100,
    }
  );

  let timeline = response.results.map((item) => {
    return {
      slug: item.uid,
      title: RichText.asText(item.data.title),
      description: RichText.asText(item.data.description),
      category: RichText.asText(item.data.category),
      path: RichText.asText(item.data.path),
      attachment: RichText.asText(item.data.attachment),
      date: RichText.asText(item.data.date)
    };
  });

  timeline = timeline.slice(0).reverse();

  const currentDate = new Date().toLocaleDateString(
    "pt-BR",
    {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    }
  )

  return {
    props: {
      timeline,
      currentDate
    },
    redirect: 60 * 120, // 2 horas
  };
};
