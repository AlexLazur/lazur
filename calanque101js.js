var im101num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims101 = [
	'./beach-calanque_i0.jpg','./beach-calanque_i1.jpg','./beach-calanque_i2.jpg','./beach-calanque_i3.jpg','./beach-calanque_i4.jpg','./beach-calanque_i5.jpg','./beach-calanque_i6.jpg','./beach-calanque_i7.jpg'
];
var im101 = document.getElementById('im101id'); 
function slekart101(){
	im101num = (im101num + 1) % (ims101.length-1);
	im101.src = ims101[im101num]; 
} 
function kaRot101() {
for (var i = 0*101; i < 99*ims101.length; i++)  var timeoutId = setTimeout(slekart101, i*vreBlizkih+Math.ceil(Math.random()*i*vreBlizkih) - i*vreBlizkih/2);
}