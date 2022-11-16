const firstCurrencyOptions = document.getElementById("firstCurrency");
const secondCurrencyOptions = document.getElementById("secondCurrency");
const amountInput = document.getElementById("amount")
const ui = new UI();
const currency = new Currency(firstCurrencyOptions.options[firstCurrencyOptions.selectedIndex].value, secondCurrencyOptions.options[secondCurrencyOptions.selectedIndex].value);

eventListener();
function eventListener() {
    amountInput.addEventListener("input", exchangeCurrency);
    firstCurrencyOptions.onchange = exchangeCurrency
    secondCurrencyOptions.onchange = exchangeCurrency


}


function exchangeCurrency() {
    const base = firstCurrencyOptions.options[firstCurrencyOptions.selectedIndex].value;
    const symbol = secondCurrencyOptions.options[secondCurrencyOptions.selectedIndex].value
    currency.changeAmount(amountInput.value);
    currency.changeBase(base);
    currency.changeSymbol(symbol);
    ui.changeCurrencyDisplay(base, symbol)


    currency.exchangeCurrency()
        .then(
            response => ui.displayOutput(response),
            err => alert(err)
        )





}