var im0num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims0 = [
	'./nature-cave_i0.jpg','./nature-cave_i1.jpg','./nature-cave_i2.jpg','./nature-cave_i3.jpg','./nature-cave_i4.jpg','./nature-cave_i5.jpg','./nature-cave_i6.jpg','./nature-cave_i1.jpg'
];
var im0 = document.getElementById('im0id'); 
var im0title="Средиземноморская пещера";
function slekart0(){
	im0num = (im0num + 1) % (ims0.length-1);
	im0.src = ims0[im0num]; 
	if(im0num==pernemoi+0) {im0title="Маленькая пляжная пещера";};
	if(im0num==pernemoi+1) {im0title="Морская пещера";};
	if(im0num==pernemoi+2) {im0title="Подземное озеро";};
	if(im0num==pernemoi+3) {im0title="Каланка с пещерами";};
	if(im0num==pernemoi+4) {im0title="Дикая пещера";};
	if(im0num==pernemoi+5) {im0title="Окультуренная пещера";};	
	if(im0num==pernemoi+6) {im0title="Дикая пещера";};
	//if(im0num==pernemoi+) {im0title="";};
} 
function kaRot0() {
for (var i = 0*0; i < 99*ims0.length; i++)  var timeoutId = setTimeout(slekart0, i*vreEks);
}