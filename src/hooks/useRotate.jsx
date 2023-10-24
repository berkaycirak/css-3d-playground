import { useState, useEffect } from "react";

const useRotate = () => {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [initialMouseX, setInitialMouseX] = useState(0);
  const [initialRotation, setInitialRotation] = useState(0);
  const [currentRotation, setCurrentRotation] = useState(0);
  const [isRotationBlocked, setIsRotationBlocked] = useState(false);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setInitialMouseX(e.clientX);
    setInitialRotation(currentRotation);
  };

  const handleMouseMove = (e) => {
    if (isMouseDown && !isRotationBlocked) {
      const mouseX = e.clientX;
      const rotation = initialRotation + (mouseX - initialMouseX);
      setCurrentRotation(rotation);
    }
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const onRotationBlock = (value) => {
    setIsRotationBlocked(value);
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isMouseDown, initialRotation, currentRotation]);

  return { currentRotation, onRotationBlock };
};

export default useRotate;
