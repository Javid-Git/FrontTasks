// let reload = new Event('reload');

// let elem = document.getElementById('elem');

// elem.addEventListener('select', function() {

// })

// let reload = new Event('reload', {bubbles: true});

var strongs = document.getElementsByTagName("*");
var s = window.getSelection();

if(s.rangeCount > 0) s.removeAllRanges();

for(var i = 0; i < strongs.length; i++) {
   var range = document.createRange();
   range.selectNode(strongs[i]);
   s.addRange(range);
}