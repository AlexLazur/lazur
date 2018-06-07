var im0num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims0 = [
	'./sightseeing-Valbonne_i0.jpg','./sightseeing-Valbonne_i1.jpg','./sightseeing-Valbonne_i2.jpg','./sightseeing-Valbonne_i3.jpg','./sightseeing-Valbonne_i4.jpg','./sightseeing-Valbonne_i5.jpg','./sightseeing-Valbonne_i6.jpg','./sightseeing-Valbonne_i7.jpg','./sightseeing-Valbonne_i8.jpg','./sightseeing-Valbonne_i9.jpg','./sightseeing-Valbonne_i10.jpg'
];
var im0 = document.getElementById('im0id'); 
var im0title="Вальбон, старый город";
function slekart0(){
	im0num = (im0num + 1) % (ims0.length-1);
	im0.src = ims0[im0num]; 
	if(im0num==pernemoi+0) {im0title="Вальбон, ресторан, старый город";};
	if(im0num==pernemoi+1) {im0title="Вальбон, магазин SPAR, старый город";};
	if(im0num==pernemoi+2) {im0title="Вальбон, жилые кварталы, почтовый ящик";};	
	if(im0num==pernemoi+3) {im0title="Мясной рынок, старый город Вальбона";};
	if(im0num==pernemoi+4) {im0title="Вальбон, улица старого города";};
	if(im0num==pernemoi+5) {im0title="Вальбон, соборная арка";};
	if(im0num==pernemoi+6) {im0title="Улица старого города Вальбона";};
	if(im0num==pernemoi+7) {im0title="Вальбон, артизанальный рынок, старый город";};	
	if(im0num==pernemoi+8) {im0title="Вальбон, улица старого города";};	
	if(im0num==pernemoi+9) {im0title="Вальбон, жилые кварталы";};	
	if(im0num==pernemoi+10) {im0title="Ресторан Вальбона";};		
	//if(im0num==pernemoi+) {im0title="";};
} 
function kaRot0() {
for (var i = 0*0; i < 99*ims0.length; i++)  var timeoutId = setTimeout(slekart0, i*vreEks);
}