import Link from "next/link";
import BackIcon from "../../assets/icons/back-icon";
import InfoIcon from "../../assets/icons/info-icon";

const LeftButton = ({ pageTitle }) => {
  if (pageTitle.includes("ayat")) {
    return (
      <Link href="/surat">
        <button
          className="focus:outline-none h-10 w-10 pl-1 rounded-full leading-none"
          aria-label="Daftar Surat"
        >
          <BackIcon />
        </button>
      </Link>
    );
  } else if (pageTitle.includes("Tafsir Surat")) {
    return (
      <Link href="/tafsir">
        <button
          className="focus:outline-none h-10 w-10 pl-1 rounded-full leading-none"
          aria-label="Daftar Tafsir"
        >
          <BackIcon />
        </button>
      </Link>
    );
  } else if (pageTitle.includes("Beranda")) {
    return (
      <Link href="/tentang">
        <button
          className="focus:outline-none h-10 w-10 rounded-full flex items-center justify-center"
          aria-label="Tentang"
        >
          <InfoIcon />
        </button>
      </Link>
    );
  } else {
    return (
      <Link href="/">
        <button
          className="focus:outline-none h-10 w-10 pl-1 rounded-full leading-none"
          aria-label="Beranda"
        >
          <BackIcon />
        </button>
      </Link>
    );
  }
};

export default LeftButton;
