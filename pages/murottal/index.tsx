import Head from 'next/head';

import FooterPlayer from '../../components/footer/footer-player';
import Header from '../../components/header/Header';
import MurottalList from '../../components/murottal-list/murottal-list';

const Murottal = () => {
  return (
    <>
      <Head>
        <title>{"Murottal | Qur'anKu"}</title>
      </Head>

      <Header pageTitle="Qur'anKu | Murottal" />
      <MurottalList />
      <FooterPlayer />
    </>
  );
};

export default Murottal;
