import BookmarkBorderIcon from '../../assets/icons/bookmark-border-icon';
import QuranIcon2 from '../../assets/icons/quran-2-icon';

const BookmarkEmpty = () => {
  return (
    <div className="mt-10 flex flex-col items-center">
      <QuranIcon2 />
      <p className="font-semibold text-gray-800">
        Daftar penanda ayat masih kosong
      </p>
      <div className="flex flex-wrap items-center justify-center">
        <p className="font-semibold text-gray-800">
          Simpan ayat ke daftar penanda
        </p>
        <div className="ml-1 flex items-center justify-center text-center">
          <span className="font-semibold text-gray-800">
            dengan menekan tombol <span className="inline-block"></span>
          </span>
          <BookmarkBorderIcon />
        </div>
      </div>
    </div>
  );
};

export default BookmarkEmpty;
