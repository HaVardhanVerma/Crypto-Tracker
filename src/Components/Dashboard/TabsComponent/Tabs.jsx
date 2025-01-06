import React from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import Grid from '../../Dashboard/Grid/Grid';
import List from '../List/List'
import './Tabs.css';

export default function Tabs({coins, symbol}) {
  const [value, setValue] = useState('Grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style = {
    color: "var(--white)",
    "& .Mui-selected": {
      color: "var(--blue) !important",
    },
    fontFamily: "Inter,sans-serif",
    fontWeight: 600,
    textTransform: "capitalize",
  };

  console.log("Coins=> ", coins);

  return (

    <div>
      <TabContext value={value}>
        <div>
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Grid" value="Grid" sx={style}/>
            <Tab label="List" value="List" sx={style}/>
          </TabList>
        </div>

        <TabPanel value="Grid">

          <div className='grid-flex'>
            {coins.map((coin) => {
              return (
                <Grid coin={coin} key={coin.id} symbol={symbol}></Grid>
              )
            })}
          </div>

        </TabPanel>


        <TabPanel value="List">

          <div className='list-table'>
            {coins.map((coin) => {
                return (
                    <List coin={coin} key={coin.id} symbol={symbol}></List>
                )
              })}
          </div>

        </TabPanel>
      </TabContext>
    </div>
  );
}