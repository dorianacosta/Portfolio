import React, { useState, useRef, useLayoutEffect } from 'react';

export type NavItem = {
  id: string | number;
  icon: React.ReactElement<{ className?: string }>;
  label?: string;
  onClick?: () => void;
};

type LimelightNavProps = {
  items?: NavItem[];
  activeIndex?: number;
  onTabChange?: (index: number) => void;
  className?: string;
  limelightClassName?: string;
  iconContainerClassName?: string;
  iconClassName?: string;
};

export const LimelightNav = ({
  items = [],
  activeIndex: controlledActive,
  onTabChange,
  className,
  limelightClassName,
  iconContainerClassName,
  iconClassName,
}: LimelightNavProps) => {
  const [internalActive, setInternalActive] = useState(controlledActive ?? 0);
  const [isReady, setIsReady] = useState(false);
  const navItemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const limelightRef = useRef<HTMLDivElement | null>(null);

  const activeIndex = controlledActive ?? internalActive;

  useLayoutEffect(() => {
    if (items.length === 0) return;
    const limelight = limelightRef.current;
    const activeItem = navItemRefs.current[activeIndex];
    if (limelight && activeItem) {
      const newLeft = activeItem.offsetLeft + activeItem.offsetWidth / 2 - limelight.offsetWidth / 2;
      limelight.style.left = `${newLeft}px`;
      if (!isReady) setTimeout(() => setIsReady(true), 50);
    }
  }, [activeIndex, isReady, items]);

  if (items.length === 0) return null;

  const handleItemClick = (index: number, itemOnClick?: () => void) => {
    setInternalActive(index);
    onTabChange?.(index);
    itemOnClick?.();
  };

  return (
    <nav
      className={`relative inline-flex items-center h-10 rounded-lg bg-card text-foreground border border-border px-1 ${className ?? ''}`}
    >
      {items.map(({ id, icon, label, onClick }, index) => (
        <a
          key={id}
          ref={(el) => { navItemRefs.current[index] = el; }}
          className={`relative z-20 flex h-full cursor-pointer items-center justify-center px-3 ${iconContainerClassName ?? ''}`}
          onClick={() => handleItemClick(index, onClick)}
          aria-label={label}
          title={label}
        >
          {React.cloneElement(icon, {
            className: `w-4 h-4 transition-opacity duration-150 ease-in-out ${
              activeIndex === index ? 'opacity-100' : 'opacity-35'
            } ${icon.props.className ?? ''} ${iconClassName ?? ''}`,
          })}
        </a>
      ))}

      <div
        ref={limelightRef}
        className={`absolute top-0 z-10 w-9 h-[3px] rounded-full bg-primary shadow-[0_40px_12px_var(--primary)] ${
          isReady ? 'transition-[left] duration-300 ease-in-out' : ''
        } ${limelightClassName ?? ''}`}
        style={{ left: '-999px' }}
      >
        <div className="absolute left-[-30%] top-[3px] w-[160%] h-10 [clip-path:polygon(5%_100%,25%_0,75%_0,95%_100%)] bg-gradient-to-b from-primary/25 to-transparent pointer-events-none" />
      </div>
    </nav>
  );
};
