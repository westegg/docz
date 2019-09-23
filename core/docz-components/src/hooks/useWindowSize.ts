import { useState, useEffect } from 'react';
import { throttle } from 'lodash';

const isClient = typeof window === 'object';

const getSize = (initialWidth: number, initialHeight: number) => ({
  innerHeight: isClient ? window.innerHeight : initialHeight,
  innerWidth: isClient ? window.innerWidth : initialWidth,
  outerHeight: isClient ? window.outerHeight : initialHeight,
  outerWidth: isClient ? window.outerWidth : initialWidth,
});

export const useWindowSize = (
  throttleMs: number = 300,
  _initialWidth = Infinity,
  initialHeight = Infinity
) => {
  const [windowSize, setWindowSize] = useState(
    getSize(initialHeight, initialHeight)
  );
  const tSetWindowResize = throttle(
    () => setWindowSize(getSize(initialHeight, initialHeight)),
    throttleMs
  );

  useEffect(() => {
    window.addEventListener('resize', tSetWindowResize);
    return () => void window.removeEventListener('resize', tSetWindowResize);
  }, []);

  return windowSize;
};
