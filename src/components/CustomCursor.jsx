import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorState, setCursorState] = useState('default'); // 'default', 'hover', 'view', 'book'
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device or prefers-reduced-motion
    if ('ontouchstart' in window || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check element under cursor
      const target = e.target;
      if (target.closest('[data-cursor="view"]')) {
        setCursorState('view');
      } else if (target.closest('[data-cursor="book"]')) {
        setCursorState('book');
      } else if (target.closest('a, button, [role="button"], input, select')) {
        setCursorState('hover');
      } else {
        setCursorState('default');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (isTouch || !isVisible) return null;

  const variants = {
    default: {
      width: 14,
      height: 14,
      backgroundColor: '#C5A880',
      opacity: 0.75,
      border: '0px solid transparent'
    },
    hover: {
      width: 36,
      height: 36,
      backgroundColor: 'rgba(197, 168, 128, 0.15)',
      borderColor: '#C5A880',
      borderWidth: '1px',
      opacity: 0.95
    },
    view: {
      width: 64,
      height: 64,
      backgroundColor: '#1C1C1A',
      color: '#FAF8F5',
      opacity: 0.9,
      borderWidth: '0px'
    },
    book: {
      width: 68,
      height: 68,
      backgroundColor: '#C5A880',
      color: '#1C1C1A',
      opacity: 0.95,
      borderWidth: '0px'
    }
  };

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full flex items-center justify-center font-serif text-xs tracking-wider uppercase shadow-sm select-none"
      animate={{
        x: position.x - (variants[cursorState].width / 2),
        y: position.y - (variants[cursorState].height / 2),
        ...variants[cursorState]
      }}
      transition={{ type: 'spring', damping: 28, stiffness: 350, mass: 0.5 }}
    >
      {cursorState === 'view' && <span>VIEW</span>}
      {cursorState === 'book' && <span className="font-sans text-[10px] font-semibold">BOOK</span>}
    </motion.div>
  );
}
