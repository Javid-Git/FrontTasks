let upload = document.getElementById('i-upl');
let drop_area = document.querySelector('.ccontainer');

drop_area.addEventListener('dragover', function(){
    this.style.border = 'dashed 2px green'
})
drop_area.addEventListener('dragleave', function(){
    this.style.border = 'none'
})
upload.onclick = function(){
    this.nextElementSibling.click();
    
}

let tr_count = 0;
upload.nextElementSibling.onchange = function(e){
    for(let file of e.target.files){
        let reader = new FileReader();
        reader.onloadend = function(ev){
            let ext = file.name.split('.').pop();
            if(ext == 'pdf'){
                let tr = document.createElement('tr');
                let name = document.createElement('td');
                let size = document.createElement('td');
    
                tr_count++;
                console.log(tr_count)
                let del = document.createElement('td');
                del.classList.add('delete');
                del.innerHTML = 'X';
        
        
                name.innerText = file.name;
                size.innerText = file.size
        
                tr.append(name, size, del);
                document.getElementById('tbody').appendChild(tr);
                del.onclick = function(t){
                    if(tr_count == 1){
                        document.getElementById('d-none').classList.add('d-none');
    
                    }
                    console.log(t.target);
                    t.target.parentElement.remove();
                    console.log(t.target.parentElement)
                    tr_count--;
                    console.log(tr_count)
    
                    
                }
                document.getElementById('d-none').classList.remove('d-none');

            }
            else{
                alert('You need to upload a PDF format file!')
            }

            
        }
        reader.readAsDataURL(file);            
    }
}
    