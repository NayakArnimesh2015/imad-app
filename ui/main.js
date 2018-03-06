console.log('Loaded!');
//changes are to be made

var element = document.getElementById('main-text');
element.innerHTML='NEW VALUE';

//move the image
 var img = document.getElementById('madi');
 var marginLeft = 0;
 function moveRight() {
     marginLeft = marginLeft + 10;
     img.style.marginLeft = marginleft + 'px';
 }
 img.onclick = function() {
     var interval = setInterval(moveRight ,100)
     
 };