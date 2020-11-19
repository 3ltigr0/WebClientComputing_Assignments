var num = Math.floor(Math.random() * 46);
var inputnum = document.querySelector("#inputnum");
var con = document.querySelector("#son");
var re = document.querySelector("#se");
var trial = document.querySelector("#trial");
var correct = document.querySelector("#correct");
var tries = 0;

con.onclick = check;
re.onclick = retry;



function check()
{
    if(inputnum.value < num)
    {
        correct.innerHTML = "UP";
        tries += 1;
        trial.innerHTML = "시도 횟수: " + tries + "회";
    }
    else if(inputnum.value > num)
    {
        correct.innerHTML = "DOWN";
        tries += 1;
        trial.innerHTML = "시도 횟수: " + tries + "회";
    }
    else
    {
        correct.innerHTML = "정답!";
    }
}
function retry()
{
    tries = 0;
    var num = Math.floor(Math.random() * 46);
    correct.innerHTML = "";
    trial.innerHTML = "시도 횟수: " + tries + "회";
}
window.onkeydown = function(e)
{
    if(e.keyCode==13)
    {
        check();
    }
}