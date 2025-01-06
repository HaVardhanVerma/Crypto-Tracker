export var currencySymbol = '$';

export const setCurrencySymbol = (symbol) => {
    currencySymbol = symbol;
    console.log("This is the symbol:- ", symbol);
}