let atc = document.querySelectorAll('.atc');
let num = document.getElementById('count');
var count = 0;



if(localStorage.getItem('basket') === null) {
    localStorage.setItem('basket',JSON.stringify([]));
}
for(let cart of atc){
    cart.addEventListener('click', function(e){
        let basket = JSON.parse(localStorage.getItem('basket'));
        let prNums = localStorage.getItem('prNums');
        let id = e.target.parentElement.parentElement.parentElement.id;
        let pr_price = e.target.previousElementSibling.innerText;
        let pr_name = e.target.previousElementSibling.previousElementSibling.innerText;
        let pr_pic = e.target.parentElement.previousElementSibling.firstElementChild.src;
        
        let exist = basket.find(p => p.Id == id);
        if(exist == undefined){
            basket.push({
                Id: id,
                Name: pr_name,
                Price: pr_price,
                Src: pr_pic,
                Count: 1
            })
        }
        else{
            exist.Count++;
        }

        
        localStorage.setItem('basket', JSON.stringify(basket));
        Count();
    })
}
function Count() {
    let nums = JSON.parse(localStorage.getItem('basket'));
    document.getElementById('count').innerText = nums.length
}
Count();
