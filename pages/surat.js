import Head from 'next/head'
import Link from 'next/link'
import { getSurahList } from '../api/api';
import Layout from '../components/layout';
import { customButtonTeal, customButtonBlue, customButtonBorderTeal } from '../components/button';

export default function DaftarSurat({ surahList }) {
  return (
    <>
      <Head>
        <title>Baca Al-Quran | QuranKu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout pageTitle='Daftar Surat'>
        <main style={{ width: '95%', marginLeft: 'auto', marginRight: 'auto' }} className='my-20'>
          <Link href='/'>
            <button className={`${customButtonBlue} mx-auto mb-5`}>
              <span className='text-xl mt-1'>&crarr;</span>
              <span>kembali ke beranda</span>
            </button>
          </Link>
          <ul className='w-full flex flex-col items-center'>
            {
              surahList.map((surah) => (
                <li className='w-full' key={surah.name} >
                  <Link href={`/surat/${surah.number_of_surah}`}>
                  <button className={customButtonBorderTeal}>
                    <span>{surah.number_of_surah}</span>
                    <span>{surah.name}</span>
                  </button>
                  </Link>
                </li>
              ))
            }
          </ul>
        </main>
      </Layout>

    </>
  )
}

export async function getStaticProps() {
  const surahList = await getSurahList();

  return {
    props: {
      surahList
    }
  }
}
