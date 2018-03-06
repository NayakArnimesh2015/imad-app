console.log('Loaded!');
//changes are to be made

var element = document.getElementById('main-text');
element.innerHTML='NEW VALUE';

//move the image
 var img = document.getElementById('img');
 img.onclick =function() {
     img.style.marginleft = '100px' ;
 };