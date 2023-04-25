import type { TTafsir } from '@/types/surah';

/* eslint-disable no-plusplus */
export const getArabicNumber = (number: string | any[]) => {
  let charIndex = 0;
  let NumericArabic = '';

  while (charIndex < number.length) {
    switch (number[charIndex]) {
      case '.':
        NumericArabic += '.';
        break;

      case '0':
        NumericArabic += '٠';
        break;

      case '1':
        NumericArabic += '١';
        break;

      case '2':
        NumericArabic += '٢';
        break;

      case '3':
        NumericArabic += '٣';
        break;

      case '4':
        NumericArabic += '٤';
        break;

      case '5':
        NumericArabic += '٥';
        break;

      case '6':
        NumericArabic += '٦';
        break;

      case '7':
        NumericArabic += '٧';
        break;

      case '8':
        NumericArabic += '٨';
        break;

      case '9':
        NumericArabic += '٩';
        break;

      default:
        NumericArabic += number[charIndex];
        break;
    }

    charIndex++;
  }

  return NumericArabic;
};

export const mapAyatObjectToArray = (
  arabic: { [s: string]: unknown } | ArrayLike<unknown>,
  translations: { [s: string]: unknown } | ArrayLike<unknown>,
  tafsirs: TTafsir
) => {
  return Object.entries(arabic).map((arabicText, index) => {
    return {
      ayatNumber: arabicText[0],
      arabic: (arabicText[1] as string).replace(/[0-9]/g, ''),
      translations: Object.entries(translations)?.[index]?.[1] as string,
      tafsir: tafsirs.id.kemenag.text[index] || '',
    };
  });
};

export const mapTafsirObjectToArray = (
  tafsirObject: { [s: string]: unknown } | ArrayLike<unknown>
) => {
  return Object.entries(tafsirObject).map((text) => {
    return {
      ayatNumber: text[0],
      tafsirText: text[1],
    };
  });
};

export const getAyatNumberList = (versesArray: { ayatNumber: any }[]) => {
  return versesArray.map(({ ayatNumber }) => {
    return { ayatNumber };
  });
};

export const getDateInIndonesia = () => {
  const date = new Date();

  const tahun = date.getFullYear();
  let bulan: string | number = date.getMonth();
  const tanggal = date.getDate();
  let hari: string | number = date.getDay();
  let jam: string | number = date.getHours();
  let menit: string | number = date.getMinutes();

  if (jam < 10) {
    jam = `0${jam}`;
  }

  if (menit < 10) {
    menit = `0${menit}`;
  }

  switch (hari) {
    case 0:
      hari = 'Minggu';
      break;
    case 1:
      hari = 'Senin';
      break;
    case 2:
      hari = 'Selasa';
      break;
    case 3:
      hari = 'Rabu';
      break;
    case 4:
      hari = 'Kamis';
      break;
    case 5:
      hari = "Jum'at";
      break;
    case 6:
      hari = 'Sabtu';
      break;
    default:
      break;
  }

  switch (bulan) {
    case 0:
      bulan = 'Januari';
      break;
    case 1:
      bulan = 'Februari';
      break;
    case 2:
      bulan = 'Maret';
      break;
    case 3:
      bulan = 'April';
      break;
    case 4:
      bulan = 'Mei';
      break;
    case 5:
      bulan = 'Juni';
      break;
    case 6:
      bulan = 'Juli';
      break;
    case 7:
      bulan = 'Agustus';
      break;
    case 8:
      bulan = 'September';
      break;
    case 9:
      bulan = 'Oktober';
      break;
    case 10:
      bulan = 'November';
      break;
    case 11:
      bulan = 'Desember';
      break;
    default:
      break;
  }

  return `${hari}, ${tanggal} ${bulan} ${tahun} pukul ${jam}:${menit}`;
};
