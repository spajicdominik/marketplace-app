// SidebarClickableLabel.tsx
import React from "react";

export default function SidebarClickableLabel({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) {
  const handleClick = (e: React.MouseEvent) => {
    // DO NOT stopPropagation — allows submenu to still open/close
    onClick();
  };

  return (
    <span onClick={handleClick} style={{ cursor: "pointer" }}>
      {text}
    </span>
  );
}