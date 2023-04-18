import Header from '@/components/header/Header';
import BasicMeta from '@/components/meta/basic-meta';

interface IAboutItem {
  url: string;
  title: string;
  subtitle: string;
}

const contents: IAboutItem[] = [
  {
    url: 'https://github.com/rioastamal/quran-json',
    title: 'quran-json',
    subtitle: "sebagai sumber data Al-Qur'an dan terjemahan Bahasa Indonesia",
  },
  {
    url: 'https://github.com/penggguna/QuranJSON',
    title: 'QuranJSON',
    subtitle: "sebagai sumber data mp3 murottal Al-Qur'an",
  },
  {
    url: 'https://quran.kemenag.go.id/',
    title: 'Quran Kemenag',
    subtitle: "sebagai sumber data tafsir Al-Qur'an",
  },
  {
    url: 'https://material.io/resources/icons',
    title: 'Material Icon',
    subtitle: 'sebagai sumber icon dan gambar',
  },
  {
    url: 'https://www.flaticon.com',
    title: 'Freepik',
    subtitle: 'sebagai sumber icon dan gambar',
  },
];

const AboutApp = () => {
  return (
    <>
      <BasicMeta title="Tentang - Baca QuranKu" />
      <Header pageTitle="QuranKu | Tentang" />
      <main className="mx-auto my-16 flex w-11/12 flex-col items-center">
        <p className="max-w-[350px] py-10 text-center text-xl font-normal">
          <strong>QuranKu</strong> adalah aplikasi Al-Qur&apos;an berbasis web
          yang dioptimalkan untuk digunakan pada perangkat mobile maupun
          desktop.
        </p>
        <section className="mx-8">
          <h2>Sumber data yang digunakan Qur&apos;anKu:</h2>
          <ul className="list-disc">
            {contents.map((content, index) => (
              <li key={index}>
                <p>
                  <a
                    href={content.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-semibold text-blue-400"
                  >
                    {content.title}
                  </a>{' '}
                  {content.subtitle}
                </p>
              </li>
            ))}
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
};

export default AboutApp;
