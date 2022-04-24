let left = document.getElementById('left');
let right = document.getElementById('right');
let img = document.getElementById('pic');

let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')

let pics = [
    'Images/kit1.jpg',
    'Images/kit2.jpg',
    'Images/kit3.jpg'
]

let current = 0;
img.src = pics[current];
btn1.style.backgroundColor = 'rgb(0, 199, 199)';

function Color(){
    if(current == 0){
        btn1.style.backgroundColor = 'rgb(0, 199, 199)';
        btn2.style.backgroundColor = 'rgb(189, 255, 255)';
        btn3.style.backgroundColor = 'rgb(189, 255, 255)';
    }
    else if(current == 1){
        btn2.style.backgroundColor = 'rgb(0, 199, 199)';
        btn1.style.backgroundColor = 'rgb(189, 255, 255)';
        btn3.style.backgroundColor = 'rgb(189, 255, 255)';
    }
    else{
        btn3.style.backgroundColor = 'rgb(0, 199, 199)';
        btn2.style.backgroundColor = 'rgb(189, 255, 255)';
        btn1.style.backgroundColor = 'rgb(189, 255, 255)';
    }
}
right.onclick = function(){
    current++;
    if(current === pics.length){
        current = 0;
    }
    Color()
    img.src = pics[current];
    
}
left.onclick = function(){
    current--;
    if(current === -1){
        current = pics.length-1;
    }
    img.src = pics[current];
    Color()
    
}

btn1.onclick = function() {
    current = 0;
    img.src = pics[current]
    Color()
}
btn2.onclick = function() {
    current = 1;
    img.src = pics[current]
    Color()
}

btn3.onclick = function() {
    current = 2;
    img.src = pics[current]
    Color()
}

