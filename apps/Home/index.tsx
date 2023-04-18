import React from 'react';

import Header from '@/components/header/Header';
import BasicMeta from '@/components/meta/basic-meta';
import MosqueIcon from '@/components/MosqueIcon';

import MenuList from './MenuList';

const HomeApp = () => {
  return (
    <>
      <BasicMeta />
      <Header pageTitle="QuranKu | Beranda" />
      <main className="mx-auto my-28 flex w-11/12 flex-col items-center gap-8 md:w-[64rem] md:px-4">
        <MosqueIcon />
        <MenuList />
      </main>
    </>
  );
};

export default HomeApp;
