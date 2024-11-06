import Head from 'next/head';
import styles from '../styles/home.module.css';
import Image from 'next/image';

import heroImg from '../../public/assets/hero.png';
import { db } from '../services/firebaseConnection';
import { collection, getDocs, } from 'firebase/firestore';

import { GetStaticProps } from 'next';

interface HomeProps {
  posts: number;
  comments: number;
}

export default function Home({posts, comments}: HomeProps) {
  return (
    
   
      <div className={styles.container}>
        <Head>
          <title>Tarefas+ | Organize suas tarefas de forma fácil</title>
        </Head>
        <main className={styles.main}>
          <div className={styles.logoContent}>
          <Image 
          className={styles.hero} 
          alt='Logo Tarefas+' 
          src={heroImg} 
          priority>

          </Image>
          
            
           
          </div>
          <h1 className={styles.title}>
            Sistema Feito para você organizar <br/>
            seus estudos e tarefas
          </h1>

          <div className={styles.infoContent}>
            <section className={styles.box}>
              <span>+{posts} Postagens</span>
            </section>
            <section className={styles.box}>
              <span>+{comments} Comentários</span>

            </section>
          </div>
        </main>
        </div>
    
  );
}

export const getStaticProps: GetStaticProps = async () => {

  const commentRef = collection(db, 'comments');

  const postRef = collection(db, 'tasks');

  const commentSnapshot = await getDocs(commentRef);
  const postSnapshot = await getDocs(postRef);

   return {
    props: {
      posts: postSnapshot.size || 0,
      comments: commentSnapshot.size || 0
    },
    revalidate: 60, // atualiza a cada 60 segundos
   };
};
