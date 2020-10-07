import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pristine Tech</title>
      </Head>
      <div className={styles.title} >Pristine Tech</div>
      <div className={styles.description} >Sitio en Construccion</div>
      <img src='under.svg' className={styles.icon} />

    </div>
  )
}
