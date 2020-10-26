export const getArabicNumber = (number) => {
  let charIndex = 0;
  let NumericArabic = "";

  while (charIndex < number.length) {
    switch (number[(charIndex)]) {
      case '.':
        NumericArabic += ".";
        break;

      case '0':
        NumericArabic += "٠";
        break;

      case '1':
        NumericArabic += "١";
        break;

      case '2':
        NumericArabic += "٢";
        break;

      case '3':
        NumericArabic += "٣";
        break;

      case '4':
        NumericArabic += "٤";
        break;

      case '5':
        NumericArabic += "٥";
        break;

      case '6':
        NumericArabic += "٦";
        break;

      case '7':
        NumericArabic += "٧";
        break;

      case '8':
        NumericArabic += "٨";
        break;

      case '9':
        NumericArabic += "٩";
        break;

      default:
        NumericArabic += number[(charIndex)];
        break;
    }

    charIndex++;
  }

  return NumericArabic;
}

export const mapAyatObjectToArray = (arabic, translations) => {
  return Object.entries(arabic)
    .map((arabicText, index) => {
      return { 
        ayatNumber: arabicText[0],
        arabic: arabicText[1].replace(/[0-9]/g, ''), 
        translations: Object.entries(translations)[index][1],
      };
    });
};

export const mapTafsirObjectToArray = (tafsirObject) => {
  return Object.entries(tafsirObject)
    .map((text, index) => {
      return {
        ayatNumber: text[0],
        tafsirText: text[1],
      };
    });
};

export const getAyatNumberList = (versesArray) => {
  return versesArray.map(({ ayatNumber }) => {
    return { ayatNumber: ayatNumber };
  });
};