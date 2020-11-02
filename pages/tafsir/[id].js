import Head from "next/head";
import { useContext, useEffect } from "react";

import { Context } from "../../state/store";
import { setCurrentAyatNumberList } from "../../state/actions";
import { mapTafsirObjectToArray, getAyatNumberList } from "../../utils/utils";
import {
  getAllSurahIdUnfiltered,
  getSurahNameAndAyat,
  getTafsir,
} from "../../data-sources/data-sources";

import Header from "../../components/header/header";
import FooterTafsir from "../../components/footer/footer-tafsir";
import AyatTafsirListItem from "../../components/ayat-list/ayat-tafsir-list-item";

export const getStaticPaths = async () => {
  const paths = await getAllSurahIdUnfiltered();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { nextName, previousName } = await getSurahNameAndAyat(params.id);
  const { name, tafsir, source } = await getTafsir(params.id);

  return {
    props: {
      name,
      surahId: params.id,
      tafsir,
      source,
      nextName,
      previousName,
    },
  };
};

const TafsirDetail = ({
  surahId,
  tafsir,
  name,
  source,
  nextName,
  previousName,
}) => {
  const tafsirArray = mapTafsirObjectToArray(tafsir);
  const [state, dispatch] = useContext(Context);

  useEffect(() => {
    dispatch(setCurrentAyatNumberList(getAyatNumberList(tafsirArray)));
  }, [surahId]);

  return (
    <>
      <Head>
        <title>Tafsir Qur'an Surat {name} | Qur'anKu</title>
      </Head>
      <Header pageTitle={`Tafsir Surat ${name}`} />
      <main
        style={{ width: "95%", marginLeft: "auto", marginRight: "auto" }}
        className="my-16"
      >
        <section className="bg-orange-200 p-4 mb-4 rounded-lg">
          <p className="text-yellow-800 leading-loose">
            <strong>Catatan</strong>: Tafsir Quran Surat {name} berdasarkan
            sumber dari {source}
          </p>
        </section>
        <ul>
          {tafsirArray.map((ayat) => (
            <AyatTafsirListItem key={ayat.ayatNumber} {...ayat} />
          ))}
        </ul>
      </main>
      {surahId ? (
        <FooterTafsir
          previousId={(parseInt(surahId) - 1).toString()}
          nextId={(parseInt(surahId) + 1).toString()}
          previousName={previousName}
          nextName={nextName}
        />
      ) : (
        <FooterTafsir
          previousId={null}
          nextId={null}
          previousName="Loading"
          nextName="Loading"
        />
      )}
    </>
  );
};

export default TafsirDetail;
