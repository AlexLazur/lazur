var im0num = -1; var pernemoi=0;//dobav vNacaloMassiva i ++1
var ims0 = [
	'./activity-via-ferrata_i0.jpg','./activity-via-ferrata_i1.jpg','./activity-via-ferrata_i2.jpg','./activity-via-ferrata_i3.jpg','./activity-via-ferrata_i4.jpg','./activity-via-ferrata_i5.jpg','./activity-via-ferrata_i6.jpg','./activity-via-ferrata_i7.jpg'
];
var im0 = document.getElementById('im0id'); 
var im0title="Виа-Феррата(via-ferrata) в Альпах";
function slekart0(){
	im0num = (im0num + 1) % (ims0.length-1);
	im0.src = ims0[im0num]; 
	if(im0num==pernemoi+0) {im0title="Тренировочный скалодром для детей";};
	if(im0num==pernemoi+1) {im0title="Виа-Феррата, подвесной мост";};
	if(im0num==pernemoi+2) {im0title="Via-ferrata в Альпах";};
	if(im0num==pernemoi+3) {im0title="Виа-Феррата, тропинка в скале";};
	if(im0num==pernemoi+4) {im0title="Via-ferrata на плотине";};
	if(im0num==pernemoi+5) {im0title="Мост виаферраты";};	
	if(im0num==pernemoi+6) {im0title="Виа-Феррата, ступени(скобы) в скале";};
	//if(im0num==pernemoi+) {im0title="";};
} 
function kaRot0() {
for (var i = 0*0; i < 99*ims0.length; i++)  var timeoutId = setTimeout(slekart0, i*vreEks);
}