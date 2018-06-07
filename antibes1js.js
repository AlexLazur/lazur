var im1num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims1 = [
	'./sightseeing-Antibes_i0.jpg','./sightseeing-Antibes_i1.jpg','./sightseeing-Antibes_i2.jpg','./sightseeing-Antibes_i3.jpg','./sightseeing-Antibes_i4.jpg','./sightseeing-Antibes_i5.jpg','./sightseeing-Antibes_i6.jpg','./sightseeing-Antibes_i7.jpg'
];
var im1 = document.getElementById('im1id');
function slekart1(){
	im1num = (im1num + 1) % (ims1.length-1);
	im1.src = ims1[im1num];
} 
function kaRot1() {
for (var i = 0*0; i < 99*ims1.length; i++)  var timeoutId = setTimeout(slekart1, i*vreBlizkih+Math.ceil(Math.random()*i*vreBlizkih) - i*vreBlizkih/2);
}