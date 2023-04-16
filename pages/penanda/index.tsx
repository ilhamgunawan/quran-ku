import Head from 'next/head';
import { useEffect, useState } from 'react';

import { getAllAyat } from '../../bookmark-utils/bookmark-utils';
import BookmarkEmpty from '../../components/bookmark/bookmark-empty';
import BookmarkItem from '../../components/bookmark/bookmark-item';
import Header from '../../components/header/Header';

const Penanda = () => {
  const [isBookmarkExist, setBookmarkExist] = useState(false);

  useEffect(() => {
    if (getAllAyat().length > 0) {
      setBookmarkExist(true);
    }
  });

  return (
    <>
      <Head>
        <title>{"Daftar Penanda | Qur'anKu"}</title>
      </Head>
      <Header pageTitle="Qur'anKu | Penanda" />
      <main
        style={{ width: '95%', margin: '5rem auto' }}
        className="flex flex-col items-center"
      >
        {isBookmarkExist ? (
          <ul>
            {getAllAyat().map((ayat) => (
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

export default Penanda;
