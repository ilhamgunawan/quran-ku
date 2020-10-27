import Head from 'next/head';

import Header from '../components/header/header';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Tentang | QuranKu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header pageTitle='QuranKu | Tentang' />
      <main style={{ width: '95%', marginLeft: 'auto', marginRight: 'auto' }} className='my-16 flex flex-col items-center'>
        <p style={{ maxWidth: '350px' }} className='py-10 text-center text-xl font-normal'><strong>QuranKu</strong> adalah aplikasi Al-Quran berbasis web yang dioptimalkan untuk digunakan pada perangkat mobile maupun desktop.</p>
        <section className='mx-8'>
          <h2>Sumber data yang digunakan QuranKu:</h2>
          <ul className='list-disc'>
            <li>
              <p><a href='https://github.com/rioastamal/quran-json' target='_blank' rel='noreferrer noopener' className='text-blue-400 font-semibold'>quran-json</a> sebagai sumber data Al-Quran dan terjemahan Bahasa Indonesia</p>
            </li>
            <li>
              <p><a href='https://github.com/penggguna/QuranJSON' target='_blank' rel='noreferrer noopener' className='text-blue-400 font-semibold'>QuranJson</a> sebagai sumber data mp3 murottal Al-Quran</p>
            </li>
            <li>
              <p><a href='https://quran.kemenag.go.id/' target='_blank' rel='noreferrer noopener' className='text-blue-400 font-semibold'>Quran Kemenag</a> sebagai sumber data tafsir Al-Quran</p>
            </li>
          </ul>
        </section>
        <p className='mt-20 text-center'><strong>QuranKu</strong> &copy; 2020</p>
        <p className='text-center'>Dibuat oleh <a href='https://ilhamgunawan.now.sh' target='_blank' rel='noreferrer noopener' className='text-blue-400 font-semibold'>Ilham Gunawan</a></p>
      </main>
    </>
  );
};

export default AboutPage;