import { useEffect, useState } from 'react';
import { throttle } from '../helpers/throttle';

export const useMousePosition = (options) => {
  const throttleTime = options?.throttleTime || 1000;
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const onMouseMove = throttle((e) => {
      const { clientX: x, clientY: y } = e;
      setPosition({
        x,
        y,
      });
    }, throttleTime);

    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return position;
};
