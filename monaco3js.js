var im3num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims3 = [
	'./sightseeing-Monaco_i0.jpg','./sightseeing-Monaco_i1.jpg','./sightseeing-Monaco_i2.jpg','./sightseeing-Monaco_i3.jpg','./sightseeing-Monaco_i4.jpg','./sightseeing-Monaco_i5.jpg','./sightseeing-Monaco_i6.jpg','./sightseeing-Monaco_i7.jpg'
];
var im3 = document.getElementById('im3id');
function slekart3(){
	im3num = (im3num + 1) % (ims3.length-1);
	im3.src = ims3[im3num];
} 
function kaRot3() {
for (var i = 0*0; i < 99*ims3.length; i++)  var timeoutId = setTimeout(slekart3, i*vreBlizkih+Math.ceil(Math.random()*i*vreBlizkih) - i*vreBlizkih/3);
}	