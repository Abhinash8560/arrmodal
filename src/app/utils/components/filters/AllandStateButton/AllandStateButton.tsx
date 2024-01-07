"use client";
import DropDownIcon from "@/app/utils/svgs/components/filterIcons/DropDownIcon";
import React, { useState } from "react";
import "./AllandStateButton.css";

type Props = {
  children: string;
  onClick: () => void;
};

const AllandStateButton = ({ children, onClick }: Props) => {
  const [isActive, setIsActtive] = useState<boolean>(false);

  const handleClick = () => {
    setIsActtive(!isActive);
  };

  return (
    <div className="allstate-main-container" onClick={onClick}>
      <div
        onClick={handleClick}
        className={
          isActive ? "allstate-container-active" : "allstate-container"
        }
      >
        <p className="allstate-font">{children}</p>
        <span className="allstate-icon">
          <DropDownIcon />
        </span>
      </div>
    </div>
  );
};

export default AllandStateButton;
