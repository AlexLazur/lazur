var im6num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims6 = [
	'./sightseeing-Nice_i0.jpg','./sightseeing-Nice_i1.jpg','./sightseeing-Nice_i2.jpg','./sightseeing-Nice_i3.jpg','./sightseeing-Nice_i4.jpg','./sightseeing-Nice_i5.jpg','./sightseeing-Nice_i6.jpg','./sightseeing-Nice_i7.jpg'
];
var im6 = document.getElementById('im6id');
function slekart6(){
	im6num = (im6num + 1) % (ims6.length-1);
	im6.src = ims6[im6num];
} 
function kaRot6() {
for (var i = 0*0; i < 99*ims6.length; i++)  var timeoutId = setTimeout(slekart6, i*vreBlizkih+Math.ceil(Math.random()*i*vreBlizkih) - i*vreBlizkih/2);
}	