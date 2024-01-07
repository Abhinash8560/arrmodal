'use client'

import React, {useState} from 'react'
import "./FilterButton.css"
import FilterIcon from '@/app/utils/svgs/components/filterIcons/FilterIcon'


type Props = {
    onClick: ()=>void,
}

const FilterButton = ({onClick}: Props ) => {

    const [isActive, setIsActtive] = useState<boolean>(false)

    const handleClick = () =>{
        setIsActtive(!isActive)
    }

  return (
    <div onClick={onClick}>
     <div onClick={handleClick} className={isActive ? "filterbtn-container-active": "filterbtn-container"}>
        <span className='filterbtn-icon'><FilterIcon /></span>
        <p className='filterbtn-font'>Filter</p>
     </div>
    </div>
  )
}

export default FilterButton