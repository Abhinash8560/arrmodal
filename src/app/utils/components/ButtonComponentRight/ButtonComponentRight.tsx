"use client"
import React from 'react'
import "./ButtonComponentRight.css"

type Props = {icon: JSX.Element | null, children: string, className: string, disableIcon: JSX.Element | null, onClick : ()=>void}

const ButtonComponentRight = ({icon , children, className, disableIcon, onClick}: Props ) => {
  return (
    <>
    { disableIcon == null ? 
        <button onClick={onClick} className={className}>{children}<span className='icon-style'>{icon}</span></button>
        :
        <button className={className}>{children}<span className='icon-style'>{disableIcon}</span></button>
    }
    </>
  )
}

export default ButtonComponentRight