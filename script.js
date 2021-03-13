var pizza_array = ["bdc pizza", "halal chicken pizza", "gyro pizza"];

var pizza_suggestions = "";

document.getElementById("pre display").innerHTML = pizza_array;

function submit()
{
    pizza_suggestions = document.getElementById(name_of_pizza).innerHTML;

    pizza_array.push(pizza_suggestions);
    document.getElementById("display").innerHTML = pizza_array;
}