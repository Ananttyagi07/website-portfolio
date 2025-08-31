import { useState, useEffect, useRef } from 'react';

export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (currentScrollY > lastScrollY.current) {
            setScrollDirection('down');
          } else if (currentScrollY < lastScrollY.current) {
            setScrollDirection('up');
          }
          lastScrollY.current = currentScrollY > 0 ? currentScrollY : 0;
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollDirection;
};
