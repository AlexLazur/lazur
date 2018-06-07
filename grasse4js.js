var im4num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims4 = [
	'./sightseeing-Grasse_i0.jpg','./sightseeing-Grasse_i1.jpg','./sightseeing-Grasse_i2.jpg','./sightseeing-Grasse_i3.jpg','./sightseeing-Grasse_i4.jpg','./sightseeing-Grasse_i5.jpg','./sightseeing-Grasse_i6.jpg','./sightseeing-Grasse_i7.jpg'
];
var im4 = document.getElementById('im4id');
function slekart4(){
	im4num = (im4num + 1) % (ims4.length-1);
	im4.src = ims4[im4num];
} 
function kaRot4() {
for (var i = 0*0; i < 99*ims4.length; i++)  var timeoutId = setTimeout(slekart4, i*vreBlizkih+Math.ceil(Math.random()*i*vreBlizkih) - i*vreBlizkih/2);
}	