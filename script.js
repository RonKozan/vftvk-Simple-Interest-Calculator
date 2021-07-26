function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    // Check to ensure the principal value entered was greater than zero.
    checkInput();

    var interest = parseFloat(principal,10) * parseFloat(years,10) * parseFloat(rate, 10) / 100.0;
    var year = new Date().getFullYear() + parseInt(years);
    
    var result = document.getElementById("result").value;

    // Assemble the results text for display.
    document.getElementById("result").innerHTML = "If you deposit <mark>$"
        + principal + "</mark>,<br> at an interest rate of <mark>" + rate + 
        "%</mark>, <br>you will receive an amount of <mark>$" + interest +
        "</mark>, <br>in the year <mark>" + year + "</mark>.";
}
function checkInput()
{
    var principal = document.getElementById("principal").value;

    // check to ensure principal value is positive and non-negative
    if (principal < 1){
                alert("Enter a postive value.");
                principal.focus();
                return false;
     } 
     return true; 
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;

    document.getElementById("rate_val").innerText = rateval;
}       