let menu = document.getElementById('call-m');
let menu_opt = document.getElementById('menu-opt');
let closet = document.getElementById('close-m');

closet.innerHTML = 'X';
menu.onclick = function() {
    if(menu_opt.style.visibility === 'visible' || menu_opt.style.opacity === 1){
        menu_opt.style.visibility = 'hidden';
        closet.style.opacity = 0;
        menu_opt.style.opacity = 0;
        closet.style.visibility = 'hidden';
    }
    else{
        menu_opt.style.visibility = 'visible';
        closet.style.visibility = 'visible';
        closet.style.opacity = 1;
        menu_opt.style.opacity = 1;
    }

}
closet.onclick = function() {
    if(menu_opt.style.visibility === 'hidden' || menu_opt.style.opacity === 0){
        menu_opt.style.visibility = 'visible';
        closet.style.visibility = 'visible';
        closet.style.opacity = 1;
        menu_opt.style.opacity = 1;
    }
    else{
        menu_opt.style.visibility = 'hidden';
        closet.style.opacity = 0;
        menu_opt.style.opacity = 0;
        closet.style.visibility = 'hidden';
    }
}

let src_btn = document.getElementById('src-btn');

src_btn.onclick = function() {
    var search_menu = document.getElementById('search-menu');
    var center_all = document.getElementById('center-all');
    if(center_all.style.display === 'none'){
        center_all.style.display = 'block';
        center_all.style.opacity = 1;
        search_menu.style.display = 'none';
        search_menu.style.opacity = 0;
        console.log('asdas');


    }
    else{
        center_all.style.display = 'none';
        center_all.style.opacity = 0;
        search_menu.style.display = 'block';
        search_menu.style.opacity = 1;
    }
}