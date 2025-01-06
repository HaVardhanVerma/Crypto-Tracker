import axios from "axios";
// import React from "react";
// import { useParams } from "react-router-dom";

export const getData = (currency, isValid, id) => {

    if(isValid && id === null) {
        const coin = axios
        .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&category=layer-1&order=market_cap_desc&per_page=100&price_change_percentage=1h%2C24h%2C7d`)
    
        .then((Response) => {
          // console.log("Response=> ", Response.data);
          return Response.data;
        })
        
        .catch((error) => {
           
          if(error.code === 'ERR_NETWORK') {
            return null;
          }

          // console.log("Here is the ERROR");
        })
    
        return coin;
    }

    else {

        const coin = axios
        .get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&category=layer-1&order=market_cap_desc&per_page=100&price_change_percentage=1h%2C24h%2C7d`)
    
        .then((Response) => {
          // console.log("Response=> ", Response.data);
            
          const data = Response.data;

          const filteredData = data.find((item) => item.id === id);
            // console.log("This is filtered data:- ", filteredData);
          return filteredData;
        })
        
        .catch((ERROR) => {
          // console.log(ERROR);
          // console.log(ERROR);
          console.log("Here is the ERROR");

        })

        return coin;
    }
}
