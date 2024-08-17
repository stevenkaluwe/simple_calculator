const Num1 = document.getElementById("number1");
const Num2 = document.getElementById("number2");
const OutPut = document.getElementById('output');

function Add(){
    let NumberOne = Num1.value;
    let NumberTwo = Num2.value;
    let adding = Number(NumberOne) + Number(NumberTwo);
    if(NumberOne==='' && NumberTwo==''){
        alert('No number is in the input');
    }else{
        OutPut.innerText = adding;
    }
};


function Subtraction(){
    let NumberOne = Num1.value;
    let NumberTwo = Num2.value;
    let adding = Number(NumberOne) - Number(NumberTwo);
    if(NumberOne==='' && NumberTwo==''){
        alert('No number is in the input');
    }else{
        OutPut.innerText = adding;
    };

};


function Division(){
    let NumberOne = Num1.value;
    let NumberTwo = Num2.value;
    let adding = Number(NumberOne) / Number(NumberTwo);
    if(NumberOne==='' && NumberTwo==''){
        alert('No number is in the input');
    }else{
        OutPut.innerText = adding;
    };
};