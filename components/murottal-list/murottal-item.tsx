import { useEffect, useState } from 'react';

import { getMurottalAllUrl } from '../../data-sources/data-sources';
import { customButtonLessHover } from '../button';
import CloseButton from './close-button';
import PlayButton from './play-button';

interface MurottalItemProps {
  nama: any;
  nomor: any;
  arti: any;
  asma: any;
  ayat: any;
}

const MurottalItem = ({ nama, nomor, arti, asma, ayat }: MurottalItemProps) => {
  const [expand, setExpand] = useState(false);

  const [murottalData, setMurottalData] = useState({
    name: '',
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
    <li style={{ position: 'relative' }} className="w-full">
      <div
        className={customButtonLessHover}
        style={{
          cursor: 'pointer',
        }}
        onClick={onClickExpand}
      >
        <div className="flex w-full justify-between">
          <div className="flex items-center justify-between">
            <span className="mr-5 flex h-8 w-8 items-center justify-center rounded-full bg-blue-300 text-xs font-semibold leading-none text-white">
              {nomor}
            </span>
            <div className="flex flex-col">
              <span className="text-left">{nama}</span>
              <span className="text-left font-light text-gray-700">{arti}</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="pb-1 text-right text-2xl font-normal leading-none">
              {asma}
            </span>
            <span className="pb-1 text-right font-light leading-none text-gray-700">
              {ayat} ayat
            </span>
          </div>
        </div>
        {expand ? (
          <div
            style={{ position: 'relative' }}
            className="mt-4 flex w-full flex-col items-center"
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
