let username = document.getElementById('input-n');
let mail = document.getElementById('input-m');
let password = document.getElementById('input-p');

function Check_n(){
    let name = document.forms['myform']['name'].value
    let password = document.forms['myform']['password'].value
    let email = document.forms['myform']['mail'].value
    if(name.length < 6 ){
        alert('The username should consist of at least 6 characters');
        document.forms['myform']['name'].value = '';
        return false;
    }
    else if(name.slice(0, 1) != name.slice(0, 1).toUpperCase()){
        alert('The username should start with upper case letter!');
        document.forms['myform']['name'].value = '';

        console.log(document.forms['myform']['name'].value.slice(0, 2))
        return false;
    }
    
    if(password.length < 6){
        alert('The password should consist of at least 6 characters');
        document.forms['myform']['password'].value = '';
        return false;
    }

    var re = /\S+@\S+\.\S+/;
    if(re.test(email) != true){
        alert('Your e-mail adress should be same format as in example')
    }
}
