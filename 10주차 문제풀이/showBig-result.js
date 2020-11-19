var bigpic = document.querySelector('#book');
var smallpics = document.querySelectorAll(".small");

for(var i = 0; i < smallpics.length; i++)
{
    smallpics[i].addEventListener("click", changepic);
}

function changepic()
{
    var newpic = this.src;
    bigpic.setAttribute("src", newpic);
}

var isopen = false;
var view = document.querySelector("#view");

view.addEventListener("click", function() {
    if (isopen == false) {
        document.querySelector("#detail").style.display = "block";
        view.innerHTML = "�� ���� �ݱ�";
        isopen = true;
    }
    else {
        document.querySelector("#detail").style.display = "none";
        view.innerHTML = "�� ���� ����";
        isopen = false;
    }
})