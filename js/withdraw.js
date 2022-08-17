

//step-1: add event handler with the withdraw button 
document.getElementById('btn-withdraw').addEventListener('click', function () {

    //step-2: get the withdraw amount from the withdraw input field 
    const withdrawField = document.getElementById('withdraw-field')

    //step2.5: also make sure to convert the input into a number by using parseFloat
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    //step-3: get previous withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    //step-4: calculate total withdraw amount
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
        //step 4.5: set total withdraw amount
    withdrawTotalElement.innerText = currentWithdrawTotal;

//step-5:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;

    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step-6: 
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    //step-6.5: set new balance total;

    balanceTotalElement.innerText = newBalanceTotal;




// step-7: clear the field
    withdrawField.value = '';

    
})