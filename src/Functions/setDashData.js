var coinsData = [];

const setCoinData = (coins) => {
    coinsData = coins;
}

const getCoinData = () => {
    return coinsData;
}

export { setCoinData, getCoinData };