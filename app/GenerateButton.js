'use client';
import { useRouter } from 'next/navigation';
import style from './GenerateButton.module.scss';

export default function GenerateButton() {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => {
          router.refresh();
        }}
      >
        {' '}
        Generate
      </button>
    </div>
  );
}
