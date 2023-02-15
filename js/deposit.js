document.getElementById('btn-deposit').addEventListener('click', function(){
    const inputFieldValue = inputField('input-field');
    const elementFieldValue = innerField('previousDeposit');
    const elementFieldValue2 = innerField('mainBalance');
    const totalNewValue = inputFieldValue + elementFieldValue;
    innerValue('previousDeposit', totalNewValue);
    const totalNewBalance = totalNewValue + elementFieldValue2;
    innerValue('mainBalance', totalNewBalance);
})