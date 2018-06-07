var im102num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims102 = [
	'./activity-surf_i0.jpg','./activity-surf_i1.jpg','./activity-surf_i2.jpg','./activity-surf_i3.jpg','./activity-surf_i4.jpg','./activity-surf_i5.jpg','./activity-surf_i6.jpg','./activity-surf_i7.jpg'
];
var im102 = document.getElementById('im102id'); 
function slekart102(){
	im102num = (im102num + 1) % (ims102.length-1);
	im102.src = ims102[im102num]; 
} 
function kaRot102() {
for (var i = 0*102; i < 99*ims102.length; i++)  var timeoutId = setTimeout(slekart102, i*vreBlizkih+Math.ceil(Math.random()*i*vreBlizkih) - i*vreBlizkih/2);
}