class Currency {
    //https://api.apilayer.com/exchangerates_data/latest?apikey=dtr7iOFs2h3A1Vvt4R8Q4CfK9IbZ31bZ&symbols=TRY&base=EUR
    constructor(base, symbol) {
        this.apikey = "dtr7iOFs2h3A1Vvt4R8Q4CfK9IbZ31bZ"
        this.base = base;
        this.symbol = symbol;
        this.amount = null;
    }
    async exchangeCurrency() {

        if (this.amount) {
            const endpoint = `https://api.apilayer.com/exchangerates_data/latest?apikey=${this.apikey}&symbols=${this.symbol}&base=${this.base}`;

            const response = await fetch(endpoint);
            const json = await response.json();
            return await json.rates[this.symbol]*this.amount
        }
        else{
            return "Lütfen bir değer giriniz"
        }


    }

    changeBase(base) {
        this.base = base;
    }
    changeSymbol(symbol) {
        this.symbol = symbol;
    }

    changeAmount(amount){
        this.amount = amount;
    }

}