import axios from "axios";

export const get100Coins = () => {
    const data = axios
      .get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=layer-1&order=market_cap_desc&per_page=100&price_change_percentage=1h%2C24h%2C7d")

      .then((Response) => {
        // console.log("Response=> ", Response.data);
        return Response.data;
      })
      
      .catch((ERROR) => {
        // console.log(ERROR.code);
        // console.log("Here is the ERROR");
    })

    return data;
}