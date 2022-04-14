
function Tema() {
    let d = new Date();
    let h = d.getHours();
    if(h < 6 || h > 18){
        document.body.style.backgroundColor = 'rgb(0, 0, 0)';
        document.getElementById('time').style.color = 'rgb(255, 255, 255)';
        
    }
    if(h > 6 && h < 18){
        document.body.style.backgroundColor = 'rgb(255, 255, 255)';
        document.getElementById('time').style.color = 'rgb(0, 0, 0)';

    }
    if(h<10){
        h = '0' + h;
    }
    let m = d.getMinutes();
    if(m<10){
        m = '0' + m;
    }
    let s = d.getSeconds();
    if(s<10){
        s = '0' + s;
    }
    let time = h + ":" + m + ":" + s;
    document.getElementById("time").innerHTML = time;
    
    if(h>6 && h<18){
        document.body.style.backgroundColor = 'rgb(255, 255, 255)';
    } 
}
Tema();