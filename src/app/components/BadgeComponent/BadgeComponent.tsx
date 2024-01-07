import React from "react";
import "./BadgeComponent.css"

type Props = {
    children: string,
    className: string
}


const BadgeComponent = ({children, className}: Props) => {
  return (
    <>
        {/* <p className={className}><span className="icon-style"><Success /></span>{children}</p> */}
        <p className={className}>{children}</p>
    </>
  );
};

export default BadgeComponent;
