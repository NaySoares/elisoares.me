import {Container, Box, Text} from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import Image from 'next/image';

import styles from "./journey.module.scss";

const Journey = () => (
  <Layout title="Posts">
    <Container minWidth="100%" mt={50}>
      <div className={styles.timeline}>
        <div className={`${styles.container} ${styles.left}`}>
          <div className={styles.date}>Dez 2014 </div>
          <div className={styles.content}>
            <Box display={"flex"} flexDir={"row"} justifyContent={"center"} alignItems={"center"} className={styles.cardHead}>
              <Image className={styles.icon}
                width="50px" height="50px" src="http://github.com/NaySoares.png" alt="pic profile" />
              <Text as={"strong"} fontSize={"lg"} m={"3"} textAlign={"center"}>Ingresso na Faculdade</Text>
            </Box>
            <div className={styles.cardBody}>
              <Text as={"p"} textAlign={"justify"} pt={"3"}>
                Fui aprovado para a faculdade de engenharia da computação pela Universidade Federal do Pará - UFPA, reconhecida com uma das melhores do Brasil.
              </Text>
            </div>
              <Text as={"a"} fontWeight={"bold"} pt={"5"} display={"inline-block"} marginLeft={"70%"} _hover={{"cursor": "pointer"}}>
                Ler Post
              </Text>
          </div>
        </div>
        <div className={`${styles.container} ${styles.right}`}>
          <div className={styles.date}>22 Oct</div>
          <div className={styles.content}>
            <div className={styles.cardHead}>
              <Image className={styles.icon}
                width="50px" height="50px" src="http://github.com/NaySoares.png" alt="pic profile" />
              <h2>Ingresso na Faculdade</h2>
            </div>
            <div className={styles.cardBody}>
              <p>
                Fui aprovado para a faculdade de engenharia da computação pela Universidade Federal do Pará - UFPA, reconhecida com uma das melhores do Brasil.
              </p>
            </div>
            <div className={styles.cardFooter}>
              <strong>
                Ler Post
              </strong>
            </div>
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
