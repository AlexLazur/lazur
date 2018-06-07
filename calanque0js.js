var im0num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims0 = [
	'./beach-calanque_i0.jpg','./beach-calanque_i1.jpg','./beach-calanque_i2.jpg','./beach-calanque_i3.jpg','./beach-calanque_i4.jpg','./beach-calanque_i5.jpg','./beach-calanque_i6.jpg','./beach-calanque_i7.jpg'
];
var im0 = document.getElementById('im0id'); 
var im0title="Каланка в Провансе";
function slekart0(){
	im0num = (im0num + 1) % (ims0.length-1);
	im0.src = ims0[im0num]; 
	if(im0num==pernemoi+0) {im0title="Пляж каланки недалеко от Марселя";};
	if(im0num==pernemoi+1) {im0title="Каланка недалеко от Тулона";};
	if(im0num==pernemoi+2) {im0title="Каланка недалеко от Кассиса";};
	if(im0num==pernemoi+3) {im0title="Пляж недалеко от Канн";};
	if(im0num==pernemoi+4) {im0title="Пляж каланки недалеко от Кассиса";};
	if(im0num==pernemoi+5) {im0title="Кассис - столица каланок(фьордов)";};	
	if(im0num==pernemoi+6) {im0title="Водная экскурсия по каланкам недалеко от Кассиса";};
	//if(im0num==pernemoi+) {im0title="";};
} 
function kaRot0() {
for (var i = 0*0; i < 99*ims0.length; i++)  var timeoutId = setTimeout(slekart0, i*vreEks);
}