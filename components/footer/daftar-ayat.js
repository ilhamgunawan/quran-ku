import { useContext } from "react";
import { Context } from "../../state/store";

export default function DaftarAyat() {
  const [state, dispatch] = useContext(Context);
  const { currentAyatNumberList } = state;

  return (
    <div
      style={{
        position: "absolute",
        bottom: "3.6rem",
        overflowY: "scroll",
        left: "50%",
        right: "50%",
        marginLeft: "-40px",
      }}
      className="h-64 w-20 shadow-lg border-r-2 bg-gray-700 flex flex-col"
    >
      {currentAyatNumberList
        ? currentAyatNumberList.map(({ ayatNumber }) => {
            return (
              <a
                key={ayatNumber}
                className="w-full hover:bg-teal-400 text-left py-1 pl-2 hover:text-gray-700 text-gray-300"
                href={`#${ayatNumber}`}
              >
                {ayatNumber}
              </a>
            );
          })
        : null}
    </div>
  );
}
