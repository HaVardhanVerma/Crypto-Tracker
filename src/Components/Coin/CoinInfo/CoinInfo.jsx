import React, { useState } from 'react';
import './CoinInfo.css';

function CoinInfo({heading, desc}) {

    // console.log("This is desc:- ", desc);

    // while(!desc) {
    //     console.log("Hello");
    // }

    var shortDesc;
    var longDesc;

    if(desc) {
        shortDesc = 
            desc.slice(0, 200) + "<span style='color:var(--grey)'> Read More.. </span>";

        longDesc = 
            desc + "<span style='color:var(--grey)'> Read Less.. </span>";
    }

    else {
        shortDesc = desc;
        longDesc = desc;
    }

    const [flag, setFlag] = useState(false);

    return (
        <div className='coin-info'>
            <h2 className='coin-info-heading'>{heading}</h2> 
            <p 
                onClick={() => setFlag(!flag)}
                className='coin-info-desc' dangerouslySetInnerHTML={{ __html: !flag ? shortDesc : longDesc}}
            />
        </div>
    )
}


export default CoinInfo
