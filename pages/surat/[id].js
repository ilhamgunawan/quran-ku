import Head from 'next/head'
import Link from 'next/link';

import { getAllSurahId, getSurah } from '../../api/api';

export default function Surat({ surah }) {
  return (
    <div>
      <Head>
        <title>{surah.name} | QuranKu</title>
      </Head>

      <header>
        <h1>QuranKu / Surat {surah.name}</h1>
        <Link href='/surat'>
          <a>&crarr; kembali ke daftar surat</a>
        </Link>
      </header>

      <main>
        <section>
          <div>
            <span>Nama surat</span>
            <span>Arti</span>
            <span>Surat ke</span>
            <span>Jumlah ayat</span>
            <span>Diturunkan di</span>
          </div>
          <div>
            <span>{surah.name}</span>
            <span>{surah.name_translations.id}</span>
            <span>{surah.number_of_surah}</span>
            <span>{surah.number_of_ayah}</span>
            <span>{surah.place}</span>
          </div>
        </section>
        <section>
          <div>
            <span>
              <Link href={`/tafsir/${surah.number_of_surah}`}>
                <a>Baca tafsir {surah.name}</a>
              </Link>
            </span>
          </div>
        </section>
        <section>
          <div>
            <span>Dengarkan murottal {surah.name}</span>
          </div>
        </section>
        <section>
          <ol>
            {
              surah.verses.map((ayat) => {
                return (
                  <li key={ayat.number}>
                    <div>
                      <p>{ayat.text}</p>
                      <p>{ayat.translation_id}</p>
                    </div>
                  </li>
                )
              })
            }
          </ol>
        </section>
      </main>
    </div>
  )
}

export async function getStaticPaths() {
  const paths = await getAllSurahId();

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const surah = await getSurah(params.id);

  return {
    props: {
      surah
    }
  }
}