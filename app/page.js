'use client';

import Image from 'next/image';
import oldGame from '../public/images/old-Game.jpg';
import CheckOut from './GenerateButton';
import LocalStorage from './LocalStorage';

export default function Home() {
  return (
    <main>
      <CheckOut />
      <LocalStorage />
      <h1>My media Shop</h1>
      <img src="/images/old-Game.jpg" alt="Old Game" width={350} height={250} />
      <Image
        src="/images/old-Game.jpg"
        alt="Old Game"
        width={350}
        height={250}
      />
      <Image src={oldGame} alt="Old Game" width={350} height={250} />
    </main>
  );
}
