class UI{
    constructor(){
        this.outputResult=document.getElementById("outputResult");
        this.outputFirst=document.getElementById("outputFirst");
        this.outputSecond=document.getElementById("outputSecond");
    }
    displayOutput(output){
        this.outputResult.value=output;

    }

    changeCurrencyDisplay(base,symbol){
        
        this.outputFirst.textContent=base;
        this.outputSecond.textContent=symbol;
    }
}