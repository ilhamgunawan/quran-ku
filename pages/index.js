import Head from "next/head";

import Header from "../components/header/header";
import MosqueLogo from "../assets/images/nabawi-mosque";
import MenuList from "../components/menu-list/menu-list";

const Home = () => {
  return (
    <>
      <Head>
        <title>Beranda | Qur'anKu</title>
      </Head>
      <Header pageTitle="Qur'anKu | Beranda" />
      <main
        style={{ width: "95%", margin: "7.5rem auto" }}
        className="flex flex-col items-center"
      >
        <div className="home-logo-container">
          <MosqueLogo />
        </div>
        <MenuList />
      </main>
    </>
  );
};

export default Home;
