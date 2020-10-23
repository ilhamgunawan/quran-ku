import Head from 'next/head'
import Link from 'next/link'
import { getSurahList} from '../api/data-sources';
import Layout from '../components/layout';
import { customButtonBorderTeal } from '../components/button';

export async function getStaticProps() {
  const surahList = await getSurahList();

  return {
    props: {
      surahList
    }
  }
}

export default function DaftarSurat({ surahList }) {
  return (
    <>
      <Head>
        <title>Baca Al-Quran | QuranKu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout pageTitle='QuranKu | Daftar Surat'>
        <main style={{ width: '95%', marginLeft: 'auto', marginRight: 'auto' }} className='my-16'>
          <ul className='w-full flex flex-col items-center'>
            {
              surahList.map((surah) => (
                <li className='w-full' key={surah.nama} >
                  <Link href={`/surat/${surah.nomor}`}>
                  <button className={customButtonBorderTeal}>
                    <div className='flex items-center justify-between'>
                      <span className='mr-5 h-8 w-8 text-xs font-normal leading-none bg-blue-200 text-gray-700 flex justify-center items-center rounded-full'>{surah.nomor}</span>
                      <div className='flex flex-col'>
                        <span className='text-left'>{surah.nama}</span>
                        <span className='text-left text-gray-700 font-light'>{surah.arti}</span>
                      </div>
                    </div>
                    <span className='font-normal text-2xl'>{surah.asma}</span>
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
