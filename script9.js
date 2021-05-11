let billAmount = document.getElementById('bill-amount');
let tipPercentage = document.getElementById('tip-percentage');
let tipAmount = document.getElementById('tip-amount');
let total = document.getElementById('total');
let calculate = document.getElementById('calculate');

calculate.addEventListener('click',function(){
    billAmount = Number(billAmount.value);
    tipPercentage = Number(tipPercentage.value);
    if(isNaN(billAmount)||billAmount<=0||billAmount===null){
        alert('please enter e valid bill number');
    }
    else if(isNaN(tipPercentage)|| tipPercentage<=0|| tipPercentage===null){
        alert('plese enter e valid tippercentage');

    }
    else{
        let calculateTip = tipPercentage/100*billAmount;
        tipAmount.value = '$' + calculateTip;
        let calculateTotal = billAmount + calculateTip;
        total.value = '$' + calculateTotal;
    }
        
    
})