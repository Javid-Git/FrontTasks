let change = document.getElementById('col-btn');
let reset = document.getElementById('res-btn');


change.onclick = function() {
    var color = document.getElementById('color').value.toLowerCase();
    document.body.style.backgroundColor = `${color}`;
    
}
reset.onclick = function() {
    document.body.style.backgroundColor = 'white';
    
}

