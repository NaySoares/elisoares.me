import { Container, Text, useColorModeValue, Flex, Image } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";

import styles from "./journey.module.scss";
import EventCard from "../../components/event-card";


const Journey = () => {
  const colorDefault = useColorModeValue("#5490FF", "#D53F8C");

  return (
    <Layout title="Posts">
      <Container minWidth="100%" mt={50}>
        <Flex
          className={styles.head}
          alignItems={"center"}
          justifyContent={"center"}
          marginLeft={{ base: 0, md: "auto" }}
          marginRight={"auto"}
          bg={colorDefault}
          w={200}
          h={45}
          borderRadius={8}
        >
          <Text as={"strong"}>
            O começo de tudo
          </Text>
        </Flex>
        <div className={styles.timeline}>
          <div className={styles.lineCenter} style={{ background: `${colorDefault}` }} />
          <div className={`${styles.container} ${styles.left}`}>
            <div className={styles.bubble} style={{ background: `${colorDefault}` }} />
            <div className={styles.stick} style={{ background: `${colorDefault}` }} />
            <div className={styles.date}>Dez 2014 </div>
            <EventCard 
              title={"Ingresso na Faculdade"}
              description={`
                Fui aprovado para a faculdade de engenharia da computação pela Universidade Federal do Pará - UFPA, reconhecida com uma das melhores do Brasil.
              `}
              path={"/"}
              category={"course"}
            />
          </div>

          <div className={`${styles.container} ${styles.right}`}>
            <div className={styles.bubble} style={{ background: `${colorDefault}` }} />
            <div className={styles.stick} style={{ background: `${colorDefault}` }} />
            <div className={styles.date}>Out 2021</div>
            <EventCard 
              title={"Curso: RocketSeat"}
              description={`
                Texto aleatório de uma mensagem sobre um curso.
              `}
              path={"/"}
              category={"review"}
            />
          </div>

          <div className={`${styles.container} ${styles.left}`}>
            <div className={styles.bubble} style={{ background: `${colorDefault}` }} />
            <div className={styles.stick} style={{ background: `${colorDefault}` }} />
            <div className={styles.date}>Out 2021</div>
            <EventCard 
              title={"Curso: RocketSeat"}
              description={`
                Texto aleatório de uma mensagem sobre um curso.
              `}
              path={"/"}
              category={"project"}
            />
          </div>

          <div className={`${styles.container} ${styles.right}`}>
            <div className={styles.bubble} style={{ background: `${colorDefault}` }} />
            <div className={styles.stick} style={{ background: `${colorDefault}` }} />
            <div className={styles.date}>Out 2021</div>
            <EventCard 
              title={"Curso: RocketSeat"}
              description={`
                Texto aleatório de uma mensagem sobre um curso.
              `}
              path={"/"}
              category={"review"}
            />
          </div>
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
            width="50px"
            height="50px"
            src="http://github.com/NaySoares.png"
            alt="pic profile"
          />
          <Text
            as={"p"}
            p={"8px"}
            pb={"2px"}
            fontSize="12px"
            borderBottom="1px solid"
            borderColor={`${colorDefault}`}>
            23/02/2020
          </Text>
          <Text
            as={"strong"}
            align="center"
            m={"20px"}
          >
            Na vida somos apenas viajantes e como viajante não cabe a mim decidir onde vou parar, sigo conhecendo, aprendendo e descobrindo coisas novas.
          </Text>
        </Flex>
      </Container>
    </Layout>
  )
};

export default Journey;
