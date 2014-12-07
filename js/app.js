$(document).ready(function() { 

    
var a = 1;
var value = "";     
    
    for (a = 1; a <101; a++)
    {
        
        if (a==0)
        {
            $("body").append("0"+"<br>");
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
        else {
            $("body").append(a+"<br>");
        }
    }
    

});