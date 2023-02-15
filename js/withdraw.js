document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = inputField('withdraw-field');
    const previousWithdraw = innerField('previousWithdraw');
    const elementFieldValue2 = innerField('mainBalance');
    const totalWithdraw = withdrawField + previousWithdraw;
    innerValue('previousWithdraw', totalWithdraw);
    const totalNewBalance = elementFieldValue2 - withdrawField;
    innerValue('mainBalance', totalNewBalance);
})