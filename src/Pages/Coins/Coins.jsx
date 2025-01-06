import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '../../Components/Header/Header';
import axios from 'axios'
import Loader from '../../Common/Loader/Loader';
import {settingCoinObject} from '../../Functions/setCoinData';
import List from '../../Components/Dashboard/List/List';
import CoinInfo from '../../Components/Coin/CoinInfo/CoinInfo';
import { currencySymbol } from '../../Functions/setSymbol';
import { getCoinData } from '../../Functions/setDashData';
import {getData} from '../../Functions/getCoinData';
import {getPrices} from '../../Functions/getCoinsPrice';
import LineChart from '../../Components/Coin/LineChart/LineChart';
import { convertDate } from '../../Functions/convertDate';
import SelectDays from '../../Components/Coin/selectDays/SelectDays';
import ToggleBar from '../../Components/Coin/ToggleBar/ToggleBar';
import { settingChartData } from '../../Functions/settingChartData';
import { getCurrencyValue } from '../../Functions/currencyValue';

function Coins() {

    const {id} = useParams();
    const [coin, setCoin] = useState([]);
    const [loading, setLoading] = useState(true);
    const [days, setDays] = useState(7);
    const [chartData, setChartData] = useState({});
    const [bar, setBar] = useState("Prices");

    const currency = getCurrencyValue();
    
    useEffect(() => {
        getCoin();
    }, [id, days, bar]);
    
    const handleDaysChange = (e) => {
        setDays(e.target.value);
    };
    
    const handleBarValue = (e) => {
        setBar(e.target.value);
    };
    
    // console.log("bar:- ", bar);
    
    
    // console.log(Data);
    
    async function getCoin() {
        const data = await getData(currency, false, id);
        
        // const Data = getCoinData(); // removable

        // console.log("This is Data:-", Data);

        // const newData = Data.find((item) => item.id === id);

        // console.log("This is new Data:-", newData);

        if(data) {
            // settingCoinObject(data, setCoin);

            console.log("data:-", data);

            // const UpdateData = {
            //     ...data,
            //     // desc: data.description.en,
            //     name: data.name,
            //     symbol: data.symbol,
            // }

            // console.log("This is Update Data:-", UpdateData);

            setCoin(data);
            console.log("This is Currency:-", currency);

            const coinsPrice = await getPrices(id, days, bar, currency);

            if(coinsPrice) {
                // console.log(coinsPrice);

                settingChartData(setChartData, coinsPrice);
                setLoading(false);
            }
        }
    }


    // console.log("Coins Here:- ", coin);

    return (
        <>
            <Header></Header>
            {loading ? <Loader /> : <div className='grey-wrapper'><List coin={coin} symbol={currencySymbol}/></div>}
            <div className='grey-wrapper'>
                <SelectDays handleDaysChange={handleDaysChange} days={days}/>
                <ToggleBar bar={bar} handleBarValue={handleBarValue} />
                <LineChart chartData={chartData} multiAxis="false"></LineChart>
            </div>
            {/* <CoinInfo heading={coin.name} desc={coin.desc}/>/ */}
        </>
    )
}

export default Coins;