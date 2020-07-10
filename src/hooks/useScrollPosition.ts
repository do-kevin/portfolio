import { useState, useEffect } from 'react';

export function useScrollPosition() {
  const [offsetY, setOffsetY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  useEffect(() => {
    function handleScrolling(event) {
      const {
        scrollY: _scrollY,
        pageYOffset,
        scrollX: _scrollX,
        pageXOffset,
      } = window;
      setOffsetY(pageYOffset);
      setScrollY(_scrollY);
      setOffsetX(pageXOffset);
      setScrollX(_scrollX);
    }
    window.addEventListener('scroll', handleScrolling, true);
    return () => {
      window.removeEventListener('scroll', handleScrolling);
    };
  }, []);
  return [scrollX, offsetX, scrollY, offsetY];
}
