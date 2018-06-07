var im107num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims107 = [
	'./nature-cave_i0.jpg','./nature-cave_i1.jpg','./nature-cave_i2.jpg','./nature-cave_i3.jpg','./nature-cave_i4.jpg','./nature-cave_i5.jpg','./nature-cave_i6.jpg','./nature-cave_i1.jpg'
];
var im107 = document.getElementById('im107id'); 
function slekart107(){
	im107num = (im107num + 1) % (ims107.length-1);
	im107.src = ims107[im107num]; 
} 
function kaRot107() {
for (var i = 0*107; i < 99*ims107.length; i++)  var timeoutId = setTimeout(slekart107, i*vreBlizkih+Math.ceil(Math.random()*i*vreBlizkih) - i*vreBlizkih/2);
}