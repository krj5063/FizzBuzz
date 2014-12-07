$(document).ready(function() { 

var a = prompt("Please enter a number between 1 and 100") - 0;


  
var fBuzz = function (a) {    
    {
        if (a==0)
        {
            $("body").append("0"+"<br>");
        }
        else if (a > 100)
        {
            alert("That number is higer than 100! You bozo!");
        }
        else if ((a % 1) != 0)
        {
            alert("You entered a decimal, please refresh and try again");
        }
        else if ((a % 15) ==0)
        {
            $("body").append("Fizz Buzz"+"<br>");
        }
        else if ((a % 5) ==0)    
        {
            $("body").append("Buzz"+"<br>");
        }
        else if ((a % 3) ==0)
        {
            $("body").append("Fizz"+"<br>");
        }
        else if (isNaN(a))
        {
            alert("ERROR, you did not enter a number!");
        }
        else {
            $("body").append(a+"<br>");
        }
    }
}

console.log(fBuzz(a)); 

});

