import { useState, useEffect } from "react";

import { getMurottalAllUrl } from "../../data-sources/data-sources";

import { customButtonLessHover } from "../button";
import PlayButton from "./play-button";
import CloseButton from "./close-button";

const MurottalItem = ({ nama, nomor, arti, asma, ayat }) => {
  const [expand, setExpand] = useState(false);

  const [murottalData, setMurottalData] = useState({
    name: "",
    recitations: [],
  });

  const { name, recitations } = murottalData;

  const onClickExpand = () => {
    setExpand(true);
  };

  const onCloseClick = () => {
    setExpand(false);
  };

  const getMurottalData = async () => {
    const data = await getMurottalAllUrl(nomor);
    setMurottalData(data);
  };

  useEffect(() => {
    getMurottalData();
  }, []);

  return (
    <li style={{ position: "relative" }} className="w-full">
      <div
        className={customButtonLessHover}
        style={{
          cursor: "pointer",
        }}
        onClick={onClickExpand}
      >
        <div className="w-full flex justify-between">
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
        </div>
        {expand ? (
          <div
            style={{ position: "relative" }}
            className="w-full flex flex-col items-center mt-4"
          >
            {recitations.map((recitation, index) => (
              <PlayButton
                key={index}
                surahName={name}
                recitation={recitation}
              />
            ))}
          </div>
        ) : null}
      </div>
      {expand ? <CloseButton clickEvent={onCloseClick} /> : null}
    </li>
  );
};

export default MurottalItem;
