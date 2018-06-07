var im112num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims112 = [
	'./voyage-india_i0.jpg','./voyage-india_i1.jpg','./voyage-india_i2.jpg','./voyage-india_i3.jpg','./voyage-india_i4.jpg','./voyage-india_i5.jpg','./voyage-india_i6.jpg','./voyage-india_i7.jpg','./voyage-india_i8.jpg'
];
var im112 = document.getElementById('im112id'); 
function slekart112(){
	im112num = (im112num + 1) % (ims112.length-1);
	im112.src = ims112[im112num]; 
} 
function kaRot112() {
for (var i = 0*112; i < 99*ims112.length; i++)  var timeoutId = setTimeout(slekart112, i*vreBlizkih+Math.ceil(Math.random()*i*vreBlizkih) - i*vreBlizkih/2);
}