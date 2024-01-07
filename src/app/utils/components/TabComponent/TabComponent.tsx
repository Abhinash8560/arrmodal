'use client'
import React, {useState} from 'react'
import "./TabComponent.css"

type Props = {
    tabList :string[],
    onClick : (index: number)=> void
}

const TabComponent = ({tabList, onClick} : Props ) => { 
    const[selectedIndex, setSelectedIndex] = useState<number>(0)

    const clickHandler = (index: number)  => {
        setSelectedIndex(index)
    }


  return (
    <div className='tab-container'>
       { tabList?.map((items, index) => {
            return(
                <div key={index} onClick={()=>{onClick(index)}}>
                    <div onClick={()=>{clickHandler(index)}} className={selectedIndex == index? "tab-item-wrapper-active" : "tab-item-wrapper"}>
                        <p className={selectedIndex == index? "tab-item-active" : "tab-item"}>{items}</p>
                    </div>  
                </div>  
            )
        })}
    </div>
  )
}

export default TabComponent