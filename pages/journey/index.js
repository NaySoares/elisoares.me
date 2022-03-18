import { Container } from "@chakra-ui/react";
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
