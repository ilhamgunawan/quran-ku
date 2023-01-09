import BookmarkBorderIcon from "../../assets/icons/bookmark-border-icon";
import QuranIcon2 from "../../assets/icons/quran-2-icon";

const BookmarkEmpty = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <QuranIcon2 />
      <p className="text-gray-800 font-semibold">
        Daftar penanda ayat masih kosong
      </p>
      <div className="flex flex-wrap justify-center items-center">
        <p className="text-gray-800 font-semibold">
          Simpan ayat ke daftar penanda
        </p>
        <div className="flex text-center justify-center items-center ml-1">
          <span className="text-gray-800 font-semibold">
            dengan menekan tombol <span className="inline-block"></span>
          </span>
          <BookmarkBorderIcon />
        </div>
      </div>
    </div>
  );
};

export default BookmarkEmpty;
