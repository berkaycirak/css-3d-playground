import { useState } from "react";
import useRotate from "../hooks/useRotate";
import { twMerge } from "tailwind-merge";

const Preserve3D = () => {
  const { currentRotation, onRotationBlock } = useRotate();
  const [isChecked, setIsChecked] = useState(false);
  const [rotate, setRotate] = useState(false);
  const [totalPerspective, setTotalPerspective] = useState(150);
  const [isPerspectiveActive, setIsPerspectiveActive] = useState(false);

  return (
    <>
      {/* Checkbox */}
      <div
        className="flex items-start gap-8 absolute top-[10%] "
        onMouseEnter={() => onRotationBlock(true)}
        onMouseLeave={() => onRotationBlock(false)}
      >
        <div>
          <input
            type="checkbox"
            className="h-5 w-5"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <label className="text-2xl text-slate-300 ml-2">Preserve 3D</label>
        </div>
        <div className="flex flex-col items-center gap-2 ">
          <div>
            <input
              type="checkbox"
              className="h-5 w-5"
              checked={isPerspectiveActive}
              onChange={() => setIsPerspectiveActive(!isPerspectiveActive)}
            />
            <label className="text-2xl text-slate-300 ml-2">Perspective</label>
          </div>

          <div
            className={twMerge(
              "flex items-center gap-1 opacity-0 transition",
              isPerspectiveActive && "opacity-100"
            )}
          >
            <label className="text-red-500">0</label>
            <input
              type="range"
              value={totalPerspective}
              min={0}
              max={2000}
              onChange={(e) => setTotalPerspective(Number(e.target.value))}
              className="text-black rounded-md outline-none font-bold input"
            />
            <label className="text-red-500">2000</label>
          </div>
        </div>
        <div>
          <input
            type="checkbox"
            className="h-5 w-5"
            checked={rotate}
            onChange={() => setRotate(!rotate)}
          />
          <label className="text-2xl text-yellow-600 ml-2">
            RotateX Yellow 45°
          </label>
        </div>
      </div>
      {/* Main Rotating Div */}
      <div
        className={twMerge(
          `bg-slate-500 w-[500px] h-[500px] rounded-xl  `,
          isChecked && "[transform-style:preserve-3d] "
        )}
        style={{
          transform: `rotateY(${currentRotation}deg)`,
          perspective: ` ${
            isPerspectiveActive ? `${totalPerspective}px` : "none"
          } `,
        }}
      >
        <h1
          className={twMerge(
            "text-center font-bold text-2xl opacity-0 transition duration-500",
            isPerspectiveActive && "opacity-100"
          )}
        >
          Perspective:{" "}
          <span className="text-green-500">{totalPerspective}px</span>
        </h1>
        <div
          className={twMerge(
            "bg-yellow-400 w-[300px] h-[300px] mx-auto mt-12 rounded-xl ",
            rotate && "[transform:rotateX(45deg)]"
          )}
        ></div>
      </div>
    </>
  );
};

export default Preserve3D;
