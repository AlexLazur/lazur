var im0num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims0 = [
	'./sightseeing-Marseille_i0.jpg','./sightseeing-Marseille_i1.jpg','./sightseeing-Marseille_i2.jpg','./sightseeing-Marseille_i3.jpg','./sightseeing-Marseille_i4.jpg','./sightseeing-Marseille_i5.jpg','./sightseeing-Marseille_i6.jpg','./sightseeing-Marseille_i7.jpg'
];
var im0 = document.getElementById('im0id'); 
var im0title="вид Марселя недалеко от старого города";
function slekart0(){
	im0num = (im0num + 1) % (ims0.length-1);
	im0.src = ims0[im0num]; 
	if(im0num==pernemoi+0) {im0title="Дворец воды, Марсель";};	
	if(im0num==pernemoi+1) {im0title="Собор Нотр-дам-де-ля-Гард, символ Марселя";};
	if(im0num==pernemoi+2) {im0title="Рыбная кухня Марселя";};
	if(im0num==pernemoi+3) {im0title="Замок Иф, Марсель";};
	if(im0num==pernemoi+4) {im0title="Кафедральный собор Марселя";};
	if(im0num==pernemoi+5) {im0title="Старый порт Марселя";};
	if(im0num==pernemoi+6) {im0title="Городской пляж Марселя";};	
	if(im0num==pernemoi+7) {im0title="Замок Иф, Марсель";};	
	//if(im0num==pernemoi+) {im0title="";};
} 
function kaRot0() {
for (var i = 0*0; i < 99*ims0.length; i++)  var timeoutId = setTimeout(slekart0, i*vreEks);
}