interface AyatTafsirListItemProps {
  ayatNumber: any;
  tafsirText: any;
}

const AyatTafsirListItem = ({
  ayatNumber,
  tafsirText,
}: AyatTafsirListItemProps) => {
  return (
    <li className="mb-5 pb-8">
      <div id={ayatNumber} className="anchor"></div>
      <div className="flex flex-col">
        <div className="mb-8 h-10 w-full border-t-2 border-blue-300">
          <p
            style={{ width: 'fit-content' }}
            className="rounded-b-md bg-blue-300 px-4 py-2 text-2xl font-semibold text-white"
          >
            Tafsir ayat ke-{ayatNumber}
          </p>
        </div>
        <p lang="id" className="text-justify text-lg leading-loose">
          {tafsirText}
        </p>
      </div>
    </li>
  );
};

export default AyatTafsirListItem;
