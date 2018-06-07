var im0num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims0 = [
	'./voyage-india_i0.jpg','./voyage-india_i1.jpg','./voyage-india_i2.jpg','./voyage-india_i3.jpg','./voyage-india_i4.jpg','./voyage-india_i5.jpg','./voyage-india_i6.jpg','./voyage-india_i7.jpg','./voyage-india_i8.jpg'
];
var im0 = document.getElementById('im0id'); 
var im0title="виды Индии";
function slekart0(){
	im0num = (im0num + 1) % (ims0.length-1);
	im0.src = ims0[im0num]; 
	if(im0num==pernemoi+0) {im0title="Дворец ветров (хава махал) в Джайпуре";};
	if(im0num==pernemoi+1) {im0title="Дворец";};
	if(im0num==pernemoi+2) {im0title="Южная индия, форт";};
	//if(im0num==pernemoi+3) {im0title="";};
	if(im0num==pernemoi+4) {im0title="Храмовый комплекс Каджурахо";};
	if(im0num==pernemoi+5) {im0title="Орчха, Индия";};	
	if(im0num==pernemoi+6) {im0title="Орчха, Индия";};
	if(im0num==pernemoi+7) {im0title="Храмовый комплекс Каджурахо";};	
	if(im0num==pernemoi+8) {im0title="Гималаи, северная Индия";};
	//if(im0num==pernemoi+) {im0title="";};
} 
function kaRot0() {
for (var i = 0*0; i < 99*ims0.length; i++)  var timeoutId = setTimeout(slekart0, i*vreEks);
}