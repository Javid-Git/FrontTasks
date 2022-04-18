let value = document.getElementById('counter').innerHTML = 0;
function Compare(){
    if(value > 0){
        document.getElementById('counter').style.color = 'green';
    }
    else if(value < 0){
        document.getElementById('counter').style.color = 'red';
    }
    else{
        document.getElementById('counter').style.color = 'gray';
    
    }
}

function Increase(){
    value++;
    Compare()
    document.getElementById('counter').innerHTML = value;
}
function Decrease(){
    value--;
    Compare()
    document.getElementById('counter').innerHTML = value;
}
function Reset(){
    value = 0;
    Compare()
    document.getElementById('counter').innerHTML = value;
}
