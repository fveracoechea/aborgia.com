import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Arelys Borgia</title>
        <meta name="description" content="Insurance Broker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Arelys Borgia <a href="/">Insurance Broker!</a>
        </h1>
      </main>
    </div>
  );
};

export default Home;
