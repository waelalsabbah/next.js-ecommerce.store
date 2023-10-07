'use client';
import { useRouter } from 'next/navigation';
import style from './CheckOut.module.scss';

export default function CheckOut() {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => {
          router.refresh();
        }}
      >
        {' '}
        CheckOut
      </button>
    </div>
  );
}
