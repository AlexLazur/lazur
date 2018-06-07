var im8num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims8 = [
	'./sightseeing-Marseille_i0.jpg','./sightseeing-Marseille_i1.jpg','./sightseeing-Marseille_i2.jpg','./sightseeing-Marseille_i3.jpg','./sightseeing-Marseille_i4.jpg','./sightseeing-Marseille_i5.jpg','./sightseeing-Marseille_i6.jpg','./sightseeing-Marseille_i7.jpg'
];
var im8 = document.getElementById('im8id'); 
var im8title="вид Марселя недалеко от старого города";
function slekart8(){
	im8num = (im8num + 1) % (ims8.length-1);
	im8.src = ims8[im8num]; 
} 
function kaRot8() {
for (var i = 0*8; i < 99*ims8.length; i++)  var timeoutId = setTimeout(slekart8, i*vreBlizkih+Math.ceil(Math.random()*i*vreBlizkih) - i*vreBlizkih/2);
}