import Head from "next/head";
import Header from "../../components/header/header";
import SurahList from "../../components/surah-list/SurahList";
import { getSurahList } from '../../data-sources/data-sources';

export type Props = {
  surahList: any[]
};

export const getStaticProps = async () => {
  const surahList = await getSurahList();

  return {
    props: {
      surahList,
    }
  };
};

export default function SuratListPage(props: Props) {
  return (
    <>
      <Head>
        <title>Baca Al-Qur'an | Qur'anKu</title>
      </Head>
      <Header pageTitle="Qur'anKu | Daftar Surat" />
      <SurahList surahList={props.surahList} surahItemLinkPrefix='surat' />
    </>
  );
}
