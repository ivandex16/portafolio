import React from 'react';
import { useInView } from '../hooks/motion';

interface RevealProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
  /** Stagger offset in ms, relative to when the block enters the screen. */
  delay?: number;
}

/**
 * Fades a block up once, the first time it enters the screen. It never hides again on exit,
 * so scrolling back always finds content in place. With reduced motion it is simply visible (see .reveal in CSS).
 */
export const Reveal: React.FC<RevealProps> = ({ as = 'div', delay = 0, className = '', style, children, ...rest }) => {
  const [ref, inView] = useInView<HTMLElement>(0.1);
  const Tag = as as React.ElementType;
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-in' : ''} ${className}`}
      style={{ ...style, transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
};
