export const getAllAyat = () => {
  const storageArray = Object.entries(localStorage)
    .filter((object) => {
      return !object[0].includes("ally-supports-cache");
    })
    .map((ayatArray) => {
      return JSON.parse(ayatArray[1]);
    });

  return storageArray;
};

export const storeAyat = (key, ayat) => {
  localStorage.setItem(key, JSON.stringify(ayat));
};

export const removeAyat = (key) => {
  localStorage.removeItem(key);
};

export const getAyat = (key) => {
  return !!localStorage.getItem(key);
};
