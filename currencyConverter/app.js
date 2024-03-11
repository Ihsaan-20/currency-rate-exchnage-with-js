const API_KEY = "5c8566eaefa43e7a29059db9";
const BASE_URL_TWO =`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/`;

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector(".dropdown button");

const fromCurrency = document.querySelector('.from select');
const toCurrency = document.querySelector('.to select');
const result = document.querySelector('#result');


for(select of dropdowns)
{
    for(currenyCode in countryList)
    {
        let newOption = document.createElement("option");
        newOption.innerText = currenyCode;
        newOption.value = currenyCode;

        if(select.name === "from" && currenyCode === "USD")
        {
            newOption.selected = 'selected';
        }else if(select.name === "to" && currenyCode === "PKR")
        {
            newOption.selected = 'selected';
        }
        select.append(newOption);       
    }

    select.addEventListener("change", (event) => {
        updateFlag(event.target);
    });
    
    const updateFlag = (element) => {
        let currencyCode = element.value;
        let countryCode = countryList[currencyCode];
        let newSrc = `https://flagsapi.com/${countryCode}/shiny/64.png`;
        let img = element.parentElement.querySelector("img");
        img.src = newSrc;
    }


    const updateExchangeRate = async () => {
        let amount = document.querySelector('#amount');
        let amountVal = parseFloat(amount.value);
        
        if (isNaN(amountVal) || amountVal < 1) {
            amountVal = 1;
            amount.value = "1";
        }
    
        const URL = `${BASE_URL_TWO}/${fromCurrency.value}`;
        let response = await fetch(URL);
        let data = await response.json();
        console.log(data);
    
        let rate = data.conversion_rates[toCurrency.value.toUpperCase()]; 
        let finalAmount = amountVal * rate;
        
        result.innerText = `${amountVal.toFixed(2)} ${fromCurrency.value.toUpperCase()} to ${finalAmount.toFixed(2)} ${toCurrency.value.toUpperCase()}`;
    }
    
    btn.addEventListener("click", (event) => {
        event.preventDefault();
        updateExchangeRate();
    });

    window.addEventListener("load", () => {
        updateExchangeRate();
    });

    //show current date;
    let date = new Date().toLocaleDateString();// 6/17/2022
    const currentDate = document.querySelector('#currentDate');
    currentDate.innerText = date;

}