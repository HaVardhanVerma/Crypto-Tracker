import React, { useCallback, useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import TabsComponent from '../../Components/Dashboard/TabsComponent/Tabs';
import Search from '../../Components/Dashboard/Search/Search'
import axios from 'axios'
import Pagination from '../../Components/Pagination/Pageination';
import Loader from '../../Common/Loader/Loader';
import Topbtn from '../../Common/TopBtn/Topbtn';
import getSymbolFromCurrency from 'currency-symbol-map';
import { setCurrencySymbol } from '../../Functions/setSymbol';
import { currencySymbol } from '../../Functions/setSymbol';
import {setCoinData} from '../../Functions/setDashData';
import { get100Coins } from '../../Functions/get100Coins';
import { currencyValue } from '../../Functions/currencyValue';
import { getData } from '../../Functions/getCoinData';

function Dashboard() {
  
  const [coins, setCoins] = useState([]);
  const [pagination, setPagination] = useState([]);
  const [page, setPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [currency, setCurrency] = useState('usd');

  
  function currencyType(e) {
    console.log("This is the value:- ", e.target.value);
    setCurrency(e.target.value);
  }
  
  const onHandleChange = (event, value) => {
    setPage(value);
    var previousIndex = (value - 1) * 10;
    setPagination(coins.slice(previousIndex, previousIndex + 10));
  };

  // console.log("This is currency:-> ", currency);

  useEffect(() => {
    // console.log("changes happen", currency);

    if(currency !== null && currency.length === 3) {
      fetchData();
    }

  }, [currency]);

  async function fetchData() {
    const data = await getData(currency, true, null);

    if(data) {
      setCoins(data);
      setPagination(data.slice(0, 10));
      setLoader(true);
      currencyValue(currency);
      setCoinData(data);
    }
  }

  // useEffect(() => {
  //   getData();
  // }, []);

  // async function getData() {
  //   const Coins = await get100Coins();

  //   if(Coins) {
  //     setCoins(Coins);
  //     console.log("This is data:- ", Coins);
  //     setPagination(Coins.slice(0, 10));
  //     setLoader(true);
  //   }
  // } 
    
  const [search, setSearch] = useState("");
    
  const onSearchValue = (e) => {
    // console.log(e.target.value);
    setSearch(e.target.value);
  }
    
  var filterCoins = coins.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()) || item.symbol.toLowerCase().includes(search.toLowerCase()));
  // console.log("This is coins:- ", filterCoins);
    
  const newCurrency = currency;
  const symbol = getSymbolFromCurrency(newCurrency);
    
  setCurrencySymbol(symbol);
    
  console.log("symbol:- ", currencySymbol);
  // console.log("search:- ", search);
    
  // if(search) {
  //   setCoinData(filterCoins);
  // }
      
  // else {
  //   setCoinData(pagination);
  // }

  if(loader === true) {
    return (
      <>
        <Header></Header>
        <Search search={search} onSearchValue={onSearchValue} currency={currency} currencyType={currencyType}></Search>
        <Topbtn />
        {
          loader ? (
            <div>
              <TabsComponent coins={search ? filterCoins : pagination} symbol={symbol}/>
              {!search && (
                <Pagination page={page} onHandleChange={onHandleChange}/>
              )}
            </div>
          ) : (
              <Loader />
          )
        }
        
      </>
    )
  }

  return (
    <Loader />
  )

}

export default Dashboard;