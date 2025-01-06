import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header';
import SelectCoins from '../../Components/Compares/SelectCoins/SelectCoins';
import SelectDays from '../../Components/Coin/selectDays/SelectDays';
import { getData } from '../../Functions/getCoinData';
import {settingCoinObject} from '../../Functions/setCoinData';
import { getPrices } from '../../Functions/getCoinsPrice';
import Loader from '../../Common/Loader/Loader';
import List from '../../Components/Dashboard/List/List';
import CoinInfo from '../../Components/Coin/CoinInfo/CoinInfo';
import {settingChartData} from '../../Functions/settingChartData';
import LineChart from '../../Components/Coin/LineChart/LineChart';
import ToggleBar from '../../Components/Coin/ToggleBar/ToggleBar';
import { getCurrencyValue } from '../../Functions/currencyValue';
import { currencySymbol } from '../../Functions/setSymbol';

function ComparePage() {

    const [crypto1, setCrypto1] = useState('bitcoin');
    const [crypto2, setCrypto2] = useState('ethereum');
    const [crypto1Data, setCrpto1Data] = useState({});
    const [crypto2Data, setCrpto2Data] = useState({});
    const [bar, setBar] = useState('prices');
    const [days, setDays] = useState(30);
    const [loading, setLoading] = useState(true);
    const [chartData, setChartData] = useState({});
    
    var currency = getCurrencyValue();
    // console.log("Value of Currency:-", currency);

    useEffect(() => {
        GetData();
    }, [days, crypto1, crypto2, bar]);

    const handleDaysChange = (e) => {
        setDays(e.target.value);
    }

    const handleBarValue = (e) => {
        setBar(e.target.value);
    };

    const GetData = async () => {

        setLoading(true);

        const data1 = await getData(currency, false, crypto1);
        const data2 = await getData(currency, false, crypto2);
        
        if(data1) {
            setCrpto1Data(data1);
        }
         
        if(data2) {
            setCrpto2Data(data2);
        }

        if(data1 && data2) {
            const prices1 = await getPrices(crypto1, days, bar, currency);
            const prices2 = await getPrices(crypto2, days, bar, currency);

            if(prices1 && prices2) {
                settingChartData(setChartData, prices1, prices2);
                setLoading(false);
            }
        }
    }

    const handleChange = async (e, isCrypto2) => {
        
        if(isCrypto2) {
            setCrypto2(e.target.value);
        }

        else {
            setCrypto1(e.target.value);
        }
    }

    if(loading) {
        return (
            <>
                <Header></Header>
                <Loader />
            </>
        )
    }

    return (
        <div>
            <Header></Header>
            
            <div className='wrapper'>
                <SelectCoins crypto1={crypto1} crypto2={crypto2} handleChange={handleChange}/>
                <SelectDays days={days} handleDaysChange={handleDaysChange}></SelectDays>
            </div>

            <div className='grey-wrapper'><List coin={crypto1Data} symbol={currencySymbol} /></div>
            <div className='grey-wrapper'><List coin={crypto2Data} symbol={currencySymbol} /></div>
            <div className='grey-wrapper'>
                <ToggleBar bar={bar} handleBarValue={handleBarValue} />
                <LineChart chartData={chartData} multiAxis="true"></LineChart>
            </div>

            {/* <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc}/>
            <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc}/> */}
        </div>

    )
}

export default ComparePage
