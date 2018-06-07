var im108num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims108 = [
	'./nature-gorge-verdon_i0.jpg','./nature-gorge-verdon_i1.jpg','./nature-gorge-verdon_i2.jpg','./nature-gorge-verdon_i3.jpg','./nature-gorge-verdon_i4.jpg','./nature-gorge-verdon_i5.jpg','./nature-gorge-verdon_i6.jpg','./nature-gorge-verdon_i7.jpg',
	'./nature-gorge-verdon_i8.jpg','./nature-gorge-verdon_i9.jpg'
];
var im108 = document.getElementById('im108id'); 
function slekart108(){
	im108num = (im108num + 1) % (ims108.length-1);
	im108.src = ims108[im108num]; 
} 
function kaRot108() {
for (var i = 0*108; i < 99*ims108.length; i++)  var timeoutId = setTimeout(slekart108, i*vreBlizkih+Math.ceil(Math.random()*i*vreBlizkih) - i*vreBlizkih/2);
}