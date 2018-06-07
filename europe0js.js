var im0num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims0 = [
	'./voyage-europe_i0.jpg','./voyage-europe_i1.jpg','./voyage-europe_i2.jpg','./voyage-europe_i3.jpg','./voyage-europe_i4.jpg','./voyage-europe_i5.jpg','./voyage-europe_i6.jpg','./voyage-europe_i7.jpg'
];
var im0 = document.getElementById('im0id'); 
var im0title="виды Европы";
function slekart0(){
	im0num = (im0num + 1) % (ims0.length-1);
	im0.src = ims0[im0num]; 
	if(im0num==pernemoi+0) {im0title="Эйфелева башня, Париж";};
	if(im0num==pernemoi+1) {im0title="Средиземноморские Альпы";};
	if(im0num==pernemoi+2) {im0title="Греция";};
	if(im0num==pernemoi+3) {im0title="Милан, Италия";};
	if(im0num==pernemoi+4) {im0title="Франция - родина классических каруселей";};
	if(im0num==pernemoi+5) {im0title="Рим, река Тибр, Собор св.Петра";};	
	if(im0num==pernemoi+6) {im0title="Рим, фонтан";};
	if(im0num==pernemoi+7) {im0title="Франция, Сен-Мишель";};
	//if(im0num==pernemoi+) {im0title="";};
} 
function kaRot0() {
for (var i = 0*0; i < 99*ims0.length; i++)  var timeoutId = setTimeout(slekart0, i*vreEks);
}