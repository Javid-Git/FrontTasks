let create = document.getElementById('create');

create.onclick = Create;
function Create() {
    let input = document.getElementById('input').value;
    let list = document.createElement('li');
    let order = document.getElementById('order');

    let span = document.createElement('span');
    let buttons = document.createElement('div')
    let edit = document.createElement('button');
    let button_d = document.createElement('button');


    button_d.innerHTML = 'X';
    button_d.className = 'btn btn-danger btn_d';
    list.classList.add('list');

   
    edit.innerHTML = 'Edit';
    edit.className = 'btn btn-warning edit btn_e';

    order.appendChild(list);
    list.appendChild(span);
    list.appendChild(buttons);
    buttons.appendChild(edit);
    buttons.appendChild(button_d);
    
    span.innerHTML = input;
    
    let btns_d = document.getElementsByClassName('btn_d');

    let btns_edit = document.getElementsByClassName('btn_e');

    for(let btn of btns_d){
        btn.onclick = function(e) {
            e.target.parentElement.parentElement.remove();
        }
    }

    for (let btn of btns_edit) {

        btn.onclick = function(e) {
            let input_new = document.getElementById('input').value
            input_new = e.target.parentElement.previousElementSibling.innerText;
            document.getElementById('create').innerHTML = 'Save';
            
            let update = document.getElementById('create');
            update.onclick = function() {
                e.target.parentElement.previousElementSibling.innerText = document.getElementById('input').value;
                document.getElementById('input').value = '';
                document.getElementById('create').innerHTML = 'Create';
            }
            
        }
        
    }


}