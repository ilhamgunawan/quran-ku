import Head from 'next/head';

import Header from '../components/header/header';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>Tentang | Qur'anKu</title>
      </Head>
      <Header pageTitle="Qur'anKu | Tentang" />
      <main style={{ width: '95%', marginLeft: 'auto', marginRight: 'auto' }} className='my-16 flex flex-col items-center'>
        <p style={{ maxWidth: '350px' }} className='py-10 text-center text-xl font-normal'><strong>Qur'anKu</strong> adalah aplikasi Al-Quran berbasis web yang dioptimalkan untuk digunakan pada perangkat mobile maupun desktop.</p>
        <section className='mx-8'>
          <h2>Sumber data yang digunakan Qur'anKu:</h2>
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
            <li>
              <ul className='flex flex-wrap'>
                <li className='mr-1'>
                  <p><a href='https://material.io/resources/icons' target='_blank' rel='noreferrer noopener' className='text-blue-400 font-semibold'>Material icons</a>, </p>
                </li>
                <li className='mr-1'>
                  <p><a href='https://www.flaticon.com/authors/vectors-market' target='_blank' rel='noreferrer noopener' className='text-blue-400 font-semibold'>Vectors Market</a></p>
                </li>
                <li className='mr-1'>
                  <p><a href='https://www.flaticon.com/authors/freepik' target='_blank' rel='noreferrer noopener' className='text-blue-400 font-semibold'>Freepik</a>, </p>
                </li>
                <li className='mr-1'>
                  <p><a href='https://www.flaticon.com' target='_blank' rel='noreferrer noopener' className='text-blue-400 font-semibold'>Flaticon</a>, </p>
                </li>
                <li className='mr-1'>
                  <p>untuk sumber icon dan gambar</p>
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <p className='mt-20 text-center'><strong>Qur'anKu</strong> &copy; 2020</p>
        <p className='text-center'>Dibuat oleh <a href='https://ilhamgunawan.now.sh' target='_blank' rel='noreferrer noopener' className='text-blue-400 font-semibold'>Ilham Gunawan</a></p>
      </main>
    </>
  );
};

export default AboutPage;