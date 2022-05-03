function Count() {
    let nums = JSON.parse(localStorage.getItem('basket'));
    document.getElementById('count').innerText = nums.length
}
Count();

let basket = JSON.parse(localStorage.getItem('basket'));

let btns = document.getElementById('btn_list');
if(basket.length == 0){
    document.getElementById('alert').classList.remove('d-none');
}
else{
    btns.classList.remove('d-none');
    document.getElementById('alert').classList.add('d-none');
    let pr = '';
    for(let product of basket) {
        pr += `
        <div class="pr-box">
        <div class="row align-items-center justify-content-between">
            <div class="col-lg-2">
                <img class="img-fluid" src="${product.Src}" alt="">
            </div>
            <div class="col-lg-3">
                <h4>${product.Name}</h4>
            </div>
            <div class="col-lg-3">
                <h5>${product.Price}</h5>
            </div>
            <div class="col-lg-2">
                <input type="number" value=${product.Count}>
            </div>
            <div class="col-lg-1">
                <i class="fa fa-trash delete_icon" aria-hidden="true"></i>
            </div>
        </div>
    </div> 
        `
        document.getElementById('list').innerHTML = pr;
    }


}

let refresh_btn = document.getElementById('refresh');
let clear_btn = document.getElementById('clear');


let delete_icon = document.querySelectorAll('.delete_icon');
for(let d_btn of delete_icon) {
    d_btn.addEventListener('click',function(e){
        for (let i = 0; i < basket.length; i++) {
            if(basket[i].Name == e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstElementChild.innerHTML){
                console.log('asdasd')
                basket.splice(i, 1)
                localStorage.setItem('basket', JSON.stringify(basket));
                location.reload();

            } 
        }
    })
}

refresh_btn.addEventListener('click',function(){
    document.body.style.opacity = '0'
    setTimeout(() => {
        document.body.style.opacity = '1'
        location.reload();
    }, 500);
})

clear_btn.addEventListener('click',function(){
    localStorage.setItem('basket',JSON.stringify([]));
    location.reload();
})
