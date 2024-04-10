"use client";
import React, { useState } from "react";

type AccordionProps = {
  className?: string;
  btnClass?: string;
  onToggle?: (isOpen: boolean) => void;
};

export default function Accordion({
  className,
  btnClass,
  onToggle,
}: AccordionProps) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    if (onToggle) {
      onToggle(!open);
    }
  };

  return (
    <div className={className}>
      <button className={btnClass} onClick={handleClick}>
        <img src={open ? "/assets/arrow-up.svg" : "/assets/arrow-down.svg"} />
      </button>
    </div>
  );
}
