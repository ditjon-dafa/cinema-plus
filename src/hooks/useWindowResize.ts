import { useEffect, useRef, useState } from "react";

export default function useWindowResize(screenWidthBreakpoint: number) {
  const [isSmallScreenSize, setIsSmallScreenSize] = useState(
    window.innerWidth <= screenWidthBreakpoint
  );
  const prevWidth = useRef(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const currWidth = window.innerWidth;
      if (
        currWidth <= screenWidthBreakpoint &&
        prevWidth.current > screenWidthBreakpoint
      ) {
        setIsSmallScreenSize(true);
      } else if (
        currWidth > screenWidthBreakpoint &&
        prevWidth.current <= screenWidthBreakpoint
      ) {
        setIsSmallScreenSize(false);
      }
      prevWidth.current = currWidth;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isSmallScreenSize;
}
