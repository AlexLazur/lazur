var im5num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims5 = [
	'./sightseeing-Cagnes_i0.jpg','./sightseeing-Cagnes_i1.jpg','./sightseeing-Cagnes_i2.jpg','./sightseeing-Cagnes_i3.jpg','./sightseeing-Cagnes_i4.jpg','./sightseeing-Cagnes_i5.jpg','./sightseeing-Cagnes_i6.jpg','./sightseeing-Cagnes_i7.jpg'
];
var im5 = document.getElementById('im5id');
function slekart5(){
	im5num = (im5num + 1) % (ims5.length-1);
	im5.src = ims5[im5num];
}
function kaRot5() {
for (var i = 0*0; i < 99*ims5.length; i++)  var timeoutId = setTimeout(slekart5, i*vreBlizkih+Math.ceil(Math.random()*i*vreBlizkih) - i*vreBlizkih/2);
}