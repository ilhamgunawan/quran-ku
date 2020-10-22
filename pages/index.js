import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout';
import { customButtonTeal } from '../components/button';
import MosqueLogo from '../assets/icons/nabawi-mosque';

export default function Home({}) {

  return (
    <>
      <Head>
        <title>Beranda | QuranKu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout pageTitle='Beranda'>
        <main style={{ width: '95%', margin: 'auto' }} className='flex flex-col justify-center items-center'>
          <div>
            <MosqueLogo />
          </div>
          <ul className='flex flex-col items-center h-48 w-full'>
            <li className='w-full'>
              <Link href='/surat'>
                <button className={customButtonTeal}>
                  Baca Al-Quran
                </button>
              </Link>
            </li>
            <li className='w-full'>
              <Link href='/tafsir'>
                <button className={customButtonTeal}>
                  Baca Tafsir
                </button>
              </Link>
            </li>
            <li className='w-full'>
              <Link href='/murottal'>
                <button className={customButtonTeal}>
                  Murottal
                </button>
              </Link>
            </li>
          </ul>
        </main>
      </Layout>
    </>
  )
}
