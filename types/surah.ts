export interface ISurah {
  arti: string;
  asma: string;
  audio: string;
  ayat: number;
  keterangan: string;
  nama: string;
  nomor: string;
  rukuk: string;
  type: string;
  urut: string;
}

export type TSurahLinkPrefix = 'surat' | 'tafsir';

export type TTafsir = {
  id: {
    kemenag: {
      name: string;
      source: string;
      text: {
        [k: number]: string;
      };
    };
  };
};

export type TTranslations = {
  id: {
    name: string;
    text: {
      [k: number]: string;
    };
  };
};

export interface ISurahDetail {
  name: string;
  name_latin: string;
  number: string;
  number_of_ayah: string;
  tafsir: TTafsir;
  text: {
    [k: number]: string;
  };
  translations: TTranslations;
}

export interface ISurahMetaData {
  nextSurahName?: string;
  previourSurahName?: string;
  nextSurahNumber?: string;
  previousSurahNumber?: string;
}
