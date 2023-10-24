import { useState } from "react";
import { twMerge } from "tailwind-merge";
import lotrImg from "../assets/lotr.jpg";

const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className={twMerge(
        "w-[300px] h-[400px]  [perspective:1000px] cursor-pointer"
      )}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={twMerge(
          "relative  w-full h-full [transform-style:preserve-3d]  [&_div]:absolute [&_div]:w-full [&_div]:h-full [&_div]:rounded-xl transition-[transform] shadow duration-1000 border border-slate-400 rounded-xl",
          isFlipped && "[transform:rotateY(-180deg)] "
        )}
      >
        <div className="bg-slate-500 [backface-visibility:hidden]  overflow-hidden">
          <img
            src={lotrImg}
            alt="lotr"
            className="w-full h-full object-cover object-bottom"
          />
        </div>
        <div className="bg-gray-800 [backface-visibility:hidden]   [transform:rotateY(180deg)] flex flex-col items-center  p-6 ">
          <h1 className="font-bold underline mb-4">Description</h1>
          <p className="opacity-80">
            The Lord of the Rings: The Rings of Power is an American fantasy
            television series developed by J. D. Payne and Patrick McKay for the
            streaming service Amazon Prime Video.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
