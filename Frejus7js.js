var im7num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims7 = [
	'./sightseeing-Frejus_i0.jpg','./sightseeing-Frejus_i1.jpg','./sightseeing-Frejus_i2.jpg','./sightseeing-Frejus_i3.jpg','./sightseeing-Frejus_i4.jpg','./sightseeing-Frejus_i5.jpg','./sightseeing-Frejus_i6.jpg','./sightseeing-Frejus_i2.jpg'
];
var im7 = document.getElementById('im7id'); 
function slekart7(){
	im7num = (im7num + 1) % (ims7.length-1);
	im7.src = ims7[im7num]; 
} 
function kaRot7() {
for (var i = 0*7; i < 99*ims7.length; i++)  var timeoutId = setTimeout(slekart7, i*vreBlizkih+Math.ceil(Math.random()*i*vreBlizkih) - i*vreBlizkih/2);
}