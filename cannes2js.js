var im2num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims2 = [
	'./sightseeing-Cannes_i0.jpg','./sightseeing-Cannes_i1.jpg','./sightseeing-Cannes_i2.jpg','./sightseeing-Cannes_i3.jpg','./sightseeing-Cannes_i4.jpg','./sightseeing-Cannes_i5.jpg','./sightseeing-Cannes_i6.jpg','./sightseeing-Cannes_i7.jpg'
];
var im2 = document.getElementById('im2id');
function slekart2(){
	im2num = (im2num + 1) % (ims2.length-1);
	im2.src = ims2[im2num];
} 
function kaRot2() {
for (var i = 0*0; i < 99*ims2.length; i++)  var timeoutId = setTimeout(slekart2, i*vreBlizkih+Math.ceil(Math.random()*i*vreBlizkih) - i*vreBlizkih/2);
}	


	
