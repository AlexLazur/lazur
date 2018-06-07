var im12num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims12 = [
	'./sightseeing-Vence_i0.jpg','./sightseeing-Vence_i1.jpg','./sightseeing-Vence_i2.jpg','./sightseeing-Vence_i3.jpg','./sightseeing-Vence_i4.jpg','./sightseeing-Vence_i5.jpg','./sightseeing-Vence_i6.jpg','./sightseeing-Vence_i7.jpg'
];
var im12 = document.getElementById('im12id'); 
function slekart12(){
	im12num = (im12num + 1) % (ims12.length-1);
	im12.src = ims12[im12num]; 
} 
function kaRot12() {
for (var i = 0*12; i < 99*ims12.length; i++)  var timeoutId = setTimeout(slekart12, i*vreBlizkih+Math.ceil(Math.random()*i*vreBlizkih) - i*vreBlizkih/2);
}