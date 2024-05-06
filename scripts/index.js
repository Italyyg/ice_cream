"use strict"
console.log("Hello I Work!")

//cone or cup w/h one scoop is 2.25
//additional scoops are 1.25

window.onload = function () {

    //calling the form
    let iceCreamForm = document.querySelector("#theForm");

    //making a function to run when submitting order
    iceCreamForm.addEventListener("submit", iceCreamOrder);
   

}
function iceCreamOrder(event) {

    event.preventDefault();

    //we are chhosing the whole document to then work with the ID's inside
    let theForm = event.target

    //the regular price of one scoop times how many scoops are asked for
    let iceCreamPrice = 2.25
    //(Making sure it calculates) console.log(iceCreamPrice);
    let Morescoops = 0;
    if (theForm.numScoops.value > 1) {

        Morescoops = (theForm.numScoops.value - 1) * 1.25;
    }
    iceCreamPrice += Morescoops
    // console.log(iceCreamPrice);

    let toppingsPrice = 0;
     if (theForm.coneOrCup.value === "cup") {
        
     if (theForm.sprinkles.checked) {

        toppingsPrice += .5;

     } if (theForm.hotFudge.checked) {

        toppingsPrice += 1.25;

     }if (theForm.whippedCream.checked) {

        toppingsPrice += .25;

    } if (theForm.cherry.checked) {

        toppingsPrice += .25;

    }}

    //Calculating totals 
    let basePrice = iceCreamPrice + toppingsPrice
    let taxRate = basePrice / (725 / 100)
    let totalDue = basePrice + taxRate

    let message = `
    <div> Base Price: $${basePrice.toFixed(2)}</div>
    <div> Tax: $${taxRate.toFixed(2)}</div>
    <div> Total Due: $${totalDue.toFixed(2)}</div>
    `;

    document.querySelector("#results").innerHTML = message;

}

//function showTopping(event){
//function displayTop() {
// if (theForm.coneOrCup.value === "cup") {
//     theForm.toppings.style.display = "block";
// }

//}

//theForm.cupOrCone.addEventListener("click", showTopping(event));

// if(event.target&&event.target.matches=== "cup")

// console.log(event.target.showTopping)

//theForm.toppings("cup").style.display ="block";
//}