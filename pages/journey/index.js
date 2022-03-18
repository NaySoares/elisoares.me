import {Container, Box, Text } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import Image from 'next/image';

import styles from "./journey.module.scss";

const Journey = () => (
  <Layout title="Posts">
    <Container minWidth="100%" mt={50}>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        marginLeft={"auto"}
        marginRight={"auto"}
        bg={"pink.500"}
        w={200}
        h={45}
        borderRadius={8}
      >
        <Text as={"strong"}>
          O Começo de tudo
        </Text>
      </Box>
      <div className={styles.timeline}>
        <div className={`${styles.container} ${styles.left}`}>
          <div className={styles.date}>Dez 2014 </div>
          <div className={styles.content}>
            <Box display={"flex"} flexDir={"row"} justifyContent={"center"} alignItems={"center"} className={styles.cardHead}>
              <Image className={styles.icon}
                width="50px" height="50px" src="http://github.com/NaySoares.png" alt="pic profile" />
              <Text as={"strong"} fontSize={"lg"} m={"3"} textAlign={"center"}>Ingresso na Faculdade</Text>
            </Box>
            <Box>
              <Text
                as={"p"}
                textAlign={"justify"}
                pt={"3"}
                fontSize={"md"}
                m={0}
                css={{
                  "textIndent": "10px",
                  "line-height": "22px"
                }}
                >
                Fui aprovado para a faculdade de engenharia da computação pela Universidade Federal do Pará - UFPA, reconhecida com uma das melhores do Brasil.
              </Text>
            </Box>
              <Text
                as={"a"}
                fontWeight={"bold"}
                pt={"5"}
                display={"inline-block"}
                marginLeft={"70%"} 
                css={{"transition": "0.3s ease"}}
                _hover={{"cursor": "pointer", "color": "pink.500"}}>
                Ler Post
              </Text>
          </div>
        </div>
        <div className={`${styles.container} ${styles.right}`}>
          <div className={styles.date}>22 Oct</div>
          <div className={styles.content}>
            <Box display={"flex"} flexDir={"row"} justifyContent={"center"} alignItems={"center"} className={styles.cardHead}>
              <Image className={styles.icon}
                width="50px" height="50px" src="http://github.com/NaySoares.png" alt="pic profile" />
              <Text as={"strong"} fontSize={"lg"} m={"3"} textAlign={"center"}>Ingresso na Faculdade</Text>
            </Box>
            <Box>
            <Text
                as={"p"}
                textAlign={"justify"}
                pt={"3"}
                fontSize={"md"}
                m={0}
                css={{
                  "textIndent": "10px",
                  "line-height": "22px"
                }}
                >
                Fui aprovado para a faculdade de engenharia da computação pela Universidade Federal do Pará - UFPA, reconhecida com uma das melhores do Brasil.
              </Text>
            </Box>
              <Text
                as={"a"}
                fontWeight={"bold"}
                pt={"5"}
                display={"inline-block"}
                marginLeft={"70%"}
                css={{"transition": "0.3s ease"}}
                _hover={{"cursor": "pointer", "color": "pink.500"}}>
                Ler Post
              </Text>
          </div>
        </div>
      </div>
      <div className={styles.tail}>
        <Image
          className={styles.icon}
          width="50px"
          height="50px"
          src="http://github.com/NaySoares.png"
          alt="pic profile"
        />
        <p>23/02/2020</p>
        <strong>Na vida somos apenas viajantes e como viajante não cabe a mim decidir onde vou parar, sigo conhecendo, aprendendo e descobrindo coisas novas.</strong>
      </div>
    </Container>
  </Layout>
);

export default Journey;
