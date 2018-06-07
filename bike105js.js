var im105num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims105 = [
	'./activity-bike_i0.jpg','./activity-bike_i1.jpg','./activity-bike_i2.jpg','./activity-bike_i3.jpg','./activity-bike_i4.jpg','./activity-bike_i5.jpg','./activity-bike_i6.jpg','./activity-bike_i7.jpg'
];
var im105 = document.getElementById('im105id');
function slekart105(){
	im105num = (im105num + 1) % (ims105.length-1);
	im105.src = ims105[im105num];
} 
function kaRot105() {
for (var i = 0*0; i < 99*ims105.length; i++)  var timeoutId = setTimeout(slekart105, i*vreBlizkih+Math.ceil(Math.random()*i*vreBlizkih) - i*vreBlizkih/2);
}	