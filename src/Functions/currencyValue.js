
var Currency = "usd";

export const currencyValue = async (currency) => {
    Currency = currency.toLowerCase();
}

export const getCurrencyValue = () => {
    return Currency;
}