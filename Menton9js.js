var im9num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims9 = [
	'./sightseeing-Menton_i0.jpg','./sightseeing-Menton_i1.jpg','./sightseeing-Menton_i2.jpg','./sightseeing-Menton_i3.jpg','./sightseeing-Menton_i4.jpg','./sightseeing-Menton_i5.jpg','./sightseeing-Menton_i6.jpg','./sightseeing-Menton_i7.jpg',
	'./sightseeing-Menton_i8.jpg','./sightseeing-Menton_i9.jpg'
];
var im9 = document.getElementById('im9id'); 
function slekart9(){
	im9num = (im9num + 1) % (ims9.length-1);
	im9.src = ims9[im9num]; 
} 
function kaRot9() {
for (var i = 0*9; i < 99*ims9.length; i++)  var timeoutId = setTimeout(slekart9, i*vreBlizkih+Math.ceil(Math.random()*i*vreBlizkih) - i*vreBlizkih/2);
}