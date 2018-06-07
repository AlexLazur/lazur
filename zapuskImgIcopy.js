const vreBlizkih=19100;
const vreEks=10100;
function kaRot0() {};function kaRot1() {};function kaRot2() {};function kaRot3() {};function kaRot4() {};function kaRot5() {};function kaRot6() {};function kaRot7() {};function kaRot8() {};function kaRot9() {};
function kaRot10() {};function kaRot11() {};function kaRot12() {};function kaRot13() {};function kaRot14() {};function kaRot15() {};function kaRot16() {};function kaRot17() {};function kaRot18() {};function kaRot19() {};
function kaRot20() {};function kaRot21() {};function kaRot22() {};function kaRot23() {};function kaRot24() {};function kaRot25() {};function kaRot26() {};function kaRot27() {};function kaRot28() {};function kaRot29() {};
function kaRot100() {};function kaRot101() {};function kaRot102() {};function kaRot103() {};function kaRot104() {};function kaRot105() {};function kaRot106() {};function kaRot107() {};function kaRot108() {};function kaRot109() {};function kaRot110() {};function kaRot111() {};function kaRot112() {};function kaRot113() {};function kaRot114() {};function kaRot115() {};function kaRot116() {};function kaRot117() {};function kaRot118() {};function kaRot119() {};
window.onload = function() {kaRot0();kaRot1();kaRot2();kaRot3();kaRot4();kaRot5();kaRot6();kaRot7();kaRot8();kaRot9();kaRot10();kaRot11();kaRot12();kaRot13();kaRot14();kaRot15();kaRot16();kaRot17();kaRot18();kaRot19();kaRot20();kaRot21();kaRot22();kaRot23();kaRot24();kaRot25();kaRot26();kaRot27();kaRot28();kaRot29();
kaRot100();kaRot101();kaRot102();kaRot103();kaRot104();kaRot105();kaRot106();kaRot107();kaRot108();kaRot109();kaRot110();kaRot111();kaRot112();kaRot113();kaRot114();kaRot115();kaRot116();kaRot117();kaRot118();kaRot119();}


function addLink() {
	var body_element = document.getElementsByTagName('body')[0];
	var selection;
	selection = window.getSelection();
	var pagelink = " (источник: <a href='"+document.location.href+"'>"+document.location.href+"</a>  &copy;LCLC)";
	var copytext = selection + pagelink;
	var newdiv = document.createElement('div');
	newdiv.style.position='absolute';
	newdiv.style.left='-99999px';
	body_element.appendChild(newdiv);
	newdiv.innerHTML = copytext;
	selection.selectAllChildren(newdiv);
	window.setTimeout(function() {
		body_element.removeChild(newdiv);
	},0);
}
document.oncopy = addLink;