import SearchIcon from '@/app/utils/svgs/components/searchIcons/SearchIcon'
import React from 'react'

const SearchFieldComponents = () => {
  return (
    <div style={{display: "flex", gap: '1rem', flexDirection: "column"}}>
        
        {/*  Primary Search */}
        <div className='primary-search-container'>
            <div className='primary-search-icon'><SearchIcon /></div>
            <input placeholder='Search by keyword' className='primary-search-tag' type='text' />
        </div>


        {/*  Secondary Search */}
        <div className='secondary-search-container'>
            <div className='secondary-search-icon'><SearchIcon /></div>
            <input placeholder='Search by keyword' className='secondary-search-tag' type='text' />
        </div>


    </div>
  )
}

export default SearchFieldComponents