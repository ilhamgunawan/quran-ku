export const getAllAyat = () => {
  const storageArray = Object.entries(localStorage)
    .filter((object) => {
      return !object[0].includes('ally-supports-cache');
    })
    .map((ayatArray) => {
      return JSON.parse(ayatArray[1]);
    });

  return storageArray;
};

export const storeAyat = (key: any, ayat: any) => {
  localStorage.setItem(key, JSON.stringify(ayat));
};

export const removeAyat = (key: any) => {
  localStorage.removeItem(key);
};

export const getAyat = (key: any) => {
  return !!localStorage.getItem(key);
};
