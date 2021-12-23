var num1=document.getElementById("num1")
var op=document.getElementById("op")
var num2=document.getElementById("num2")
// var btn=document.getElementById("button")
var result=document.getElementById("result")

function cal()
{
    if(num1.value==='' || num2.value==='')
    {
        window.alert('No Number entered')
    }
    else{
        var number1=Number(num1.value)
        var number2=Number(num2.value)
        // var result=Number(reslt.value)
        var opp=op.value
         if(opp==="+")
         {
            result.value= number1+number2
         }
         else if(opp==="-")
         {
            result.value= number1-number2
         }
         else if(opp==="*")
         {
            result.value= number1*number2
         }
         else
         {
             result.value=number1/number2
         }
    }
}
