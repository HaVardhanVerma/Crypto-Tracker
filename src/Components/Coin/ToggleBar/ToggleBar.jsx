import React, {useState} from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import './ToggleBar.css';

export default function ToggleBar({bar, handleBarValue}) {

  return (

    <div className='toggle-component'>
        <ToggleButtonGroup
        value={bar}
        exclusive
        onChange={(e) => handleBarValue(e)}
        sx={{
            "&.Mui-selected": {
            color: "var(--blue) !important",
            },
            borderColor: "var(--blue)",
            border: "unset !important",
            "& .MuiToggleButtonGroup-grouped": {
            border: "1px solid var(--blue)!important",
            borderColor: "unset",
            color: "var(--blue) !important ",
            },
            "& .MuiToggleButton-standard": {
            color: "var(--blue) !important",
            },
        }}
        >
        <ToggleButton value="prices" className='Toggle-btn'>
            Price
        </ToggleButton>

        <ToggleButton value="market_caps" className='Toggle-btn'>
            Market Cap
        </ToggleButton>

        <ToggleButton value="total_volumes" className='Toggle-btn'>
            Total Volume
        </ToggleButton>

        </ToggleButtonGroup>
    </div>

  );
}