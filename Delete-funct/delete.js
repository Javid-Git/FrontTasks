let area = document.getElementById('input');

area.onkeydown = function(e){
    var input = document.getElementById('input').value;
    if(e.keyCode === 39){
        var string = input.slice(0, input.length-1);
        document.getElementById('input').value = string;
    }
}