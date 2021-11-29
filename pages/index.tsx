import Header from "../components/header/header";
import MosqueLogo from "../assets/images/nabawi-mosque";
import MenuList from "../components/menu-list/menu-list";
import BasicMeta from "../components/meta/basic-meta";

export default function Home() {
  return (
    <>
      <BasicMeta />
      <Header pageTitle="QuranKu | Beranda" />
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
