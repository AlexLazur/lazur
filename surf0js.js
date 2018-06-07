var im0num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims0 = [
	'./activity-surf_i0.jpg','./activity-surf_i1.jpg','./activity-surf_i2.jpg','./activity-surf_i3.jpg','./activity-surf_i4.jpg','./activity-surf_i5.jpg','./activity-surf_i6.jpg','./activity-surf_i7.jpg'
];
var im0 = document.getElementById('im0id'); 
var im0title="Сёрфинг";
function slekart0(){
	im0num = (im0num + 1) % (ims0.length-1);
	im0.src = ims0[im0num]; 
	if(im0num==pernemoi+0) {im0title="Сёрфинг в мелких волнах";};
	if(im0num==pernemoi+1) {im0title="Сёрфинг, начинающий";};
	if(im0num==pernemoi+2) {im0title="Падл-бординг";};
	if(im0num==pernemoi+3) {im0title="Виндсёрфинг";};
	if(im0num==pernemoi+4) {im0title="Детский сёрфинг";};
	if(im0num==pernemoi+5) {im0title="Виндсёрфинг";};	
	if(im0num==pernemoi+6) {im0title="Падл-бординг";};
	//if(im0num==pernemoi+) {im0title="";};
} 
function kaRot0() {
for (var i = 0*0; i < 99*ims0.length; i++)  var timeoutId = setTimeout(slekart0, i*vreEks);
}