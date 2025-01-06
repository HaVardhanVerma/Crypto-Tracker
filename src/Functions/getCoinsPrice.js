import axios from "axios";

export const getPrices = (id, days, bar, currency) => {
    const coinPrice = axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}&interval=daily`)

    .then((Reasponse) => {
        if(bar === "prices") {
            return Reasponse.data.prices;
        }

        else if(bar === "market_caps") {
            return Reasponse.data.market_caps;
        }

        else {
            return Reasponse.data.total_volumes;
        }
    })

    .catch((ERROR) => {

        if(ERROR.code === 'ERR_NETWORK') {
            return null;
        }

        console.log(ERROR.code);
    }) 

    return coinPrice;
}