import { useState, useEffect } from 'react';

export function useIsScrolling() {
  const [isScrolling, setIsScrolling] = useState(false);
  useEffect(() => {
    function handleScrolling(event) {
      let scrolling;
      window.clearTimeout(scrolling);

      if (event && !isScrolling) {
        setIsScrolling(true);
      }

      scrolling = setTimeout(function () {
        setIsScrolling(false);
      }, 10);
    }
    window.addEventListener('scroll', handleScrolling, true);
    return () => {
      window.removeEventListener('scroll', handleScrolling);
    };
  }, [isScrolling]);
  return [isScrolling];
}
