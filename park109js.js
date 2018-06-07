var im109num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims109 = [
	'./nature-park_i0.jpg','./nature-park_i1.jpg','./nature-park_i2.jpg','./nature-park_i3.jpg','./nature-park_i4.jpg','./nature-park_i5.jpg','./nature-park_i6.jpg','./nature-park_i7.jpg','./nature-park_i8.jpg','./nature-park_i9.jpg'
];
var im109 = document.getElementById('im109id'); 
function slekart109(){
	im109num = (im109num + 1) % (ims109.length-1);
	im109.src = ims109[im109num]; 
} 
function kaRot109() {
for (var i = 0*109; i < 99*ims109.length; i++)  var timeoutId = setTimeout(slekart109, i*vreBlizkih+Math.ceil(Math.random()*i*vreBlizkih) - i*vreBlizkih/2);
}