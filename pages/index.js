import Head from 'next/head';

import Header from '../components/header/header';
import MosqueLogo from '../assets/images/nabawi-mosque';
import MenuList from '../components/menu-list/menu-list';

const Home = () => {
  return (
    <>
      <Head>
        <title>Beranda | QuranKu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header pageTitle='QuranKu | Beranda' />
      <main 
        style={{ width: '95%', margin: 'auto' }} 
        className='flex flex-col justify-center items-center'
      >
        <div className='home-logo-container'>
          <MosqueLogo />
        </div>
        <MenuList />
      </main>
    </>
  );
};

export default Home;