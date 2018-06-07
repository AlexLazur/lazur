var im0num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims0 = [
	'./museum-art_i0.jpg','./museum-art_i1.jpg','./museum-art_i2.jpg','./museum-art_i3.jpg','./museum-art_i4.jpg','./museum-art_i5.jpg','./museum-art_i6.jpg','./museum-art_i7.jpg'
];
var im0 = document.getElementById('im0id'); 
var im0title="Места связанные с художниками на Лазурном берегу";
function slekart0(){
	im0num = (im0num + 1) % (ims0.length-1);
	im0.src = ims0[im0num]; 
	if(im0num==pernemoi+0) {im0title="Музей Матисса в Ницце";};
	if(im0num==pernemoi+1) {im0title="Матисс. Портрет";};
	if(im0num==pernemoi+2) {im0title="Могила Марка Шагала в Сен-Поль-де-Вансе";};
	if(im0num==pernemoi+3) {im0title="Музей Марка Шагала в Ницце";};
	if(im0num==pernemoi+4) {im0title="Музей Ренуара В Кань-сюр-мер";};
	if(im0num==pernemoi+5) {im0title="Музей Матисса в Ницце";};	
	if(im0num==pernemoi+6) {im0title="Кинотеатр музея Марка Шагала";};
	if(im0num==pernemoi+7) {im0title="Музей Фернана Леже недалеко от Антиба";};
	if(im0num==pernemoi+8) {im0title="Кресло и мольберт Ренуара В Кань-сюр-мер";};
	if(im0num==pernemoi+9) {im0title="Музей Марка Шагала в Ницце";};
	if(im0num==pernemoi+10) {im0title="Музей Фернана Леже недалеко от Антиба";};	
} 
function kaRot0() {
for (var i = 0*0; i < 99*ims0.length; i++)  var timeoutId = setTimeout(slekart0, i*vreEks);
}