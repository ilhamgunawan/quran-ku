import type { GetStaticProps } from 'next';
import React from 'react';

import SurahDetailApp from '@/apps/SurahDetail';
import type { ISurahDetail } from '@/types/surah';

import {
  getAllSurahId,
  getMurottalUrl,
  getSurah,
} from '../../data-sources/data-sources';

export const getStaticPaths = async () => {
  const paths = await getAllSurahId();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const murottalUrl = await getMurottalUrl(params?.id);
  const surahData = await getSurah(params?.id);

  return {
    props: {
      surahData,
      murottalUrl,
    },
  };
};

interface SurahDetailPageProps {
  surahData: ISurahDetail;
  murottalUrl: any;
}

const SurahDetailPage = ({ surahData, murottalUrl }: SurahDetailPageProps) => {
  return <SurahDetailApp surahData={surahData} murottalUrl={murottalUrl} />;
};

export default SurahDetailPage;
