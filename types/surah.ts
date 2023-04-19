export type SurahItem = {
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
};

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
