var im13num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims13 = [
	'./sightseeing-Valbonne_i0.jpg','./sightseeing-Valbonne_i1.jpg','./sightseeing-Valbonne_i2.jpg','./sightseeing-Valbonne_i3.jpg','./sightseeing-Valbonne_i4.jpg','./sightseeing-Valbonne_i5.jpg','./sightseeing-Valbonne_i6.jpg','./sightseeing-Valbonne_i7.jpg','./sightseeing-Valbonne_i8.jpg','./sightseeing-Valbonne_i9.jpg','./sightseeing-Valbonne_i10.jpg'
];
var im13 = document.getElementById('im13id'); 
function slekart13(){
	im13num = (im13num + 1) % (ims13.length-1);
	im13.src = ims13[im13num]; 
} 
function kaRot13() {
for (var i = 0*13; i < 99*ims13.length; i++)  var timeoutId = setTimeout(slekart13, i*vreBlizkih+Math.ceil(Math.random()*i*vreBlizkih) - i*vreBlizkih/2);
}