let str= "";
let display= document.getElementById('display');
let ans=0;

if(str == ""){
    display.value= "0";
    display.style.color= 'darkgrey';
}

function operator(value){
    if(value == '+' || value == '-' || value == '*' || value == '/'){
        return false;
    }
    return true;
}

function append(value){
    display.style.color= ''; 
    if(operator(value) && ans==1) {
        str="";
        ans=0;
    }
    else{
        ans=0;
    }

    str= str+value;
    display.value= str;
}

function clearAll(){
    str="";
    display.value="0";
    display.style.color= 'darkgrey';
}

function backSpace(){
    str= str.slice(0, -1);
    display.value= str;

    if(str==""){
        display.value="0";
        display.style.color= 'darkgrey';
    }
}

function result(){
    try{
        str= eval(str);
        str= String(str);
        display.value= str;
        ans=1;
    }
    catch(e){
        alert("Invalid Expression");
    }
}