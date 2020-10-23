import Head from 'next/head'
import Layout from '../components/layout';

export default function Tafsir({}) {

  return (
    <>
      <Head>
        <title>Tafsir | QuranKu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout pageTitle='QuranKu | Tafsir'>
        <main style={{ width: '95%', marginLeft: 'auto', marginRight: 'auto' }} className='my-16 flex flex-col justify-center items-center'>
          <div className='flex flex-col items-center justify-center'>
            <p className='text-xl text-center'>Terima kasih telah menggunakan QuranKu</p>
            <p className='text-xl text-center'>Halaman ini dalam tahap pengambangan</p>
          </div>
        </main>
      </Layout>
    </>
  )
}