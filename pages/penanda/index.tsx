import Head from 'next/head';

import { useBookmarkStore } from '@/stores/bookmark';

import BookmarkEmpty from '../../components/bookmark/bookmark-empty';
import BookmarkItem from '../../components/bookmark/bookmark-item';
import Header from '../../components/header/Header';

const PenandaPage = () => {
  const bookmarkList = useBookmarkStore((state) => state.bookmarkList);

  return (
    <>
      <Head>
        <title>{"Daftar Penanda | Qur'anKu"}</title>
      </Head>
      <Header pageTitle="Qur'anKu | Penanda" />
      <main className="mx-auto my-20 flex w-11/12 flex-col items-center">
        {bookmarkList.length > 0 ? (
          <ul>
            {bookmarkList.map((ayat) => (
              <BookmarkItem key={ayat.id} {...ayat} />
            ))}
          </ul>
        ) : (
          <BookmarkEmpty />
        )}
      </main>
    </>
  );
};

export default PenandaPage;
