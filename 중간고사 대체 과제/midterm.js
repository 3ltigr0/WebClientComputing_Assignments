var now = new Date();
var birth = new Date(1996, 10, 27);
var passedDay =  parseInt((now.getTime() - birth.getTime())/(24*60*60*1000));
document.querySelector('#borndate').innerText = passedDay+"일";
var after100 = new Date(birth.getTime() + 100 * (24*60*60*1000));
document.querySelector('#b').innerText = after100.getFullYear()+"년 "+(after100.getMonth()+1)+"월 "+after100.getDate()+"일";
document.querySelector('#c').innerText = passedDay+"일 후";
var afternow = new Date(birth.getTime() + passedDay * (24*60*60*1000));
document.querySelector('#d').innerText = afternow.getFullYear()+"년 "+(afternow.getMonth()+1)+"월 "+afternow.getDate()+"일";