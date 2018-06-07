var im104num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims104 = [
	'./activity-via-ferrata_i0.jpg','./activity-via-ferrata_i1.jpg','./activity-via-ferrata_i2.jpg','./activity-via-ferrata_i3.jpg','./activity-via-ferrata_i4.jpg','./activity-via-ferrata_i5.jpg','./activity-via-ferrata_i6.jpg','./activity-via-ferrata_i7.jpg'
];
var im104 = document.getElementById('im104id'); 
function slekart104(){
	im104num = (im104num + 1) % (ims104.length-1);
	im104.src = ims104[im104num]; 
} 
function kaRot104() {
for (var i = 0*104; i < 99*ims104.length; i++)  var timeoutId = setTimeout(slekart104, i*vreBlizkih+Math.ceil(Math.random()*i*vreBlizkih) - i*vreBlizkih/2);
}