var im0num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims0 = [
	'./voyage-asia_i0.jpg','./voyage-asia_i1.jpg','./voyage-asia_i2.jpg','./voyage-asia_i3.jpg','./voyage-asia_i4.jpg','./voyage-asia_i5.jpg','./voyage-asia_i6.jpg','./voyage-asia_i7.jpg','./voyage-asia_i8.jpg','./voyage-asia_i9.jpg','./voyage-asia_i10.jpg'
];
var im0 = document.getElementById('im0id'); 
var im0title="виды Азии";
function slekart0(){
	im0num = (im0num + 1) % (ims0.length-1);
	im0.src = ims0[im0num]; 
	if(im0num==pernemoi+0) {im0title="Медитация буддийский монастырь";};
	if(im0num==pernemoi+1) {im0title="Меконг";};
	if(im0num==pernemoi+2) {im0title="Рисовые поля, Вьетнам";};
	if(im0num==pernemoi+3) {im0title="Храм, Таиланд";};
	if(im0num==pernemoi+4) {im0title="Лаос, приток Меконга";};
	//if(im0num==pernemoi+5) {im0title="";};	
	if(im0num==pernemoi+6) {im0title="Таиланд";};
	if(im0num==pernemoi+7) {im0title="Лаос, приток Меконга";};
	if(im0num==pernemoi+8) {im0title="Кухня Азии";};
	if(im0num==pernemoi+9) {im0title="Меконг";};	
	if(im0num==pernemoi+10) {im0title="Белый Храм, Таиланд";};
	//if(im0num==pernemoi+) {im0title="";};
} 
function kaRot0() {
for (var i = 0*0; i < 99*ims0.length; i++)  var timeoutId = setTimeout(slekart0, i*vreEks);
}