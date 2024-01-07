import React from "react";
import "./BadgeComponentRight.css"

type Props = {
    children: string,
    className: string,
    icon: JSX.Element
}

const BadgeComponent = ({children, className, icon}: Props) => {
  return (
    <>
        <p className={className}>{children}<span className="icon-style">{icon}</span></p>
    </>
  );
};

export default BadgeComponent;
