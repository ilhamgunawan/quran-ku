import Link from 'next/link';

import BackIcon from '../../assets/icons/back-icon';
import InfoIcon from '../../assets/icons/info-icon';

export type Props = {
  pageTitle: string;
};

export default function LeftButton({ pageTitle }: Props) {
  if (pageTitle.includes('ayat')) {
    return (
      <Link href="/surat">
        <button
          className="h-10 w-10 rounded-full pl-1 leading-none focus:outline-none"
          aria-label="Daftar Surat"
        >
          <BackIcon />
        </button>
      </Link>
    );
  }
  if (pageTitle.includes('Tafsir Surat')) {
    return (
      <Link href="/tafsir">
        <button
          className="h-10 w-10 rounded-full pl-1 leading-none focus:outline-none"
          aria-label="Daftar Tafsir"
        >
          <BackIcon />
        </button>
      </Link>
    );
  }
  if (pageTitle.includes('Beranda')) {
    return (
      <Link href="/tentang">
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full focus:outline-none"
          aria-label="Tentang"
        >
          <InfoIcon fillColor={null} />
        </button>
      </Link>
    );
  }
  return (
    <Link href="/">
      <button
        className="h-10 w-10 rounded-full pl-1 leading-none focus:outline-none"
        aria-label="Beranda"
      >
        <BackIcon />
      </button>
    </Link>
  );
}
