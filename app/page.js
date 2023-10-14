import Image from 'next/image';
//import ChecekOut from './GenerateButton';
import LocalStorage from './LocalStorage';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main>
      {/* <ChecekOut />*/}
      <LocalStorage />
      <h1>My media Shop</h1>

      <Image
        src="/images/old-Game.jpg"
        alt="Old Game"
        width={350}
        height={250}
        className={styles.image}
      />
    </main>
  );
}
