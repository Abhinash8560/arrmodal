import ArrowIcon from '@/app/utils/svgs/components/inputIcons/ArrowIcon'
import HomeIcon from '@/app/utils/svgs/components/inputIcons/HomeIcon'
import React from 'react'


const InputFieldComponents = () => {

  return (
    <div style={{display: "flex", gap: '1rem', flexDirection: "column"}}>

        {/*  Normal input */}


        <div className='input-container'>
            <input placeholder='Enter the placeholder' className='input-tag' type='text' />
        </div>

        <div className='input-container-disable'>
            <input placeholder='Enter the placeholder' className='input-tag-disable' type='text' />
        </div>

        {/*  For success and error icon create module css and give the border and box shadow */}

        {/*  Input with left icon */}

        <div className='left-input-container'>
            <div className='left-input-icon'><HomeIcon /></div>
            <input placeholder='Enter the placeholder' className='left-input-tag' type='text' />
        </div>

        <div className='left-input-container-disable'>
            <div className='left-input-icon'><HomeIcon /></div>
            <input placeholder='Enter the placeholder' className='left-input-tag-disable' type='text' />
        </div>

        {/*  For success and error icon create module css and give the border and box shadow */}

        {/*  Input with Right icon */}

        <div className='right-input-container'>
            <input placeholder='Enter the placeholder' className='right-input-tag' type='text' />
            <div className='right-input-icon'><ArrowIcon /></div>
        </div>

        
        <div className='right-input-container-disable'>
            <input placeholder='Enter the placeholder' className='right-input-tag-disable' type='text' />
            <div className='right-input-icon'><ArrowIcon /></div>
        </div>

        {/*  For success and error icon create module css and give the border and box shadow */}


    </div>
  )
}

export default InputFieldComponents