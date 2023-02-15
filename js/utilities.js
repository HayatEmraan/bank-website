function inputField(inputId){
    const inputValue = document.getElementById(inputId);
    // const inputVa = inputValue.value;
    const inputFloat = parseFloat(inputValue.value);
    inputValue.value = '';
    return inputFloat;
}
function innerField(elementId){
    const innerFieldValue = document.getElementById(elementId);
    const innerFi = parseFloat(innerFieldValue.innerText);
    return innerFi;
}
function innerValue(previousValue, newValue){
    const previousDepositDoc = document.getElementById(previousValue);
    // const previousValueDate = previousDepositDoc.innerText;
    previousDepositDoc.innerText = newValue;
    
}