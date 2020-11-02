import Link from "next/link";

import { customButtonBorderTeal } from "../button";

const TafsirListItem = ({ nama, nomor, arti, asma, ayat }) => {
  return (
    <li className="w-full">
      <Link href={`/tafsir/${nomor}`}>
        <button className={customButtonBorderTeal}>
          <div className="flex items-center justify-between">
            <span className="mr-5 h-8 w-8 text-xs font-semibold leading-none bg-blue-300 text-white flex justify-center items-center rounded-full">
              {nomor}
            </span>
            <div className="flex flex-col">
              <span className="text-left">{nama}</span>
              <span className="text-left text-gray-700 font-light">{arti}</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-normal text-right text-2xl leading-none pb-1">
              {asma}
            </span>
            <span className="font-light text-right text-gray-700 leading-none pb-1">
              {ayat} ayat
            </span>
          </div>
        </button>
      </Link>
    </li>
  );
};

export default TafsirListItem;
