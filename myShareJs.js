Loc=['на Лазурном берегу Франции','на Французской Ривьере','во французском Провансе','на средиземноморском побережье Франции','на французском средиземноморье','во Франции (Лaзypный бepeг)'];
iLoc= 0+Math.ceil(Math.random()*5);
Share = {
	vkontakte: function(purl, ptitle, pimg, text) {
		url  = 'http://vkontakte.ru/share.php?';
		url += 'url='          + encodeURIComponent(purl);
		url += '&title='       + im0title +' - сайт о достопримечательностях и экскурсиях '+Loc[iLoc]; 
		url += '&description=' + 'description'+text+im0.src;
		url += '&image='       + im0.src;
		url += '&noparse=true';
		Share.popup(url);
	},
	odnoklassniki: function(purl, text) {
		url  = 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1';
		url += '&st.comments=' + im0title +' и другие достопримечательности и экскурсии '+Loc[iLoc];
		url += '&st._surl='    + encodeURIComponent(purl);
		Share.popup(url);
	},
	facebook: function(purl, ptitle, pimg, text) {
		url  = 'http://www.facebook.com/sharer.php?s=100';
		url += '&p[title]='     + im0title +' и другие достопримечательности и экскурсии '+Loc[iLoc];
		url += '&p[summary]='   + encodeURIComponent(text);
		url += '&p[url]='       + encodeURIComponent(purl);
		url += '&p[images][0]=' + encodeURIComponent(pimg);
		Share.popup(url);
	},
	twitter: function(purl, ptitle) {
		url  = 'http://twitter.com/share?';
		url += 'text='      + im0title +' и другие достопримечательности и экскурсии '+Loc[iLoc];
		url += '&url='      + encodeURIComponent(purl);
		url += '&counturl=' + encodeURIComponent(purl);
		Share.popup(url);
	},
	mailru: function(purl, ptitle, pimg, text) {
		url  = 'http://connect.mail.ru/share?';
		url += 'url='          + encodeURIComponent(purl);
		url += '&title='       + im0title +' и другие достопримечательности и экскурсии '+Loc[iLoc];
		url += '&description=' + encodeURIComponent(text);
		url += '&imageurl='    + encodeURIComponent(pimg);
		Share.popup(url)
	},

	popup: function(url) {
		window.open(url,'','toolbar=0,status=0,width=626,height=436');
	}
};