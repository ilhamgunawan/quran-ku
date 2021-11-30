import Head from "next/head";
import Header from "../components/header/header";
import SadIcon from "../assets/icons/sad-icon";

export default function NotFoundPage() {
  return (
    <>
      <Head>
        <title>Halaman tidak ditemukan | QuranKu</title>
      </Head>
      <Header pageTitle="QuranKu" />
      <main
        style={{ width: "95%", marginLeft: "auto", marginRight: "auto" }}
        className="my-16 flex flex-col items-center"
      >
        <h2 className="font-bold text-6xl">404</h2>
        <p className="text-xl text-center">
          Sayang sekali, halaman yang anda minta tidak ditemukan <SadIcon />
        </p>
      </main>
    </>
  );
};
