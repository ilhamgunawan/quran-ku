import Head from "next/head";

import Header from "../components/header/header";
import TafsirList from "../components/tafsir-list/tafsir-list";

const TafsirListPage = () => {
  return (
    <>
      <Head>
        <title>Tafsir | Qur'anKu</title>
      </Head>

      <Header pageTitle="Qur'anKu | Tafsir" />
      <TafsirList />
    </>
  );
};

export default TafsirListPage;
