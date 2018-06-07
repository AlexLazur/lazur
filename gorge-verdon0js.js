var im0num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims0 = [
	'./nature-gorge-verdon_i0.jpg','./nature-gorge-verdon_i1.jpg','./nature-gorge-verdon_i2.jpg','./nature-gorge-verdon_i3.jpg','./nature-gorge-verdon_i4.jpg','./nature-gorge-verdon_i5.jpg','./nature-gorge-verdon_i6.jpg','./nature-gorge-verdon_i7.jpg',
	'./nature-gorge-verdon_i8.jpg','./nature-gorge-verdon_i9.jpg'
];
var im0 = document.getElementById('im0id'); 
var im0title="Вердонское ущелье";
function slekart0(){
	im0num = (im0num + 1) % (ims0.length-1);
	im0.src = ims0[im0num]; 
	if(im0num==pernemoi+0) {im0title="Река Вердон";};
	if(im0num==pernemoi+1) {im0title="Горная река недалеко от каньона";};
	if(im0num==pernemoi+2) {im0title="Вердонское ущелье";};
	if(im0num==pernemoi+3) {im0title="Аренда каное и водных велосипедов в Вердонском каньоне";};
	if(im0num==pernemoi+4) {im0title="Горы Вердонского ущелья";};
	if(im0num==pernemoi+5) {im0title="Вердонский каньон недалеко от озера Сан-Круа";};	
	if(im0num==pernemoi+6) {im0title="Водопад притока, недалеко от Вердонского ущелья";};
	if(im0num==pernemoi+7) {im0title="Вердонское ущелье";};
	if(im0num==pernemoi+8) {im0title="Вердонский каньон недалеко от озера Сан-Круа";};	
	if(im0num==pernemoi+9) {im0title="Вердонское ущелье недалеко от озера Сан-Круа, прокат каное";};	
	//if(im0num==pernemoi+) {im0title="";};
} 
function kaRot0() {
for (var i = 0*0; i < 99*ims0.length; i++)  var timeoutId = setTimeout(slekart0, i*vreEks);
}