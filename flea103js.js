var im103num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims103 = [
	'./shopping-flea-market_i0.jpg','./shopping-flea-market_i1.jpg','./shopping-flea-market_i2.jpg','./shopping-flea-market_i3.jpg','./shopping-flea-market_i4.jpg','./shopping-flea-market_i5.jpg','./shopping-flea-market_i6.jpg','./shopping-flea-market_i7.jpg'
];
var im103 = document.getElementById('im103id');
function slekart103(){
	im103num = (im103num + 1) % (ims103.length-1);
	im103.src = ims103[im103num];
} 
function kaRot103() {
for (var i = 0*0; i < 99*ims103.length; i++)  var timeoutId = setTimeout(slekart103, i*vreBlizkih+Math.ceil(Math.random()*i*vreBlizkih) - i*vreBlizkih/2);
}	