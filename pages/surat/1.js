import Head from 'next/head'
import Layout from '../../components/layout'
import { getArabicNumber } from '../../utils/utils';
import { getSurah } from '../../api/data-sources';

export async function getStaticProps() {
  const surah = await getSurah(1);

  return {
    props: {
      surah
    }
  }
}

export default function Surat({ surah }) {
  return (
    <>
      <Head>
        <title>Al Fatihah | QuranKu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout pageTitle='Al Fatihah | 7 ayat' previousId={null} nextId='2' previousName={null} nextName='Al Baqarah'>
        <main style={{ width: '95%', marginLeft: 'auto', marginRight: 'auto' }} className='my-16'>
          <section>
            <ol>
              {
                surah.map((ayat) => {
                  return (
                    <li key={ayat.nomor} className='mb-5 border-b pb-3'>
                      <div className='flex flex-col'>
                        <div className='grid'>
                          <p className='col-start-1 h-8 w-8 mt-auto mb-2 text-2xl leading-none bg-blue-200 text-gray-700 flex justify-center items-center rounded-full'>{getArabicNumber(ayat.nomor)}</p>
                          <p className='col-start-2 ml-auto mr-0 text-4xl text-right'>{ayat.ar}</p>
                        </div>
                        <p className='mt-3 text-gray-700 leading-relaxed'>{ayat.id}</p>
                      </div>
                    </li>
                  )
                })
              }
            </ol>
          </section>
        </main>
      </Layout>

    </>
  )
}