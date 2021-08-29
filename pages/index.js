import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Template | Home</title>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Officia amet incididunt do excepteur qui enim eu proident fugiat elit
          mollit est. Ex in dolore labore nulla aliquip. Culpa mollit incididunt
          minim quis ad exercitation ipsum officia consectetur. Quis in cillum
          consequat magna non ipsum.
        </p>
        <p className={styles.text}>
          Officia amet incididunt do excepteur qui enim eu proident fugiat elit
          mollit est. Ex in dolore labore nulla aliquip. Culpa mollit incididunt
          minim quis ad exercitation ipsum officia consectetur. Quis in cillum
          consequat magna non ipsum.
        </p>
        <p className={styles.text}>
          Officia amet incididunt do excepteur qui enim eu proident fugiat elit
          mollit est. Ex in dolore labore nulla aliquip. Culpa mollit incididunt
          minim quis ad exercitation ipsum officia consectetur. Quis in cillum
          consequat magna non ipsum.
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>Next Page</a>
        </Link>
      </div>
    </>
  );
}
