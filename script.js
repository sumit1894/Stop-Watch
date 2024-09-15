const number=document.querySelector('.number');
const output=document.querySelector('.output');

const Start=document.querySelector('.Start');
const Stop=document.querySelector('.Stop');
const Reset=document.querySelector('.Reset');
const getTime=document.querySelector('.getTime');
const clearTime=document.querySelector('.clearTime');

let count=1;
let countdownvalue;


const countdown=()=>{
    countdownvalue=setInterval(()=>{
        number.innerText=count++;
    },1000);
}





Start.addEventListener('click',()=>{
    countdown(countdown);
});

Stop.addEventListener('click',()=>{
    clearInterval(countdownvalue);
});

Reset.addEventListener('click',()=>{
    clearInterval(countdownvalue);
    count=0;
    number.innerText=count; 
});

getTime.addEventListener('click',()=>{
    const para=document.createElement('p');
    para.innerText=`Time is ${number.innerText}`;
    output.append(para);

});

clearTime.addEventListener('click',()=>{
    output.innerText='';

    clearInterval(countdownvalue);
    count=0;
    number.innerText=count; 

});

