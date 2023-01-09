const AyatTafsirListItem = ({ ayatNumber, tafsirText }) => {
  return (
    <li className="mb-5 pb-8">
      <div id={ayatNumber} className="anchor"></div>
      <div className="flex flex-col">
        <div className="h-10 w-full border-t-2 border-blue-300 mb-8">
          <p
            style={{ width: "fit-content" }}
            className="text-2xl text-white font-semibold bg-blue-300 py-2 px-4 rounded-b-md"
          >
            Tafsir ayat ke-{ayatNumber}
          </p>
        </div>
        <p lang="id" className="text-lg leading-loose text-justify">
          {tafsirText}
        </p>
      </div>
    </li>
  );
};

export default AyatTafsirListItem;
