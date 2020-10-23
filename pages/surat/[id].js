import Head from 'next/head'
import Layout from '../../components/layout'
import { getArabicNumber } from '../../utils/utils';
import { getSurah, getSurahNameAndAyat, getAllSurahId } from '../../api/data-sources';

export async function getStaticPaths() {
  const paths = await getAllSurahId();
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const surah = await getSurah(params.id);
  const { name, ayat, nextName, previousName } = await getSurahNameAndAyat(params.id);

  return {
    props: {
      surah,
      name,
      ayat,
      nextName,
      previousName,
      surahId: parseInt(params.id),
    }
  }
}

export default function Surat({ surah, name, ayat, nextName, previousName, surahId }) {
  return (
    <>
      <Head>
        <title>{name} | QuranKu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout pageTitle={`${name} | ${ayat} ayat`} previousId={(surahId - 1).toString()} nextId={(surahId + 1).toString()} previousName={previousName} nextName={nextName} >
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
                          <p className='col-start-1 h-10 w-10 mt-auto mb-2 text-2xl leading-none bg-blue-200 text-gray-700 flex justify-center items-center rounded-full'>{getArabicNumber(ayat.nomor)}</p>
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