import React from 'react'
import './Grid.css'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Link } from 'react-router-dom';

function Grid({coin, i, symbol}) {
  return (

    <Link to={`/coins/${coin.id}`}>
        <div className={`grid-container ${coin.price_change_percentage_24h < 0 && "coin-container-red"}`} >
            <div className='info-flex'>
                <img src={coin.image} className='coin-logo'/>

                <div className='name-col'>
                    <p className='coin-symbol'>{coin.symbol}</p>
                    <p className='coin-name'>{coin.name}</p>
                </div>
            </div>

            {
                coin.price_change_percentage_24h > 0 ? (
                    <div className='chip-flex'> 
                        <div className='price-chip'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
                        <div><TrendingUpRoundedIcon className='up-chip'/></div>
                    </div>
                ) : (
                    <div className='chip-flex'> 
                        <div className='price-chip red-chip'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
                        <div><TrendingDownRoundedIcon className='down-chip'/></div>
                    </div>  
                ) 
            }

            <div className="price-info">
                <h3 className='coin-price' style={{color:coin.price_change_percentage_24h < 0 ? 'var(--red' : 'var(--green'}}>{symbol}{coin.current_price.toLocaleString()}</h3>
                <p className='total_vol'>Total volume : {symbol}{coin.total_volume.toLocaleString()}</p>
                <p className='market_cap'>Market cap : {symbol}{coin.market_cap.toLocaleString()}</p>
            </div>

        </div>
    </Link>

  )
}

export default Grid
