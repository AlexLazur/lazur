var im111num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims111 = [
	'./voyage-europe_i0.jpg','./voyage-europe_i1.jpg','./voyage-europe_i2.jpg','./voyage-europe_i3.jpg','./voyage-europe_i4.jpg','./voyage-europe_i5.jpg','./voyage-europe_i6.jpg','./voyage-europe_i7.jpg'
];
var im111 = document.getElementById('im111id'); 
function slekart111(){
	im111num = (im111num + 1) % (ims111.length-1);
	im111.src = ims111[im111num]; 
} 
function kaRot111() {
for (var i = 0*111; i < 99*ims111.length; i++)  var timeoutId = setTimeout(slekart111, i*vreBlizkih+Math.ceil(Math.random()*i*vreBlizkih) - i*vreBlizkih/2);
}