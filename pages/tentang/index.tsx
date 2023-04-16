import React from 'react';

import Header from '../../components/header/Header';
import BasicMeta from '../../components/meta/basic-meta';

export default function AboutPage() {
  return (
    <>
      <BasicMeta title="Tentang - Baca QuranKu" />
      <Header pageTitle="QuranKu | Tentang" />
      <main
        style={{ width: '95%', marginLeft: 'auto', marginRight: 'auto' }}
        className="my-16 flex flex-col items-center"
      >
        <p
          style={{ maxWidth: '350px' }}
          className="py-10 text-center text-xl font-normal"
        >
          <strong>QuranKu</strong> adalah aplikasi Al-Qur&apos;an berbasis web
          yang dioptimalkan untuk digunakan pada perangkat mobile maupun
          desktop.
        </p>
        <section className="mx-8">
          <h2>Sumber data yang digunakan Qur&apos;anKu:</h2>
          <ul className="list-disc">
            <li>
              <p>
                <a
                  href="https://github.com/rioastamal/quran-json"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-semibold text-blue-400"
                >
                  quran-json
                </a>{' '}
                sebagai sumber data Al-Qur&apos;an dan terjemahan Bahasa
                Indonesia
              </p>
            </li>
            <li>
              <p>
                <a
                  href="https://github.com/penggguna/QuranJSON"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-semibold text-blue-400"
                >
                  QuranJson
                </a>{' '}
                sebagai sumber data mp3 murottal Al-Qur&apos;an
              </p>
            </li>
            <li>
              <p>
                <a
                  href="https://quran.kemenag.go.id/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-semibold text-blue-400"
                >
                  Quran Kemenag
                </a>{' '}
                sebagai sumber data tafsir Al-Qur&apos;an
              </p>
            </li>
            <li>
              <ul className="flex flex-wrap">
                <li className="mr-1">
                  <p>
                    <a
                      href="https://material.io/resources/icons"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="font-semibold text-blue-400"
                    >
                      Material icons
                    </a>
                    ,{' '}
                  </p>
                </li>
                <li className="mr-1">
                  <p>
                    <a
                      href="https://www.flaticon.com/authors/vectors-market"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="font-semibold text-blue-400"
                    >
                      Vectors Market
                    </a>
                  </p>
                </li>
                <li className="mr-1">
                  <p>
                    <a
                      href="https://www.flaticon.com/authors/freepik"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="font-semibold text-blue-400"
                    >
                      Freepik
                    </a>
                    ,{' '}
                  </p>
                </li>
                <li className="mr-1">
                  <p>
                    <a
                      href="https://www.flaticon.com"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="font-semibold text-blue-400"
                    >
                      Flaticon
                    </a>
                    ,{' '}
                  </p>
                </li>
                <li className="mr-1">
                  <p>untuk sumber icon dan gambar</p>
                </li>
              </ul>
            </li>
          </ul>
        </section>
        <p className="mt-20 text-center">
          <strong>QuranKu</strong> &copy; 2020 - {new Date().getFullYear()}
        </p>
        <p className="text-center">
          Dibuat oleh{' '}
          <a
            href="https://ilhamgunawan.my.id"
            target="_blank"
            rel="noreferrer noopener"
            className="font-semibold text-blue-400"
          >
            Ilham Muhammad Ramdhan Gunawan
          </a>
        </p>
      </main>
    </>
  );
}
