"use client"
import React from 'react'
import "./ButtonComponentLeft.css"

type Props = {icon: JSX.Element | null, children: string, className: string, disableIcon: JSX.Element | null, onClick : ()=>void}

const ButtonComponentLeft = ({icon , children, className, disableIcon, onClick}: Props ) => {
  return (
    <>
    { disableIcon == null ? 
        <button onClick={onClick} className={className}><span>{icon}</span>{children}</button>
        :
        <button className={className}><span>{disableIcon}</span>{children}</button>
    }
    </>
  )
}

export default ButtonComponentLeft