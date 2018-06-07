var im11num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims11 = [
	'./sightseeing-Toulon_i0.jpg','./sightseeing-Toulon_i1.jpg','./sightseeing-Toulon_i2.jpg','./sightseeing-Toulon_i3.jpg','./sightseeing-Toulon_i4.jpg','./sightseeing-Toulon_i5.jpg','./sightseeing-Toulon_i6.jpg'
];
var im11 = document.getElementById('im11id'); 
function slekart11(){
	im11num = (im11num + 1) % (ims11.length-1);
	im11.src = ims11[im11num]; 
} 
function kaRot11() {
for (var i = 0*11; i < 99*ims11.length; i++)  var timeoutId = setTimeout(slekart11, i*vreBlizkih+Math.ceil(Math.random()*i*vreBlizkih) - i*vreBlizkih/2);
}