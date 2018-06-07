var im106num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims106 = [
	'./museum-art_i0.jpg','./museum-art_i1.jpg','./museum-art_i2.jpg','./museum-art_i3.jpg','./museum-art_i4.jpg','./museum-art_i5.jpg','./museum-art_i6.jpg','./museum-art_i7.jpg'
];
var im106 = document.getElementById('im106id'); 
function slekart106(){
	im106num = (im106num + 1) % (ims106.length-1);
	im106.src = ims106[im106num]; 
} 
function kaRot106() {
for (var i = 0*106; i < 99*ims106.length; i++)  var timeoutId = setTimeout(slekart106, i*vreBlizkih+Math.ceil(Math.random()*i*vreBlizkih) - i*vreBlizkih/2);
}