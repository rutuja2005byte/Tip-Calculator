function calculateTip(billAmount , serviceRating){
    let tipPercentage;
    switch (serviceRating){
        case "Excellent":
            tipPercentage = 0.20;
            break;
        case "Good":
            tipPercentage = 0.15;
            break;
        case "Average":
            tipPercentage = 0.10;
            break;
        default:
            tipPercentage = 0.05;
    }
    const tip = billAmount * tipPercentage;
    const total = billAmount + tip;

    return { tip , total};
}
function handlecalculate(){
    const bill = parseFloat(document.querySelector(".bill").value);
    const rating = document.querySelector(".rating").value; 
    if(!bill || bill <=0){
        alert("Enter valid amount");
        return;
    }
    const result = calculateTip(bill,rating);

    document.querySelector(".tip").innerText = "₹ " + result.tip.toFixed(2);
    document.querySelector(".total").innerText = "₹ " + result.total.toFixed(2);
}