// let reload = new Event('reload');

// let elem = document.getElementById('elem');

// elem.addEventListener('select', function() {

// })

// let reload = new Event('reload', {bubbles: true});

var elements = document.getElementsByTagName("*");

var clickEvent  = document.createEvent ('MouseEvents');
clickEvent.initEvent ('click', true, true);
for (var i=0; i < elements.length; i++) 
{    
    elements[i].dispatchEvent (clickEvent);
}