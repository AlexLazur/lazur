var im110num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims110 = [
	'./voyage-asia_i0.jpg','./voyage-asia_i1.jpg','./voyage-asia_i2.jpg','./voyage-asia_i3.jpg','./voyage-asia_i4.jpg','./voyage-asia_i5.jpg','./voyage-asia_i6.jpg','./voyage-asia_i7.jpg','./voyage-asia_i8.jpg','./voyage-asia_i9.jpg','./voyage-asia_i10.jpg'
];
var im110 = document.getElementById('im110id'); 
function slekart110(){
	im110num = (im110num + 1) % (ims110.length-1);
	im110.src = ims110[im110num]; 
} 
function kaRot110() {
for (var i = 0*110; i < 99*ims110.length; i++)  var timeoutId = setTimeout(slekart110, i*vreBlizkih+Math.ceil(Math.random()*i*vreBlizkih) - i*vreBlizkih/2);
}