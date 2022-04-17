alert('Continue if you r over 18!')
function Confirm() {
    let text;
    if(confirm('Please confirm!') == true){
        document.getElementById('form').style.visibility = 'visible';
        document.getElementById('form').style.opacity = '1';
        document.getElementById('confirm').style.opacity = '0';
        document.getElementById('confirm').style.visibility = 'hidden';
        document.getElementById('form').style.transition = '1s';
    }
    else{
        text = "Goodbye!";
        document.getElementById('result').innerHTML = text;
    }
}
function Overage(){
    let overage = prompt('Please enter your age!')
    if(overage >= 18){
        document.getElementById('logged').innerHTML = 'You registered successfully!';
        document.body.style.backgroundColor = 'green';
        document.getElementById('form').style.backgroundColor = 'rgb(212, 250, 168)';
        document.getElementById('form').style.visibility = 'hidden';

    }
    else{
        document.getElementById('logged').innerHTML = 'Go play with your ball'
        document.body.style.backgroundColor = 'red'
        document.getElementById('form').style.backgroundColor = 'rgb(250, 208, 168)';
        document.getElementById('form').style.visibility = 'hidden';

    }
}
var form = document.getElementById("form");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);