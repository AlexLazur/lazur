var im10num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims10 = [
	'./sightseeing-Saint-Paul-de-Vence_i0.jpg','./sightseeing-Saint-Paul-de-Vence_i1.jpg','./sightseeing-Saint-Paul-de-Vence_i2.jpg','./sightseeing-Saint-Paul-de-Vence_i3.jpg','./sightseeing-Saint-Paul-de-Vence_i4.jpg','./sightseeing-Saint-Paul-de-Vence_i5.jpg','./sightseeing-Saint-Paul-de-Vence_i6.jpg','./sightseeing-Saint-Paul-de-Vence_i2.jpg'
];
var im10 = document.getElementById('im10id'); 
function slekart10(){
	im10num = (im10num + 1) % (ims10.length-1);
	im10.src = ims10[im10num]; 
} 
function kaRot10() {
for (var i = 0*10; i < 99*ims10.length; i++)  var timeoutId = setTimeout(slekart10, i*vreBlizkih+Math.ceil(Math.random()*i*vreBlizkih) - i*vreBlizkih/2);
}