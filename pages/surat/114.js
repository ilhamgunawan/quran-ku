import Head from 'next/head'
import Layout from '../../components/layout'
import { getArabicNumber } from '../../utils/utils';
import { getSurah } from '../../api/data-sources';

export async function getStaticProps() {
  const surah = await getSurah(114);

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
        <title>An Naas | QuranKu</title>
      </Head>

      <Layout pageTitle='An Naas | 6 ayat' previousId='113' nextId={null} previousName='Al Falaq' nextName={null}>
        <main style={{ width: '95%', marginLeft: 'auto', marginRight: 'auto' }} className='my-16'>
          <section>
            <ol>
              <li className='mb-5 border-b pb-3'>
                <div className='flex flex-col'>
                  <div className='grid'>
                    <p className='col-start-2 ml-auto mr-0 text-4xl text-right'>بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
                  </div>
                  <p className='mt-3 text-gray-700 leading-relaxed'>Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.</p>
                </div>
              </li>
              {
                surah.map((ayat) => {
                  return (
                    <li key={ayat.nomor} className='mb-5 border-b pb-3'>
                      <div className='flex flex-col'>
                        <div className='grid'>
                          <p className='col-start-1 h-8 w-8 mt-auto mb-2 text-2xl leading-none bg-blue-200 text-gray-700 flex justify-center items-center rounded-full'>{getArabicNumber(ayat.nomor)}</p>
                          <p className='col-start-2 ml-auto mr-0 text-4xl text-right'>{(ayat.ar).replace('بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ', '')}</p>
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