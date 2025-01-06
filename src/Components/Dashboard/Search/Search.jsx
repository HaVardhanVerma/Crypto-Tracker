import React, { useRef, useState } from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import CurrencyExchangeRoundedIcon from '@mui/icons-material/CurrencyExchangeRounded';
import './Search.css'

function Search({search, onSearchValue, currency, currencyType}) {

    return (

        <div className='search-area'>
            <div className='search-input'>
                <SearchRoundedIcon></SearchRoundedIcon>
                <input placeholder="Search" type="text" onChange={(e) => onSearchValue(e)}/>
            </div>

            <div className='symbol-input'>
                <CurrencyExchangeRoundedIcon />
                <input placeholder="Enter your currency type" type="text" onChange={(e) => currencyType(e)}/>     
            </div>
        </div>

    )
}

export default Search
