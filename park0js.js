var im0num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims0 = [
	'./nature-park_i0.jpg','./nature-park_i1.jpg','./nature-park_i2.jpg','./nature-park_i3.jpg','./nature-park_i4.jpg','./nature-park_i5.jpg','./nature-park_i6.jpg','./nature-park_i7.jpg','./nature-park_i8.jpg','./nature-park_i9.jpg'
];
var im0 = document.getElementById('im0id'); 
var im0title="Парки Лазурного берега";
function slekart0(){
	im0num = (im0num + 1) % (ims0.length-1);
	im0.src = ims0[im0num]; 
	if(im0num==pernemoi+0) {im0title="Озеро, предгорья Альп";};
	if(im0num==pernemoi+1) {im0title="Приморский парк";};
	if(im0num==pernemoi+2) {im0title="Парк бабочек во Франции";};
	if(im0num==pernemoi+3) {im0title="Озеро, предгорья Альп";};
	if(im0num==pernemoi+4) {im0title="Приморский парк";};
	if(im0num==pernemoi+5) {im0title="Приморский парк, вечер";};	
	if(im0num==pernemoi+6) {im0title="Черепаха в парке недалеко от Антиба";};
	if(im0num==pernemoi+7) {im0title="Приморский сад";};
	if(im0num==pernemoi+8) {im0title="Зимородок, предгорья Альп";};
	if(im0num==pernemoi+9) {im0title="Приморский парк";};	
	//if(im0num==pernemoi+) {im0title="";};
} 
function kaRot0() {
for (var i = 0*0; i < 99*ims0.length; i++)  var timeoutId = setTimeout(slekart0, i*vreEks);
}