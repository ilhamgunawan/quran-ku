import Head from 'next/head';

import Header from '../components/header/header';
import FooterPlayer from '../components/footer/footer-player';
import MurottalList from '../components/murottal-list/murottal-list';

const Murottal = ({}) => {
  return (
    <>
      <Head>
        <title>Murottal | QuranKu</title>
      </Head>

      <Header pageTitle='QuranKu | Murottal' />
      <MurottalList />
      <FooterPlayer />
    </>
  );
};

export default Murottal;