import React from "react";
import "./BadgeComponentLeft.css"

type Props = {
    children: string,
    className: string,
    icon: JSX.Element
}

const BadgeComponent = ({children, className, icon}: Props) => {
  return (
    <>
        <p className={className}><span className="icon-style">{icon}</span>{children}</p>
    </>
  );
};

export default BadgeComponent;
