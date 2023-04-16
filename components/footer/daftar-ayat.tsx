import { useContext } from 'react';

import { GlobalContext } from '../../state/Store';

export default function DaftarAyat() {
  const state = useContext(GlobalContext);
  const { currentAyatNumberList } = state;

  return (
    <div
      style={{
        position: 'absolute',
        bottom: '3.6rem',
        overflowY: 'scroll',
        left: '50%',
        right: '50%',
        marginLeft: '-40px',
      }}
      className="flex h-64 w-20 flex-col border-r-2 bg-gray-700 shadow-lg"
    >
      {currentAyatNumberList
        ? currentAyatNumberList.map((item: any) => {
            return (
              <a
                key={item.ayatNumber}
                className="w-full py-1 pl-2 text-left text-gray-300 hover:bg-teal-400 hover:text-gray-700"
                href={`#${item.ayatNumber}`}
              >
                {item.ayatNumber}
              </a>
            );
          })
        : null}
    </div>
  );
}
