var im0num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims0 = [
	'./activity-bike_i0.jpg','./activity-bike_i1.jpg','./activity-bike_i2.jpg','./activity-bike_i3.jpg','./activity-bike_i4.jpg','./activity-bike_i5.jpg','./activity-bike_i6.jpg','./activity-bike_i7.jpg'
];
var im0 = document.getElementById('im0id'); 
var im0title="Велопрогулка, старый город";
function slekart0(){
	im0num = (im0num + 1) % (ims0.length-1);
	im0.src = ims0[im0num]; 
	if(im0num==pernemoi+0) {im0title="Велоэкскурсия в Антиб";};
	if(im0num==pernemoi+1) {im0title="Велоэкскурсия в парке Лазурного берега";};
	if(im0num==pernemoi+2) {im0title="Велодорожка далеко от городов";};
	if(im0num==pernemoi+3) {im0title="Велопрогулка у мест сбора паропланеристов";};
	if(im0num==pernemoi+4) {im0title="Велодорожка у Ниццы";};
	if(im0num==pernemoi+5) {im0title="Велопрогулка, пляж";};	
	if(im0num==pernemoi+6) {im0title="Велопрогулка, вечер";};
	//if(im0num==pernemoi+) {im0title="";};
} 
function kaRot0() {
for (var i = 0*0; i < 99*ims0.length; i++)  var timeoutId = setTimeout(slekart0, i*vreEks);
}