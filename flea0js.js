var im0num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims0 = [
	'./shopping-flea-market_i0.jpg','./shopping-flea-market_i1.jpg','./shopping-flea-market_i2.jpg','./shopping-flea-market_i3.jpg','./shopping-flea-market_i4.jpg','./shopping-flea-market_i5.jpg','./shopping-flea-market_i6.jpg','./shopping-flea-market_i7.jpg'
];
var im0 = document.getElementById('im0id'); 
var im0title="Вещевой рынок(брокант) на Лазурном берегу";
function slekart0(){
	im0num = (im0num + 1) % (ims0.length-1);
	im0.src = ims0[im0num]; 
	if(im0num==pernemoi+0) {im0title="Вещевой рынок на набережной";};
	if(im0num==pernemoi+1) {im0title="Тин-тин";};
	if(im0num==pernemoi+2) {im0title="Брокант в Провансе";};
	if(im0num==pernemoi+3) {im0title="Антикварный блошиный рынок";};
	if(im0num==pernemoi+4) {im0title="Вещевой рынок(брокант) на Лазурном берегу";};
	if(im0num==pernemoi+5) {im0title="Блошиный рынок в Ницце";};	
	if(im0num==pernemoi+6) {im0title="Школьный вещевой рынок(брокант)";};
	//if(im0num==pernemoi+) {im0title="";};
} 
function kaRot0() {
for (var i = 0*0; i < 99*ims0.length; i++)  var timeoutId = setTimeout(slekart0, i*vreEks);
}