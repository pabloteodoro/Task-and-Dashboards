import { GetServerSideProps } from 'next';
import styles from './styles.module.css';
import Head from 'next/head';
import { getSession } from 'next-auth/react';
import { Textarea } from '../../components/textarea';
import { FiShare2 } from 'react-icons/fi';
import { FaTrash } from 'react-icons/fa';

export default function Dashboard() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Meu Painel de Tarefas </title>
            </Head>
            <main className={styles.main}>
                <section className={styles.content}> 
                    <div className={styles.contentForm}>
                    <h1 className={styles.title}>Qual a sua Tarefa?</h1>
                    
                    <form>
                        <Textarea placeholder="Digite qual a sua tarefa..."/>
                        <div className={styles.checkboxArea}>
                            <input type="checkbox" className={styles.checkbox} />
                            <label>Deixar sua tarefa publica?</label>
                        </div>
                        
                        <button className={styles.button} type="submit">
                            Registrar
                        </button>
                        </form>
                        </div>
                </section>
            </main>

           
        </div>
    );
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
    const session = await getSession({ req });
    // console.log(session);

    if (!session?.user) { // se não tiver logado vai redirecionar pra pagina inicial
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
};