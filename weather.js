let cName = document.getElementById('input');
let search = document.getElementById('button');

let cLocation = document.getElementById('name');
let temperature = document.getElementById('temp');
let description = document.getElementById('desc');


search.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cName.value+'&appid=1974a1084a778770a141908419357f8c')
    .then(response => response.json())
    .then(data => {
        console.log(data)
        let x = ''
        let Nname = data['name'];
        let Ttemp = data['main']['temp'] - 273.15;
        let Ctemp = Ttemp.toFixed(2)
        let Ddesc = data['weather']['0']['description']
        x+=`<h1> City </h1>
            <h3 id="name">${Nname}</h3>
            <h1> Temperature </h1>
            <h3 id="temp">${Ctemp} C°</h3>
            <h1> State </h1>
            <h3 id="desc">${Ddesc}</h3>`
        
        
        
        document.getElementById('result_area').innerHTML = x;
    })
    .catch(err => alert('Wrong city name!'))

})
