import React from 'react';
import './List.css';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Link } from 'react-router-dom';

function List({coin, i, symbol}) {

    console.log(symbol);
  return (

    <Link to={`/coins/${coin.id}`}>
        <div className="list-row" >  
            <div className='list-flex'>
                <img src={coin.image} className='div-image'/>
            </div>    
            
            <div className='list-value'>
                <div className='list-col'>
                    <p className='list-coin-symbol'>{coin.symbol}</p>
                    <p className='list-coin-name'>{coin.name}</p>
                </div>
            </div>
            
            {
                coin.price_change_percentage_24h > 0 ? (
                    <div className='chip-list'> 
                        <div className='list-chip'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
                        <div className='list-up-chip'><TrendingUpRoundedIcon/></div>
                    </div>
                ) : (
                    <div className='chip-list'> 
                        <div className='list-chip list-red-chip'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
                        <div className='list-down-chip'><TrendingDownRoundedIcon/></div>
                    </div>  
                ) 
            }

            <div className="price-list">
                <h3 className='list-coin-price' style={{color:coin.price_change_percentage_24h < 0 ? 'var(--red' : 'var(--green'}}>{symbol}{coin.current_price.toLocaleString()}</h3>
                <p className='list-total_vol'>{symbol}{coin.total_volume.toLocaleString()}</p>
                <p className='list-market_cap'>{symbol}{coin.market_cap.toLocaleString()}</p>
            </div>

        </div>
    </Link>
    
  )
}

export default List
