let mdate;
let time;
let date;
setInterval(()=>{
    let mdate= new Date();
let time=mdate.getHours()+":"+mdate.getMinutes()+":"+mdate.getSeconds();
let date=mdate.toLocaleDateString();
document.querySelector('.tm').innerHTML=time;
document.querySelector('.tm1').innerHTML=date;
},1000)