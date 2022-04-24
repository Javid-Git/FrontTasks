var me = 0;
var ai = 0;

let mec = document.getElementById('me-c');
mec.innerHTML = me;
let aic = document.getElementById('ai-c');
aic.innerHTML = ai;


let paper = document.getElementById('paper');
let rock = document.getElementById('rock');
let scissors = document.getElementById('scissors');

let result = document.getElementById('result-pic');
let buttons = document.getElementsByClassName('opt');

let array = [
    'paper.jpg',
    'rock.jpg',
    'scissors.jpg'
]


// paper.onclick = function(){
//     let rand = array[Math.floor(Math.random()*array.length)]

//     result.src = rand; 
//     result.src = rand;

// }
for (const btn of buttons) {
    btn.onclick = function(e) {
        let rand = array[Math.floor(Math.random()*array.length)]
        console.log(rand)
        
        result.src = rand;
        if(btn === paper && rand === array[0]){
            document.getElementById('res-txt').innerHTML = 'Fair!'
            document.getElementById('res-txt').className = 'fair';

        }
        else if(btn === paper && rand === array[1]){
            document.getElementById('res-txt').innerHTML = 'You Won!'
            document.getElementById('res-txt').className = 'win';
            me++;
            mec.innerHTML = me;
        }
        else if(btn === paper && rand === array[2]){
            document.getElementById('res-txt').innerHTML = 'You Lost!'
            document.getElementById('res-txt').className = 'lose';
            ai++;
            aic.innerHTML = ai;
        }

        if(btn === rock && rand === array[0]){
            document.getElementById('res-txt').innerHTML = 'You Lost!'
            document.getElementById('res-txt').className = 'lose';
            ai++;
            aic.innerHTML = ai;
        }
        else if(btn === rock && rand === array[1]){
            document.getElementById('res-txt').innerHTML = 'Fair!'
            document.getElementById('res-txt').className = 'fair';

        }
        else if(btn === rock && rand === array[2]){
            document.getElementById('res-txt').innerHTML = 'You Won!'
            document.getElementById('res-txt').className = 'win';
            me++;
            mec.innerHTML = me;
        }
        if(btn === scissors && rand === array[0]){
            document.getElementById('res-txt').innerHTML = 'You Won!'
            document.getElementById('res-txt').className = 'win';
            me++;
            mec.innerHTML = me;

        }
        else if(btn === scissors && rand === array[1]){
            document.getElementById('res-txt').innerHTML = 'You Lost!'
            document.getElementById('res-txt').className = 'lose';
            ai++;
            aic.innerHTML = ai;
        }
        else if(btn === scissors && rand === array[2]){
            document.getElementById('res-txt').innerHTML = 'Fair!'
            document.getElementById('res-txt').className = 'fair';
        }
    }
}