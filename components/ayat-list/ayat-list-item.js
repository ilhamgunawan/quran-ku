import { getArabicNumber } from '../../utils/utils';

const AyatListItem = ({ ayatNumber, arabic, translations }) => {
  return (
    <li className='mb-5 border-b pb-3'>
      <div id={ayatNumber} className='anchor' ></div>
      <div className='flex flex-col'>
        <div className='grid'>
          <p className='arabic-text col-start-1 h-10 w-10 mt-auto mb-6 text-2xl leading-none bg-blue-300 text-white flex justify-center items-center rounded-full'>{getArabicNumber(ayatNumber)}</p>
          <p className='arabic-text col-start-2 ml-auto mr-0 text-right'>{arabic}</p>
        </div>
        <p className='mt-10 text-gray-700 leading-relaxed text-justify'>{translations}</p>
      </div>
    </li>
  );
};

export default AyatListItem;