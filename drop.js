let elements = document.querySelectorAll('.item');
let area = document.getElementById('container');


area.addEventListener('dragover', function(e){
    e.preventDefault();
    area.style.border = '2px dashed green';
});

area.addEventListener('dragleave', function(e){
    e.preventDefault();
    area.style.border = '2px solid rgb(0, 153, 153)';
});

for(let ele of elements){
    ele.addEventListener('dragstart', function(e){
        
        e.dataTransfer.setData('e', this.id);
    })
    ele.addEventListener('dragend', function(e){
        
        area.style.border = '2px solid rgb(0, 153, 153)';
        
    })
}

area.addEventListener('drop', function(e){
    let ids =  e.dataTransfer.getData('e')
    let dritem = document.getElementById(ids);
    area.appendChild(dritem);
});