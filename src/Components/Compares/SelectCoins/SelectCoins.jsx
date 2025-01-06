import React, { useEffect, useState } from 'react';
import { FormControl, Select, MenuItem } from '@mui/material';
import { get100Coins } from '../../../Functions/get100Coins';
import './SelectCoins.css'

function SelectCoins({crypto1, crypto2, handleChange}) {

    const [allData, setAllData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        const data = await get100Coins();
        
        if(data) {
            setAllData(data);
        }
    }

    return (
        <div className='Coins-flex'>
        
            <p className='crypto-id'>Crypto 1</p>
            <Select
                sx={{
                    height: "2.5rem",
                    color: "var(--white)",
                    "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "var(--white)",
                    },
                    "& .MuiSvgIcon-root": {
                    color: "var(--white)",
                    },
                    "&:hover": {
                    "&& fieldset": {
                        borderColor: "#3a80e9",
                    },
                    },
                }}
                value={crypto1}
                onChange={(e) => handleChange(e, false)}
                >
                {allData.filter((item) => item.id !== crypto2)
                        .map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                        {item.name}
                    </MenuItem>
                ))}
            </Select>

            <p className='crypto-id'>Crypto 2</p>

            <Select
                sx={{
                    height: "2.5rem",
                    color: "var(--white)",
                    "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "var(--white)",
                    },
                    "& .MuiSvgIcon-root": {
                    color: "var(--white)",
                    },
                    "&:hover": {
                    "&& fieldset": {
                        borderColor: "#3a80e9",
                    },
                    },
                }}
                value={crypto2}
                onChange={(e) => handleChange(e, true)}
                >
                {allData.filter((item) => item.id !== crypto1)
                        .map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                        {item.name}
                    </MenuItem>
                ))}
            </Select>
        </div>
    );
}

export default SelectCoins;
