
var tooltip=function($)
{var top=3,left=11,maxw=670,$tt,$t,$c,$b,h,ie=document.all?true:false;return{show:function(v,w,ntt)
{ntt=ntt||'';$tt=$('#'+ntt+'tt');$c=$('#'+ntt+'ttcont');$b=$('#ttbot');$t=$('#tttop');if($tt.length>0&&v)
{document.onmousemove=this.pos;$tt.css({display:'block'});$c[0].innerHTML=v;$tt.css({width:w?w+'px':'auto'});if(!w&&ie){if($t.length>0)
{$t.css({display:'none'});}
if($b.length>0)
{$b.css({display:'none'});}
$tt.css({width:$tt[0].offsetWidth});if($t.length>0)
{$t.css({display:'block'});}
if($b.length>0)
{$b.css({display:'block'});}}
if($tt[0].offsetWidth>maxw)
{$tt.css({width:maxw+'px'});}
h=parseInt($tt[0].offsetHeight)+top;}},pos:function(e)
{var u=ie?event.clientY+document.documentElement.scrollTop:e.pageY;var l=ie?event.clientX+document.documentElement.scrollLeft:e.pageX;var scrolledX,scrolledY;if(window.pageYOffset){scrolledX=window.pageXOffset;scrolledY=window.pageYOffset;}
else if(document.documentElement&&document.documentElement.scrollTop){scrolledX=document.documentElement.scrollLeft;scrolledY=document.documentElement.scrollTop;}
else if(document.body){scrolledX=document.body.scrollLeft;scrolledY=document.body.scrollTop;}
$tt.css({top:((u-scrolledY-h)>0)?((u-h)+'px'):(u+'px')});$tt.css({left:(l+left)+'px'});},hide:function()
{document.onmousemove=null;if($tt.length>0)
{$tt.css({display:'none'});}}};}(jQuery);function BulleWrite(txt)
{tooltip.show(txt);}
function BulleHide()
{tooltip.hide();}
function BulleWriten(txt)
{tooltip.show(txt,false,'n');}
ccm_universe='www.commentcamarche.net';magiclink=function($)
{return{lastpos:0,processed_keywords:[],spaces_counter:0,processed_input_strings:[],num_btns_in_ul:2,textarea:null,ad_sl:function(str)
{return(str+'').replace(/([\\"'])/g,"\\$1");},re_esc:function(s)
{return s.replace(/([.*+?^${}()|[\]\/\\])/g,'\\$1');},unht_en:function(wText)
{if(typeof(wText)!="string")
{wText=wText.toString();}
return wText.replace(/\&amp;/g,"&").replace(/\&quot;/g,"\"").replace(/\&lt;/g,"<").replace(/\&gt;/g,">");},ht_en:function(wText)
{if(typeof(wText)!="string")
{wText=wText.toString();}
return wText.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;");},gs:function()
{var textarea=magiclink.textarea||$('#message')[0];if(typeof textarea.selectionStart!='undefined')
{return textarea.selectionStart;}
textarea.focus();var range=textarea.createTextRange();range.moveToBookmark(document.selection.createRange().getBookmark());range.moveEnd('character',textarea.value.length);return(textarea.value.length-range.text.length);},cm:function(m)
{var output='',i=0;for(;i<m.length;i++)
{output+='*';}
return output;},mask:function(txt)
{txt=txt.replace(/\[.*?\]/g,magiclink.cm);txt=txt.replace(/[.a-zA-Z0-9_+-]+@[.a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,}/g,magiclink.cm);txt=txt.replace(/\s*[=]+[^=\r\n]+[=]+/g,magiclink.cm);txt=txt.replace(/http:\/\/\S+[\w#!:.?+=&%@!\-\/]*/g,magiclink.cm);txt=txt.replace(/\<confi?g?\>.*?\<\/confi?g?\>/g,magiclink.cm);return txt;},cancel:function(id)
{magiclink.processed_keywords.push(id);var suggestElement=$('#suggest'+id)[0];suggestElement.parentNode.removeChild(suggestElement);magiclink.traitementBtnInUl();return false;},apply:function(id,txt,url)
{txt=magiclink.unht_en(txt);magiclink.processed_keywords.push(id);var textarea=magiclink.textarea||$('#message')[0],oldPos=textarea.scrollTop,suggestElement=$('#suggest'+id)[0],dummy=magiclink.mask(strip_accents(textarea.value)),reg=new RegExp("\\b"+magiclink.re_esc(strip_accents(txt))+"\\b"),s_p=dummy.search(reg);if(s_p>=0)
{e_p=s_p+txt.length;textarea.value=textarea.value.substr(0,s_p)+'['+url+' '+txt+']'+textarea.value.substr(e_p);}
suggestElement.parentNode.removeChild(suggestElement);textarea.scrollTop=oldPos;magiclink.traitementBtnInUl();return false;},traitementBtnInUl:function()
{if($('#suggest_ph')[0].getElementsByTagName('li').length<=magiclink.num_btns_in_ul)
{$('#apply_all').css({display:'none'});$('#cancel_all').css({display:'none'});}},action_all:function(is_apply)
{var prefix=(is_apply)?'apply':'cancel',fils=$('#suggest_ph')[0].childNodes,nbFils=fils.length,reg=/[0-9]+/,id=0,filsArray=[],i=0;for(;i<nbFils;i++)
{id=0;if(fils[i].nodeName.toLowerCase()=='li')
{if(fils[i].id!='apply_all'&&fils[i].id!='cancel_all')
{id=reg.exec(fils[i].id);if(id!=0)
{filsArray.push(id);}}}}
for(i=0;i<filsArray.length;i++){$('#'+prefix+filsArray[i])[0].onclick();}
$('#apply_all').css({display:'none'});$('#cancel_all').css({display:'none'});},apply_all:function()
{magiclink.action_all(true);},cancel_all:function()
{magiclink.action_all(false);},add:function(su)
{if(su.length)
{for(var i=0,size=su.length;i<size;i++)
{id=su[i][0];tx=su[i][1];ur=su[i][2];if($.inArray(id,magiclink.processed_keywords)==-1)
{if(!$('#suggest'+id)[0]&&suggest_this_url!=ur)
{li=document.createElement('li');li.id='suggest'+id;li.innerHTML='<input type="hidden" name="suggest['+id+']" value="'+magiclink.ht_en(tx)+'" /><input type="hidden" name="suggest_url['+id+']" value="'+magiclink.ht_en(ur)+'" /><a href="'+ur+'" target="_blank">'+magiclink.ht_en(tx)+'</a><a href="#" class="apply" id="apply'+id+'" onclick="return magiclink.apply('+id+',\''+magiclink.ad_sl(magiclink.ht_en(tx))+'\',\''+ur+'\');"></a><a href="#" class="cancel" id="cancel'+id+'" onclick="return magiclink.cancel('+id+');"></a>';$('#suggest_ph')[0].appendChild(li);$('#apply_all').css({display:'block'});$('#cancel_all').css({display:''});}}}}},dorequest:function(ccm_c_p)
{var textarea=magiclink.textarea||$('#message')[0],text=textarea.value;if(text.charCodeAt(ccm_c_p)==10||text.charCodeAt(ccm_c_p)==13)
{ccm_c_p=ccm_c_p-1;}
var p_lb=text.lastIndexOf("\n",ccm_c_p);if(p_lb<0)
{p_lb=text.lastIndexOf("\r",ccm_c_p);}
if(p_lb>=0)
{text=text.substring(p_lb+1);}
var n_lb=text.indexOf("\n");if(n_lb<0){n_lb=text.indexOf("\r");}
var l_l='';if(n_lb<0){l_l=text.replace(/[-\s]+$/g,'');}
else{l_l=text.substring(0,n_lb).replace(/[-\s]+$/g,'');}
if(l_l.length>=2)
{var escaped_string=escape(magiclink.mask(l_l).replace(/[*]+/g,'*'));if($.inArray(escaped_string,magiclink.processed_input_strings)==-1)
{magiclink.processed_input_strings.push(escaped_string);var u_s='http://'+$data.magicLinksUrl+'/kw?q='+escaped_string+'&u='+ccm_universe,headTag=document.getElementsByTagName('head')[0];if($('#magiclinkScript')[0])
{headTag.removeChild($('#magiclinkScript')[0]);}
script=document.createElement('script');script.id='magiclinkScript';script.type='text/javascript';script.src=''+u_s;headTag.appendChild(script);}}},on_click:function()
{magiclink.dorequest(magiclink.gs());},on_keyup:function(e)
{switch((window.event)?window.event.keyCode:e.which)
{case 13:case 10:magiclink.dorequest(magiclink.gs()-1);break;case 32:magiclink.spaces_counter++;if(magiclink.spaces_counter==10)
{magiclink.spaces_counter=0;magiclink.dorequest(magiclink.gs());}
break;}}};}(jQuery);tagActions=function($)
{return{insert:function(txt,tag,enclose,skip_tag,force_text)
{skip_tag=skip_tag||false;force_text=force_text||false;var closeTag,Tag;if(skip_tag)
{closeTag='';Tag=tag;}else{closeTag=((enclose)?"</"+tag+">":"");Tag="<"+tag+">";}
var txtObj=$(txt)[0];if(navigator.appName=="Microsoft Internet Explorer")
{var str=(force_text)?force_text:document.selection.createRange().text;txtObj.focus();var sel=document.selection.createRange();sel.text=Tag+str+closeTag;return;}
else
{oldPos=txtObj.scrollTop;oldHght=txtObj.scrollHeight;str=(force_text)?force_text:txtObj.value.substr(txtObj.selectionStart,txtObj.selectionEnd-txtObj.selectionStart);pos=txtObj.selectionEnd+Tag.length+closeTag.length+((force_text)?str.length:0);txtObj.value=txtObj.value.substr(0,txtObj.selectionStart)+Tag+
str+
closeTag+txtObj.value.substr(txtObj.selectionEnd);txtObj.selectionStart=pos;txtObj.selectionEnd=pos;newHght=txtObj.scrollHeight-oldHght;txtObj.scrollTop=oldPos+newHght;}
txtObj.focus();}};}(jQuery);headerAction=function($)
{var ref_k='';return{searchformFocusedAction:function()
{if($('#searchform_focused')[0].value==0)
{$('#searchform_input')[0].value='';$('#searchform_focused')[0].value=1;}},searchformInputUpdate:function(q)
{if($('#searchform_input').length>0&&q&&q!=' ')
{$('#searchform_input')[0].value=q;$('#searchform_focused')[0].value=1;}},similiTableUpdate:function()
{if($('#similiTable')[0].className=='hidelast')
{$('#similiTable')[0].className='';$('#similiMore')[0].innerHTML=minus;}
else
{$('#similiTable')[0].className='hidelast';$('#similiMore')[0].innerHTML=plus;}
return false;},similiShowUpdate:function()
{if($('#similishowhide')[0].className=='hide')
{$('#similishowhide')[0].className='show';$('#similiShowHideLbl')[0].innerHTML=minus;}
else
{$('#similishowhide')[0].className='hide';$('#similiShowHideLbl')[0].innerHTML=plus;}
return false;},cleanRefk:function()
{var refk=headerAction.refk().replace(/</g,' ').replace(/>/g,' ').replace(/"/g,' ').replace(/&/g,' ');return refk.charAt(0).toUpperCase()+refk.substr(1);},refk:function()
{var ptn=/(google|bing|yahoo)[.]/i,q='',u_p,u_a,kv;if(ref_k)
{q=ref_k;}
else{if(ptn.exec(document.referrer)!=null)
{u_p=document.referrer.split('?');if(u_p[1])
{u_a=u_p[1].split('&');for(var i=0;i<u_a.length;i++)
{kv=u_a[i].split('=');if(kv[0]=='q')
{q=decodeURIComponent(kv[1]).replace(/(allinanchor|allintext|allintitle|allinurl|author|cache|define|filetype|group|id|inanchor|info|insubject|intext|intitle|inurl|location|phonebook|related|rphonebook|site|source)[:][^ +]+/,'');q=q.replace(/[+]/g,' ');}}}}
if(q.search(/:\/\//)>=0)
{q='';}
ref_k=q;}
return q;}};}(jQuery);function strip_accents(str){var s=str;var rExps=[/[\xC0-\xC2]/g,/[\xE0-\xE2]/g,/[\xC8-\xCA]/g,/[\xE8-\xEB]/g,/[\xCC-\xCE]/g,/[\xEC-\xEE]/g,/[\xD2-\xD4]/g,/[\xF2-\xF4]/g,/[\xD9-\xDB]/g,/[\xF9-\xFB]/g];var repChar=['A','a','E','e','I','i','O','o','U','u'];for(var i=0;i<rExps.length;i++)
s=s.replace(rExps[i],repChar[i]);return s;};function compareStringLengths(a,b){if(a.length<b.length)
return 1;if(a.length>b.length)
return-1;return 0;};function c_n_g(child,color){var node=document.createElement('span');node.style.fontWeight='bold';node.appendChild(child);return node;};function h_j(te,container){var gtc='#000000';var glc=new Array('#ffff66','#a0ffff','#99ff99','#ff9999','#ff66ff');var reg=new RegExp("[-:;,+=(){}/?<>!*'\\\"\\[\\]\\ ]+","g");var words=strip_accents(te).toLowerCase().split(reg);words.sort(compareStringLengths);if(words.length>0){var c=0;for(var i=0;i<words.length;i++){if(words[i].length>2&&container){h_g(words[i],container,glc[c]);c=(c==glc.length-1)?0:c+1;}}}}
function h_g(te,container,color){var t_l=te.toLowerCase();for(var i=0;i<container.childNodes.length;i++){var node=container.childNodes[i];if(node.nodeType==3){var data=node.data;var d_l=strip_accents(data.toLowerCase());if(d_l.indexOf(t_l)!=-1){var n_n=document.createElement('span');node.parentNode.replaceChild(n_n,node);var res;while((res=d_l.indexOf(t_l))!=-1){n_n.appendChild(document.createTextNode(data.substr(0,res)));n_n.appendChild(c_n_g(document.createTextNode(data.substr(res,te.length)),color));data=data.substr(res+te.length);d_l=d_l.substr(res+te.length);}
n_n.appendChild(document.createTextNode(data));}}
else{h_g(te,node,color);}}};var ccm_language='fr';function google_ad_request_done(google_ads)
{var i,google_ad_title='Google Ads';switch(ccm_language)
{case'fr':google_ad_title='Annonces Google';break;case'en':google_ad_title='Google Ads';break;case'es':google_ad_title='Anuncios Google';break;case'pt':google_ad_title='Anúncios Google';break;case'it':google_ad_title='Annunci Google';break;case'de':google_ad_title='Google-Anzeigen';break;case'nl':google_ad_title='Google Ads';break;}
if(google_ads.length==0)
{return;}
if(google_ads.length)
{var html='<div class="marB10 marT10 afc_container">'+'<a class="ftGrey2 afc_feedback" href="'+google_info.feedback_url+'" target="_blank">'+google_ad_title+'</a>',ad;for(var i=0;i<google_ads.length;i++)
{ad=google_ads[i];html+=''+'<div class="marT10 afc_block">'+'<a class="ftBlue ftBold afc_title" href="'+ad.url+'" target="_blank">'+ad.line1+'</a>'+'<p style="margin:0" class="afc_content">'+
ad.line2+' '+ad.line3+'</p>'+'<a class="ftGrey2 afc_url" href="'+ad.url+'" target="_blank">'+ad.visible_url+'</a>'+'</div>';}
html+='</div>';document.write(html);}
return;}
gg_afs_query='';function google_afs_request_done(google_ads)
{var google_num_ads=google_ads.length,google_ad_title='Google Ads';if(google_num_ads<=0)
{return;}
switch(ccm_language)
{case'fr':google_ad_title='Annonces Google';break;case'en':google_ad_title='Google Ads';break;case'es':google_ad_title='Anuncios Google';break;case'pt':google_ad_title='Anúncios Google';break;case'it':google_ad_title='Annunci Google';break;case'de':google_ad_title='Google-Anzeigen';break;}
var wideAds="",narrowAds="";for(i=0;i<google_num_ads;i++)
{var isTop=(google_ads[i].position=="Top"||google_ads[i].type=="text/wide"),padding='14px';if(isTop)
{wideAds+='<div class="section"';wideAds+=' onmouseover="window.status=\''+google_ads[i].visible_url+'\'" onmouseout="window.status=\'\'" style="padding-bottom:'+padding+'"><div class="article">';wideAds+='<h2><a href="'+google_ads[i].url+'" target="_blank" style="color:rgb(20, 91, 201);font-weight:normal;text-decoration:underline">'+google_ads[i].line1+'</a></h2>';wideAds+='<p>'+google_ads[i].line2;if(google_ads[i].line3)
{wideAds+='&nbsp;'+google_ads[i].line3;}
wideAds+='</p></div>';wideAds+='<div><a href="'+google_ads[i].url+'" style="color:#009900;" target="_blank">'+google_ads[i].visible_url+'</a></div>';wideAds+='</div>';}else{narrowAds+='<div class="section"';narrowAds+=' onmouseover="window.status=\''+google_ads[i].visible_url+'\'" onmouseout="window.status=\'\'" style="padding-bottom:'+padding+'"><div class="article">';narrowAds+='<h2><a href="'+google_ads[i].url+'" target="_blank" style="color:rgb(20, 91, 201);font-weight:normal;text-decoration:underline">'+google_ads[i].line1+'</a></h2>';narrowAds+='<p>'+google_ads[i].line2;if(google_ads[i].line3)
{narrowAds+='&nbsp;'+google_ads[i].line3;}
narrowAds+='</p></div>';narrowAds+='<div><a href="'+google_ads[i].url+'" style="color:#009900;" target="_blank">'+google_ads[i].visible_url+'</a></div>';narrowAds+='</div>';}}
feedbck='<a href="https://www.google.com/adsense/support/bin/request.py?contact=afs_violation" target="_blank" style="float:right;color:#898994;">'+google_ad_title+'</a>';feedsmall='<a href="https://www.google.com/adsense/support/bin/request.py?contact=afs_violation" target="_blank" style="float:right;color:#898994;">'+google_ad_title+'</a>';if(narrowAds!='')
{narrowAds=feedbck+narrowAds;jQuery('#narrow_ads_unit').html(narrowAds).css({'background-color':'#F5F6FC'});}
if(wideAds!='')
{wideAds=feedsmall+wideAds;jQuery('#wide_ads_unit').html(wideAds).css({'background-color':'#F5F6FC'});}};function google_rs_request_done(google_rs_response)
{if(!google_rs_response.ads&&google_rs_response.link_units&&google_rs_response.link_units.length>0)
{var google_link_units=google_rs_response.link_units,relatedSearches='';for(var i=0;i<google_link_units.length;i++)
{relatedSearches+='<p class="padT5"><a class="ftUnderline ftSize14" style="color:#145BC9" href="/s/'+
encodeURIComponent(google_link_units[i].term).replace(/%20/g,'+')+'?qlc'+'&afdt='+google_link_units[i].token+'">'+
google_link_units[i].term+'</a></p>';if(i==Math.round(google_link_units.length/2)-1)
{if(jQuery('#related_search_left').length>0)
{jQuery('#related_search_left').html(relatedSearches);relatedSearches='';}}}
if(jQuery('#related_search_right').length>0)
{jQuery('#related_search_right').html(relatedSearches);}}}
mmenu=function($)
{return{timer:0,select:function(cur_el,def)
{def=def||false;$("#mmenu_ul_id").children('li').removeClass('selected').each(function()
{var $this=$(this),is_cur=$this.hasClass('current');if((cur_el&&$this[0]===cur_el)||(is_cur&&def))
{$this.addClass('selected');return false;}});},tempo:function()
{if(mmenu.timer)
{clearTimeout(mmenu.timer);}
mmenu.timer=setTimeout("mmenu.select(null, true)",2000);}};}(jQuery);hputils=function($)
{return{slideshow:{mod_img:function(newType)
{var $slideshow=$('#slideshow'),actualType=$slideshow.attr('data-type');actualType&&$slideshow.removeClass(actualType);$slideshow.addClass(newType).attr('data-type',newType).find('li a').removeClass('selected');}}};}(jQuery);ccmu=function($)
{return{dom:{loaded_css:{},css_include:function(css,media,id)
{id=id||css;if(ccmu.dom.loaded_css[id]){return true;}
try{var _css=document.createElement('link');_css.rel='stylesheet';_css.href=css;_css.type='text/css';_css.setAttribute('ccmskin',id);if(media){_css.media=media;}
var head=document.getElementsByTagName('head').item(0);head.appendChild(_css);ccmu.dom.loaded_css[id]=css;}catch(e){if(ccmu.dbg){ccmu.dbg('Erreur css_include '+css+': '+e);}
return e;}
return true;},remove_all_ccmcss:function(key){var _els=document.getElementsByTagName('link');for(var i=_els.length-1;i>=0;i--){var _ccmid=_els[i].getAttribute('ccmskin');if(_els[i].getAttribute('href')!==null&&_ccmid!==null){if(!key||_ccmid===key){delete ccmu.dom.loaded_css[_ccmid];_els[i].parentNode.removeChild(_els[i]);}}}},print:function(css){ccmu.dom.css_include(css,'print','print');setTimeout(function(){window.print();},200);},reload:function(prm,elt,url){url=url||window.document.URL.replace(/(\?|#).*$/,'');if(prm&&elt){ccmu.dom.oldAjaxUpdater($(elt),url,{method:'get',parameters:'xhr&'+prm,evalScripts:false});}
return false;},getProperElement:function(elt)
{return(typeof elt=="string")?$('#'+elt):$(elt);},oldAjaxUpdater:function(elt,url,params)
{var paramsAjax={url:url},$eltSuccess=ccmu.dom.getProperElement(elt),paramData={};if(typeof elt=="object"&&typeof elt.success!="undefined")
{$eltSuccess=$('#'+elt.success);}
if(typeof params.parameters!='undefined'){var dataList=params.parameters.split('&'),dataParams=[];for(var i=0;i<dataList.length;i++){dataParams=dataList[i].split('=');if(dataParams.length==1){paramData[dataParams[0]]=null;}else if(dataParams.length==2){paramData[dataParams[0]]=decodeURIComponent(dataParams[1]);}}
paramsAjax.data=paramData;}
if(typeof params.method!='undefined'){paramsAjax.type=params.method;}else{paramsAjax.type='post';}
if(typeof params.evalScripts!='undefined'&&params.evalScripts==true){paramsAjax.dataType='html';};paramsAjax.success=function(e)
{$eltSuccess.html(e);if(typeof params.onComplete!='undefined')
{params.onComplete.call();}};if(typeof params.onFailure!='undefined')
{paramsAjax.error=function(e)
{params.onFailure.call();};};$.ajax(paramsAjax);}},evt:{get_event_infos:function(event)
{var _tgt=event.target||event.srcElement,_actid;if(_tgt){_actid=_tgt.getAttribute('actid')||false;var _tn=_tgt.tagName.toLowerCase();if(!_actid&&(_tn==='img'||_tn==='span')&&_tgt.parentNode&&_tgt.parentNode.getAttribute('actid')){_tgt=_tgt.parentNode;_actid=_tgt.getAttribute('actid')||false;}}
return[_tgt,_actid];},stop_event:function(event)
{if(event.stopPropagation)
{event.stopPropagation();}else{event.cancelBubble=true;}
ccmu.evt.cancel_event(event);},cancel_event:function(event)
{if(event.preventDefault)
{event.preventDefault();}else{event.returnValue=false;}},_odr:{observers:[],done:false,timer:null},_get_type:function(type){var _ie=(window.attachEvent&&!window.addEventListener);switch(type){case'focus':return(_ie)?'focusin':'focus';case'blur':return(_ie)?'focusout':'blur';default:return type;}},on:function(el,type,cb,obj,scope){var _capture=((type=='focus'||type=='blur')&&window.addEventListener)?true:false;var context=el;if(scope){context=(scope===true)?obj:scope;}
var _cb=function(event){if(cb.call(context,event||window.event,obj)===false){ccmu.evt.stop_event(event||window.event);}},_type=ccmu.evt._get_type(type);if(el.addEventListener){el.addEventListener(_type,_cb,(_capture));}else if(el.attachEvent){el.attachEvent("on"+_type,_cb);}else{return false;}
return true;}},frm:{frm2qs:function(frm)
{var _aqs=[],_ori=false,$frm=ccmu.dom.getProperElement(frm);frm=$frm[0];for(i=0;i<frm.elements.length;i++){var _el=frm.elements[i];if(!_el||!_el.name){continue;}
switch(_el.tagName.toLowerCase()){case"input":switch(_el.type){case"text":case"hidden":case"file":case"password":case"reset":case"submit":_ori=ccmu.frm._get_ori_attr(_el);_aqs.push(_el.name+"="+((!_ori||(_el.value!==_ori))?encodeURIComponent(_el.value):''));break;case"checkbox":if(_el.checked){_aqs.push(_el.name+"="+encodeURIComponent(_el.value));}else{_aqs.push(_el.name+"=0");}
break;case"radio":if(_el.checked){_aqs.push(_el.name+"="+encodeURIComponent(_el.value));}
break;}
break;case"button":switch(_el.type){case"reset":case"submit":case"button":_ori=ccmu.frm._get_ori_attr(_el);_aqs.push(_el.name+"="+((!_ori||(_el.value!==_ori))?encodeURIComponent(_el.value):''));break;}
break;case"textarea":_ori=_el.getAttribute('_ori')||false;var $_el=$(_el);_aqs.push($_el.attr('name')+"="+((!_ori||($_el.val()!==_ori))?encodeURIComponent($_el.val()):''));break;case"select":switch(_el.type){case'select-one':_aqs.push(_el.name+"="+encodeURIComponent(_el.options[_el.selectedIndex].value));break;case'select-multiple':for(var j=0;j<_el.options.length;j++)
if(_el.options[j].selected)
_aqs.push(_el.name+"="+encodeURIComponent(_el.options[j].value));break;}
break;}}
return _aqs.join('&');},treecat_chk:function()
{var _ret=true;if(this.elts.opts_form&&this.elts.opts_form.addcat&&this.elts.opts_form.addcat.value&&this.config.addconfmsg){_ret=confirm(this.config.addconfmsg);}
if(this.elts.opts_form&&this.elts.opts_form.movetocat&&(this.elts.opts_form.movetocat.value>=0)&&this.config.moveconfmsg){_ret=confirm(this.config.moveconfmsg);}
if(this.elts.opts_form&&this.elts.opts_form.deletecat&&this.elts.opts_form.deletecat.checked&&this.config.deleteconfmsg){_ret=confirm(this.config.deleteconfmsg);}
return _ret;},_get_ori_attr:function(_tgt)
{var _ori=null,_actid;if(typeof _tgt.value=='string')
{_actid=_tgt.getAttribute('actid')||null;_ori=_tgt.getAttribute('_ori')||null;if((_ori===null)&&(_actid==='ofempty'))
{_ori=_tgt.value;_tgt.setAttribute('_ori',_tgt.value);}}
return _ori;}},cookie:{set:function(name,val,days,path)
{path=path||'/';var _exp='';if(days){var _d=new Date();_d.setTime(_d.getTime()+(days*24*60*60*1000));_exp="; expires="+_d.toGMTString();}
document.cookie=name+"="+val+_exp+"; path="+path;},remove:function(name)
{ccmu.cookie.set(name,'',-1);},get:function(name)
{var _s=name+"=",_a=document.cookie.split(';'),_c;for(var i=0;i<_a.length;i++){_c=_a[i];while(_c.charAt(0)==' '){_c=_c.substring(1,_c.length);}
if(_c.indexOf(_s)===0){return _c.substring(_s.length,_c.length);}}
return null;}}};}(jQuery);if(!window.console){console={log:function(str){}}}
ccmu.dbg=(window.document.URL.match(/dbgjs/i)&&window.console)?function(str){console.log(str);}:function(){};(function($)
{'use strict';$.fn.fancy=function(options)
{options=$.extend({},$.fn.fancy.defaultOptions,options);var self=this;typeof $.fn.fancybox==='function'?self.fancybox(options):$(document).on('fancyboxLoaded',function(){self.fancybox(options);});return this;};$.fancy=$.fn.fancy;$.fn.fancy.defaultOptions={};}(jQuery));ccmBoxes={boxes:{},msgs:{ajax_start:"Loading ...",ajax_ok:"Completed",ajax_error:"Request error"}};(function($){"use strict";ccmBoxes.box=function(container,elts,config)
{this.$container=$("#"+container);this.config=config||{};this.elts={};this.id=container;elts=elts||{};if(elts.options)
{if(elts.options==='_auto_modale_')
{var self=this;this._opt_auto_modal=true;this.elts.$options=$("<div></div>").prependTo("body").addClass('modale').css("display","none").on('click',function(event){event=event||window.event;return self.onClick.call(self,event);});}
else
{this.elts.$options=$('#'+elts.options);}}
if(elts.content)
{this.elts.$content=$('#'+elts.content);}
if(this.config.xhrprm){this.config.xhrprm+='&';}else{this.config.xhrprm='';}
this.createEvents();if(this.config.reload){this.reload();}};ccmBoxes.box.prototype={$container:null,config:null,id:null,elts:null,_opt_auto_modal:false,toString:function(){return(' ccmbox id='+this.id);},createEvents:function(){var self=this;if(this.$container.length>0){this.$container.on('click',function(event){return self.onClick.call(self,event||window.event);});}
if(this.config.with_omo){var $el=$("#"+this.config.with_omo);if($el.length>0){$el.on('mouseover',function(event){return self.onMouseOver.call(self,event||window.event);});}}},onClick:function(event){var evtSelector=event.target||event.srcElement,$tgt=$(evtSelector),_actid=$tgt.attr('actid')||false,_ret=false;if(!_actid){$tgt=$tgt.parent();_actid=$tgt.attr('actid')||false;}
switch(_actid){default:_ret=true;break;case'optlink':if(this.config._zoom){this.toggleZoom();}
_ret=this.toggleOpt();break;case'hidelink':if(this.config._zoom){this.toggleZoom();}
if(this.elts.$content.css('display')==='none'){this.elts.$content.css('display','block');$tgt.find('span').eq(0).removeClass().addClass('arrowDown');}else{this.elts.$content.css('display','none');$tgt.find('span').eq(0).removeClass().addClass('arrowUp');}
ccmu.cookie.set('ccmbox_'+this.id,this.elts.$content.css('display'),3);break;case'delmyi':var _delid=$tgt.attr('delid')||0;if(_delid&&(!this.config.msgdel||confirm(this.config.msgdel))){var _token=$tgt.attr('data-token')||null,_tokenParam='';if(_token!==null){_tokenParam='&token='+encodeURI(_token);}
ccmu.dom.oldAjaxUpdater(this.elts.$content,$data.siteUrl+this.config.url,{method:'get',parameters:this.config.xhrprm+'mode=remove&delid='+parseInt(_delid,10)+_tokenParam});}
break;case'loadoptbynum':var _numact=$tgt.attr('numact')||0;this.loadOptFrm('numact='+_numact+'&');break;case'showallchilds':if(!this.config.showallchilds||!this.config.showallchilds.parent){return false;}
var _sac=this.config.showallchilds;_sac.num=_sac.num||5;_sac.tag_name=_sac.tag_name||'li';$("#"+_sac.parent).find(_sac.tag_name).slice(_sac.num).toggle();$tgt.find('span').eq(0).toggleClass('arrowDown arrowUp');break;case'fullscreen':this.toggleZoom();break;}
return _ret;},onSubmit:function(event)
{var evtSelector=event.target||event.srcElement,$tgt=$(evtSelector),_actid=$tgt.attr('actid')||false,_ret=false;ccmu.dbg('onSubmit actid='+_actid);switch(_actid){default:break;case'optform':if(this.config._zoom){this.toggleZoom();}
this.elts.$opts_form=$tgt;if(this.config.withfile){var _sepa=(this.config.url.match(/\?/))?'&':'?',self=this;this.elts.$opts_form.attr('action',$data.siteUrl+this.config.url+_sepa+this.config.xhrprm+'mode=valid_opt');_ret=ajax_upload.submit(self.elts.$opts_form[0],{onComplete:function(responseText){self.callbackOnCompleteUpload.call(self,responseText);}});}
else{_ret=this.submitOptionsForm();}
break;}
return _ret;},onMouseOver:function(event)
{var evtSelector=event.target||event.srcElement,$tgt=$(evtSelector),_actid=$tgt.attr('actid')||false,_ret=false;switch(_actid){default:break;case'slide':var $els=this.elts.$content.find('div'),_num=$tgt.attr('num')||0,$tgts=$tgt.parent().parent().find($tgt.prop("tagName"));$els.each(function(){var $this=$(this),inum=$this.attr('num')||-1;if(inum>=0)
{if(inum===_num)
{$tgts.eq(inum).addClass('selected');$this.removeClass('hide');}
else
{$tgts.eq(inum).removeClass('selected');$this.addClass('hide');}}});break;}
return _ret;},toggleOpt:function(){if(!this.elts.$options){return false;}
if(this.elts.$options.css('display')==='none'){this.elts.$options.css('display','block');this.loadOptFrm();}else{this.elts.$options.css('display','none');}
return false;},toggleZoom:function(){var _cnf=this.config;_cnf._zoom=_cnf._zoom||false;if(!_cnf._zoom){this.elts.$content.css('display','none');this.$container.addClass('zoom_box_right');_cnf.$ovl=$("<div></div>").html('&nbsp;').css('display','block').addClass('overlayDivBlack');$('#content').append(_cnf.$ovl);_cnf._zoom=true;if(_cnf.onzoom){_cnf.onzoom.call();}}else{this.elts.$content.css('display','');this.$container.removeClass('zoom_box_right');_cnf.$ovl.remove();_cnf._zoom=false;if(_cnf.onunzoom){_cnf.onunzoom.call();}}
if(_cnf.anchor_zoom){location.hash=_cnf.anchor_zoom;}},loadOptFrm:function(more_prm)
{var self=this,more_prm=more_prm||'';$.ajax({url:$data.siteUrl+this.config.url,data:this.config.xhrprm+more_prm+'mode=opt',type:'GET',success:function(data){self.elts.$options.html(data);self.setOptionsForm.call(self);},error:function(error){self.elts.$options.html(error.responseText);}});},reload:function(){if(this.elts.$content){ccmu.dom.oldAjaxUpdater(this.elts.$content,$data.siteUrl+this.config.url,{method:'get',parameters:this.config.xhrprm+'mode=content',evalScripts:false});}
return false;},setOptionsForm:function(){ccmu.dbg(this.elts.$options);if(this.elts.$options){var self=this;setTimeout(function(){self.elts.$opts_form=self.elts.$options.find('form').eq(0);ccmu.dbg(self.elts.$opts_form);if(self.elts.$opts_form.length>0){self.elts.$opts_form.on('submit',function(event){ccmu.dbg('submit opts_form');event=event||window.event;return self.onSubmit.call(self,event);});}},300);}},submitOptionsForm:function()
{if(this.config.callback_frm_check){if(!this.config.callback_frm_check.call(this)){return false;}}
ccmu.dom.oldAjaxUpdater(this.elts.$content,$data.siteUrl+this.config.url,{method:'post',parameters:this.config.xhrprm+'mode=valid_opt&'+ccmu.frm.frm2qs(this.elts.$opts_form),evalScripts:false});this.toggleOpt();return false;},callbackOnCompleteUpload:function(responseText)
{this.elts.$content.html(responseText);this.toggleOpt();}};ccmBoxes.skin={onChange:function(event){var _ret=false,_gei=ccmu.evt.get_event_infos(event),$tgt=$(_gei[0]),_actid=_gei[1];if(_actid==='ofempty'){return true;}
switch(_actid){case'sel_skin':var _css=$tgt.val(),_key=$tgt.attr('id');if(_css<0||typeof(_css)==='undefined'){_key=$tgt.attr('data-key');_css=$tgt.attr('data-value');if(_css<0||typeof(_css)==='undefined'){return false;}}
$.ajax({url:'/xhr/save_ccmskin',data:{key:_key,val:_css},type:'GET',success:function(data){if(data.result===true){ccmu.dom.remove_all_ccmcss(_key);if(!_css||_css==='ccm'){return false;}
ccmu.dom.css_include(data.message,'screen',_key);}else{alert(data.message);}
return false;},error:function(error){try{error.responseJSON=JSON.parse(error.responseText);alert(error.responseJSON.message);}catch(e){console.error('ccmboxes skin - Parsing error',e);}}});break;default:return true;}
return _ret;}};ccmBoxes.myfav={add:function(el){var $el=$(el);$.ajax({url:'/xhr/myfav/',data:'url='+window.document.URL+'&title='+encodeURIComponent(document.title)+'&mode=add&token='+$el.attr('data-token'),type:'POST',success:function(data){ccmBoxes.myfav._linklbl=$el.html();$el.html('OK '+data.replace(/</g,"&lt;").replace(/>/g,"&gt;"));setTimeout(function(){$el.html(ccmBoxes.myfav._linklbl);},3000);var _cte=ccmBoxes.topic.colors.ok,_box=ccmBoxes.boxes.myfav;if(_box){_box.$container.css('display','');if(_box.config.anchor_zoom){location.hash=_box.config.anchor_zoom;}
_box.reload();(new ccmu.dom.fade(_box.elts.$content,{from:_cte.fade_from,to:_cte.fade_to,w_return:true,final_reset:true})).go();}
return false;},error:function(error){$el.html(error.responseText);var _cte=ccmBoxes.topic.colors.err;(new ccmu.dom.fade($el,{from:_cte.fade_from,to:_cte.fade_to,w_return:true,final_reset:true})).go();return false;}});}};})(jQuery);articlesUtils=function($){"use strict";var fancyOptions={autoScale:true,transitionIn:'elastic',transitionOut:'elastic',speedIn:500,speedOut:300,autoDimensions:true,centerOnScroll:true};$(document).on('keyup','#articleTitle',function()
{$('#articleSlug').val('');}).on('click','.jDownloadLink',function(e)
{e.preventDefault();var $this=$(this),matchingOs='';articlesUtils.appMob(this,$this.attr('data-id'));articlesUtils.downloadLink.getMatchingLang($this.attr('data-langs'),function(matchingLang)
{if(matchingLang!==null)
{articlesUtils.downloadLink.displayForLang(matchingLang);}
else
{matchingOs=articlesUtils.downloadLink.getMatchingOs();if(matchingOs!==null)
{articlesUtils.downloadLink.displayForOs(matchingOs);}
else
{window.open($this.attr('data-url'),'_blank');window.location=$this.attr('href');}}});}).on('click','#buyButton',function(){var $this=$(this);articlesUtils.appMob(this,$this.attr('data-id'));window.open($this.attr('data-url'),'_blank');});return{elts:{},config:{},msg:{},el:null,listeningExit:false,initEdtMode:function(prms,msg){var $linkAddSepa=$('#lnk_add_sepa'),$linkEditArticle=$('#lnk_edit_article'),$linkUpdateArticle=$('#lnk_update_article'),$linkAddArticle=$('#lnk_add_article'),$articleOptions=$('#article_edit_opt');articlesUtils.elts={options:$articleOptions[0],content:$('#article_cnt')[0],dlprogress:null,advanced_options:null,opts_form:null};articlesUtils.config=prms||{};articlesUtils.msg=msg||{start_upload:"Processing ...",ok_upload:"Done !",error:"Request error"};if($linkEditArticle.length>0){$linkEditArticle.on('click',function(e){e.preventDefault();return articlesUtils.toggleOpt('edit');});}
if($linkUpdateArticle.length>0){$linkUpdateArticle.on('click',function(e){e.preventDefault();return articlesUtils.toggleOpt('update');});}
if($linkAddArticle.length>0){$linkAddArticle.on('click',function(e){e.preventDefault();return articlesUtils.toggleOpt('add');});}
if($linkAddSepa.length>0){$linkAddSepa.on('click',function(e){e.preventDefault();return articlesUtils.toggleOpt('addsepa');});}
if($articleOptions.length>0){$articleOptions.on('click',function(e){return articlesUtils.onClickForm.call(articlesUtils,e||window.event);});}
magiclink.num_btns_in_ul=1;},toggleOpt:function(act){var $articleOptions=$('#article_edit_opt'),$linkEditArticle=$('#lnk_edit_article'),$linkUpdateArticle=$('#lnk_update_article'),$linkAddArticle=$('#lnk_add_article'),articleConfig=articlesUtils.config;if($articleOptions.length===0){return false;}
articleConfig.cur_act=act;if($articleOptions[0].style.display==='none'){$articleOptions.html('').css('display','block');if(act==='edit'||act==='add'||act==='update'){if($linkEditArticle.length>0){$linkEditArticle.css('display','none');}
if($linkUpdateArticle.length>0){$linkUpdateArticle.css('display','none');}
if($linkAddArticle.length>0){$linkAddArticle.css('display','none');}
if(!articlesUtils.listeningExit){articlesUtils.listeningExit=true;$(window).on('beforeunload',articlesUtils.beforeUnload);}}
var _prm='';for(var _i in articleConfig){if((typeof _i==='string')&&(_i!=='url')&&(typeof articleConfig[_i]==='string')){_prm+='&'+_i+'='+articleConfig[_i];}}
ccmu.dom.oldAjaxUpdater($articleOptions[0],articleConfig.url,{method:'post',parameters:'act='+act+_prm,evalScripts:true});}else{$articleOptions.css('display','none');if(articlesUtils.listeningExit){articlesUtils.listeningExit=false;$(window).off('beforeunload',articlesUtils.beforeUnload);}
if(act==='edit'||act==='add'||act==='update'){if($linkEditArticle.length>0){$linkEditArticle.css('display','block');}
if($linkUpdateArticle.length>0){$linkUpdateArticle.css('display','block');}
if($linkAddArticle.length>0){$linkAddArticle.css('display','block');}}}
return false;},togglePreview:function(){var $formArtFields=$('#frm_art_fields'),$artPreview=$('#artpreview'),$artClose=$('#artclose'),$artSub=articlesUtils.elts.opts_form.artsubmit,$backEdit=articlesUtils.elts.opts_form.backtoedit,$formUrl=$('#frm_edit_url');if(articlesUtils.elts.opts_form.length===0){return false;}
if($formArtFields[0].style.display==='none'){$formArtFields[0].style.display='block';$backEdit.style.display='none';if($artClose.length>0){$artClose[0].style.display='none';}
if($artPreview.length>0){$artPreview[0].style.display='inline';}
if($formUrl.length>0){$formUrl[0].style.display='block';}
articlesUtils.showMsg('','');}else{$formArtFields[0].style.display='none';$backEdit.style.display='inline';if($artPreview.length>0){$artPreview[0].style.display='none';}}
if(typeof $artSub!=="undefined"&&typeof $backEdit!=="undefined"&&$artPreview.length>0){$artSub.style.display=$backEdit.style.display;}
else if(typeof $artSub!=="undefined"&&typeof $backEdit!=="undefined"){$artSub.style.display=($backEdit.style.display==='none')?'inline':'none';}},toggleAdv:function(){if(typeof articlesUtils.elts.advanced_options==="undefined"){return false;}
var elemOptions=articlesUtils.elts.advanced_options;if(elemOptions.style.display==='none'){elemOptions.style.display='block';}else{elemOptions.style.display='none';}
return false;},detectLanguage:function(){var language=window.navigator.userLanguage||window.navigator.language;return language.substring(0,2);},appMob:function(elt,id){var currentOs=articlesUtils.detectOs().toLowerCase(),ret='other';if((currentOs==='iphone')||(currentOs==='ipad')){elt.href='/download/app/?src='+currentOs+'#'+id;ret='ios';}
else if(currentOs==='android'){elt.href='/download/app/?src='+currentOs+'#'+id;ret='android';}
return ret;},detectOs:function(){var OS="Unknown",av=navigator.appVersion,ua=navigator.userAgent;if(av.indexOf("Win")!==-1){OS="Windows";}
if(av.indexOf("Mac")!==-1){OS="Mac";}
if(av.indexOf("X11")!==-1){OS="Unix";}
if(av.indexOf("Linux")!==-1){OS="Linux";}
if(ua.indexOf("Android")!==-1){OS="Android";}
if(ua.indexOf("iPhone")!==-1){OS="iPhone";}
if(ua.indexOf("iPad")!==-1){OS="iPad";}
if(ua.indexOf("iPod")!==-1){OS="iPhone";}
return OS;},countdown:function(){if(typeof articlesUtils.config==="undefined"){return false;}
var $countdown=$('#countdown');articlesUtils.config.c1--;if(articlesUtils.config.c1===0){window.location='/#ID='+articlesUtils.config.id+'&module='+articlesUtils.config.module;}
else if($countdown.length>0){$countdown.html(articlesUtils.config.c1);}},init:function(prms){if(typeof prms==="undefined"){return false;}
var $countdown=$('#countdown');articlesUtils.config=prms||{};setInterval(articlesUtils.countdown,1000);if($countdown.length>0){$countdown.html(articlesUtils.config.c1);}
else{setTimeout(this.init,50);}},setOptionsForm:function(){if(typeof articlesUtils.elts.options==="undefined"){return false;}
articlesUtils.elts.opts_form=articlesUtils.elts.options.getElementsByTagName('form')[0];var $formOptions=$(articlesUtils.elts.opts_form),$artTitle=$('#art_title'),$lnkAdvOpt=$('#lnk_adv_opt'),$artPreview=$('#artpreview');if($formOptions.length>0){$formOptions.on('submit',function(event){return articlesUtils.onSubmit.call(articlesUtils,event||window.event);});$formOptions.on('mouseover mouseout',function(event){return articlesUtils.onMouseEventForm.call(articlesUtils,event||window.event);});var $textArea=$formOptions.find('textarea');articlesUtils.elts.textarea=$textArea[0];if($textArea.length>0){$textArea.on('focus',function(){document.onkeyup=magiclink.on_keyup;return true;});$textArea.on('blur',function(){document.onkeyup=null;return true;});$textArea.on('click',function(){magiclink.on_click();return true;});if($formOptions[0].act.value==='add'){if($artTitle.length>0){$artTitle.html('...');}
if(articlesUtils.elts.content){articlesUtils.elts.content.innerHTML='...';}}}
if($lnkAdvOpt.length>0){articlesUtils.elts.advanced_options=$('#article_adv_opt')[0];$lnkAdvOpt.on('click',function(){return articlesUtils.toggleAdv();});}
if($artPreview.length>0){$artPreview[0].disabled=false;}}},testRegExp:function(){var $urlRegExp=$('#urlregexp'),$strRegExp=$('#strregexp'),$urlRegExpDiv=$('#urlregexp_div'),$urlRegExpMsg=$('#urlregexp_msg'),_url=$urlRegExp.length>0?$urlRegExp.val():'',_regexp=$strRegExp.length>0?$strRegExp.val():'',onError=function(error){if(typeof error.responseText!=="undefined"){try{error=JSON.parse(error.responseText);}catch(e){console.error("Parsing error testRegExp",e);error.msg='Server error';}}
$urlRegExpDiv.addClass('error');$urlRegExpMsg.html(error.msg);};if($urlRegExpDiv.length===0||$urlRegExpMsg.length===0){return false;}
$urlRegExpDiv.removeClass();$urlRegExpMsg.html('');$.ajax({url:'/xhr/testregexp/',data:{url:_url,regexp:_regexp},dataType:'json',success:function(data)
{if(typeof data.res!=='undefined'&&data.res===true)
{$urlRegExpDiv.addClass('validMsg');$urlRegExpMsg.html(data.msg);}
else{onError(data);}},error:onError});return false;},directDownload:function()
{$.fancy($.extend({},fancyOptions,{href:'#direct_download'}));},downloadLink:{getMatchingLang:function(availableLangs,callback)
{var configLang=articlesUtils.config.lang;if(configLang.length>0)
{$.ajax({url:'/dynamicdelivery/prefered_language',data:{l:availableLangs},async:false,success:function(data)
{var lang=(data.responseText||articlesUtils.detectLanguage()).substring(0,2).toLowerCase(),matchingLang=null;for(var i=0,l=configLang.length;i<l;++i)
{if(configLang[i].toLowerCase()===lang)
{matchingLang=lang;break;}}
callback(matchingLang);},error:function(err){console.error('Request prefered_language error',err);callback(null);}});}
else{callback(null);}},getMatchingOs:function()
{var configOs=articlesUtils.config.os,os=articlesUtils.detectOs().toLowerCase().replace(' ','_'),osLength=configOs.length,matchingOs=null,i=0;if(osLength>0)
{for(;i<osLength;++i)
{if(configOs[i].toLowerCase().replace(' ','_')===os)
{matchingOs=os;break;}}}
return matchingOs;},displayForOs:function(os)
{$('#choose_os_'+os).css('display','block');$.fancy($.extend({},fancyOptions,{href:'#choose_os',fixed:false}));},displayForLang:function(matchingLang)
{$('#choose_flag_'+matchingLang).css('display','block');$.fancy($.extend({},fancyOptions,{href:'#choose_language',fixed:false}));}},showOverlay:function()
{$("#overlay").css('display','');setTimeout(function()
{$("#cancel_request").css('display','');},5);},hideOverlay:function()
{$("#overlay").css('display','none');},onMouseEventForm:function(event){var _tgt=event.target||event.srcElement,_actid=_tgt.getAttribute('actid')||false,_ret=false,_actlbl='';if(!_actid){_tgt=_tgt.parentNode;_actid=_tgt.getAttribute('actid')||false;}
switch(_actid){default:_ret=true;break;case'textfmt':if(event.type==='mouseover'){_actlbl=_tgt.getAttribute('actlbl')||false;BulleWrite(_actlbl);break;}else{BulleHide();break;}}
return _ret;},showMsg:function(msg,css){msg=msg||'';var $ajaxMsg=$('#ajaxmsg');if(msg!==''){$ajaxMsg.css('display','block');css=css||'boxInfos';}else{$ajaxMsg.css('display','none');}
$ajaxMsg.removeClass().addClass(css).html(msg);location.hash='top';},afterSubmitImageFrm:function(responseText){try{var infos=JSON.parse(responseText),imgInfos=infos.image;$('#infoimageUpload').css('display','block');$('#imagePreview').attr('src',imgInfos);$('#imageUploadedName').val(imgInfos);articlesUtils.afterSubmit(infos);}
catch(e){articlesUtils.showMsg(articlesUtils.msg.error+': '+e.message,'boxError');}},callbackStartUpload:function(){articlesUtils.showMsg(articlesUtils.msg.start_upload,'boxInfos');return true;},callbackOnCompleteUpload:function(responseText){try{var _imgInfos=JSON.parse(responseText);if(_imgInfos[0]===true){articlesUtils.showMsg(articlesUtils.msg.ok_upload,'boxValid');tagActions.insert(articlesUtils.elts.textarea,_imgInfos[1],false,true);}else{articlesUtils.showMsg(_imgInfos[1],'boxError');}}catch(e){articlesUtils.showMsg(articlesUtils.msg.error,'boxError');}},onClickForm:function(event){var _tgt=event.target||event.srcElement,_actid=_tgt.getAttribute('actid')||false,_ret=false,_acttype='';if(!_actid){_tgt=_tgt.parentNode;_actid=_tgt.getAttribute('actid')||false;}
switch(_actid){default:_ret=true;break;case'optlink':_ret=articlesUtils.toggleOpt(articlesUtils.config.cur_act);break;case'textfmt':_acttype=_tgt.getAttribute('acttype')||false;tagActions.insert(articlesUtils.elts.textarea,_acttype,true);break;case'mlcancelall':magiclink.cancel_all();break;case'testregexp':articlesUtils.testRegExp();break;case'mlapplyall':magiclink.apply_all();break;case'loadimgart':articlesUtils.elts.opts_form.action=articlesUtils.config.url;articlesUtils.elts.opts_form.mode.value='loadimgart';_ret=ajax_upload.submit(articlesUtils.elts.opts_form,{onStart:articlesUtils.callbackStartUpload,onComplete:articlesUtils.callbackOnCompleteUpload});if(_ret){articlesUtils.elts.opts_form.submit();}
_ret=false;break;case'sendimgform':articlesUtils.togglePreview();articlesUtils.elts.opts_form.mode.value='artpreview';articlesUtils.hideOverlay();_ret=ajax_upload.submit(articlesUtils.elts.opts_form,{onStart:articlesUtils.callbackStartUpload,onComplete:function(responseText)
{articlesUtils.afterSubmitImageFrm(responseText);}});if(_ret){articlesUtils.elts.opts_form.submit();}
_ret=false;break;case'artpreview':articlesUtils.togglePreview();articlesUtils.elts.opts_form.mode.value='artpreview';articlesUtils.submitOptionForm();break;case'togglepreview':articlesUtils.togglePreview();break;case'toggleedit':articlesUtils.toggleOpt('edit');break;case'artsubmit':if($('#frm_art_fields').css('display')!=='none'){articlesUtils.togglePreview();}
articlesUtils.elts.opts_form.mode.value='artsubmit';articlesUtils.submitOptionForm();break;}
return _ret;},onSubmit:function(){articlesUtils.submitOptionForm();},uploadProgress:{started:false,interval:null,maxTimeout:30000,lastResponse:null,start:function(frequency,decay)
{articlesUtils.uploadProgress.started=true;var $progressContainer=$('#ajaxmsg'),launchRequest=function(time)
{articlesUtils.uploadProgress.interval=setTimeout(function()
{$.ajax({url:'/download/_xhr_/progress/',data:{ID:articlesUtils.elts.opts_form.ID.value},success:function(data)
{if(data.match(/<!--STOP-->/i)){articlesUtils.uploadProgress.stop();}else{$progressContainer.html(data);if(data===articlesUtils.uploadProgress.lastResponse)
{time*=decay;}
time=Math.min(Math.max(time,frequency),articlesUtils.uploadProgress.maxTimeout);articlesUtils.uploadProgress.lastResponse=data;launchRequest(time);}},error:function()
{articlesUtils.showMsg(articlesUtils.msg.error,'boxError');articlesUtils.uploadProgress.stop();}});},time);};launchRequest(0);},stop:function()
{if(articlesUtils.uploadProgress.started)
{articlesUtils.uploadProgress.started=false;articlesUtils.uploadProgress.lastResponse=null;clearTimeout(articlesUtils.uploadProgress.interval);}}},submitOptionForm:function(){document.location='#topedit';articlesUtils.showMsg(articlesUtils.msg.start_upload,'boxInfos');articlesUtils.showOverlay();var $downloadUrl=$('#download_url'),downloadUrlVal=$downloadUrl.val()||'',$downloadPreviousUrl=$('#download_previous_url'),downloadPreviousUrlVal=$downloadPreviousUrl.val()||'',$version=$('#version'),versionVal=$version.val()||'',$previousVersion=$('#previous_version'),previousVersionVal=$previousVersion.val()||'';if(articlesUtils.elts.opts_form.mode.value==='artsubmit'&&typeof articlesUtils.elts.opts_form.ID!=='undefined'&&downloadUrlVal!==''&&(downloadPreviousUrlVal!==downloadUrlVal||previousVersionVal!==versionVal))
{articlesUtils.uploadProgress.start(200,4);}
$.ajax({url:articlesUtils.config.url,data:ccmu.frm.frm2qs(articlesUtils.elts.opts_form),type:'POST',success:function(data){articlesUtils.uploadProgress.stop();articlesUtils.hideOverlay();switch(articlesUtils.elts.opts_form.mode.value){case'artpreview':articlesUtils.afterSubmit(data);break;case'artsubmit':if(articlesUtils.listeningExit){articlesUtils.listeningExit=false;$(window).off('beforeunload',articlesUtils.beforeUnload);}
articlesUtils.afterSubmit(data);$('#artsubmit').css('display','none');$('#artclose').css('display','');break;}},error:function(data){articlesUtils.hideOverlay();switch(articlesUtils.elts.opts_form.mode.value){case'artpreview':case'artsubmit':try{if(data&&data.status&&data.status===504){}
else{articlesUtils.uploadProgress.stop();var _result=JSON.parse(data.responseText);_result.msg=_result.msg||articlesUtils.msg.error;articlesUtils.showMsg(_result.msg,'boxError');}}catch(e){articlesUtils.uploadProgress.stop();articlesUtils.showMsg(articlesUtils.msg.error,'boxError');}
break;}}});return false;},afterSubmit:function(data)
{try{var _result=(data.responseText)?JSON.parse(data.responseText):data,$artTitle=$('#art_title');if(typeof _result!=='object'&&Number(_result)!==NaN){_result={res:1,id:_result};}
_result.msg=_result.msg||articlesUtils.msg.ok_upload;if(_result.res){if(_result.title_alt){$artTitle.html(_result.title_alt);}
else if(_result.title){$artTitle.html(_result.title);}
if(_result.content){articlesUtils.elts.content.innerHTML=_result.content;}
articlesUtils.showMsg(_result.msg,'boxValid');if(_result.titletoc&&articlesUtils.elts.opts_form.titletoc){articlesUtils.elts.opts_form.titletoc.value=_result.titletoc;}
if(_result.url&&articlesUtils.elts.opts_form.url){articlesUtils.elts.opts_form.url.value=_result.url;}
if(_result.url&&_result.title){if(history.pushState){history.pushState({},_result.title,_result.url);}}
if(_result.id&&articlesUtils.elts.opts_form.ID){articlesUtils.elts.opts_form.ID.value=_result.id;articlesUtils.elts.opts_form.act.value='edit';}
if(_result.toc){$('#toc_ctn').html(_result.toc);}}else{articlesUtils.showMsg(_result.msg,'boxError');if(data.error){for(var key in data.error){articlesUtils.showMsg(articlesUtils.msg.error+': '+data.error[key]+"<br />",'boxError');}}}}catch(e){articlesUtils.showMsg(articlesUtils.msg.error,'boxError');}},activateTab:function(el){var _cur_tab=el.parentNode,_tab=null,_ctn=null,configTabs=articlesUtils.config.tabs;for(var _i in configTabs){_tab=$("#"+configTabs[_i][0]);_ctn=$("#"+configTabs[_i][1]);if(_tab.length===0||_ctn.length===0){continue;}
if(_tab[0]===_cur_tab){_ctn.css('display','block');_tab.removeClass().addClass('selected');}else{_ctn.css('display','none');_tab.removeClass();}}
return false;},beforeUnload:function(){return articlesUtils.msg.confirm_exit||"You haven't finished your post yet. Do you want to leave without finishing?";},widget:function(widget_name){if(!widget_name||$("#"+widget_name).length===0){return false;}
var _name=widget_name,_parameters=location.search.substr(1),_M=widget_name.match(/^([^\|]+)\|/),_paramArray='';if(_M&&_M[1]){_name=_M[1];_paramArray=widget_name.split('|');for(var i=1,l=_paramArray.length;i<l;++i){_parameters+='&'+_paramArray[i];}}
ccmu.dom.oldAjaxUpdater($("#"+_name)[0],'/xhr/widget_'+_name+'/',{method:'get',parameters:'xhr&'+_parameters,evalScripts:true});return false;}};}(jQuery);articlesutils=articlesUtils;ajax_upload={frame:function(c){var n='f'+Math.floor(Math.random()*99999);var d=document.createElement('DIV');d.innerHTML='<iframe style="display:none" src="about:blank" id="'+n+'" name="'+n+'" onload="ajax_upload.loaded(\''+n+'\')"></iframe>';document.body.appendChild(d);var i=document.getElementById(n);if(c&&typeof(c.onComplete)=='function'){i.onComplete=c.onComplete;}
return n;},form:function(f,name){f.setAttribute('target',name);},submit:function(f,c){ajax_upload.form(f,ajax_upload.frame(c));return(c&&typeof(c.onStart)=='function')?c.onStart():true;},loaded:function(id){var i=document.getElementById(id),d;d=i.contentWindow?i.contentWindow.document:i.contentDocument?i.contentDocument:i.document;if(d.location.href=="about:blank"){return;}
if(typeof(i.onComplete)=='function'){var ret=(null===d.body.innerHTML.match(/^<pre.*<\/pre>$/i))?d.body.innerHTML:d.documentElement.textContent;i.onComplete(ret);}}}
ccmBoxes=window.ccmBoxes||{boxes:{}};ccmBoxes.topic=(function($)
{"use strict";return{question_id:0,forum_id:0,get_prms:{},uforum:{},container:null,main_tabs:[['content_tab','content_ctn'],['forumlist_tab','forumlist_ctn']],msgs:{show_cmts:'',hide_cmts:'',post_error:'',solve_lnk:'',unsolve_lnk:''},urls:{prefix:'/forum/_xhr_/',pmm:'/forum/_xhr_/postmodomenu/'},colors:{err:{fade_from:['EF','EF','EF'],fade_to:['D6','07','1B']},ok:{fade_from:['E3','EB','F5'],fade_to:['AE','B5','BD'],fade_anchor:['FD','98','1E']}},constants:{CCM_MSG_QUESTION:1,CCM_MSG_QUESTION_COMMENT:2,CCM_MSG_ANSWER:3,CCM_MSG_ANSWER_COMMENT:4},_is:{cim:0,frmqa_init:false,msgrsz:null},topicfrms:{},init:function(question_id,w_qa_evt){var _abm=this.abm,_res=null,_matchResult=null;this.question_id=question_id;this.container=$('#ctn_'+question_id);if(this.container.length===0){return false;}
_res=this.initEvents();if(_res&&w_qa_evt){_res=this.initQafrmEvents($('#message'));}
_matchResult=window.document.URL.match(/#newanswer$/);if(_matchResult){_abm.loadFrm('newa',this.question_id,this.question_id);location.hash='';}
_matchResult=window.document.URL.match(/#.*?(new|edit)(q|a|c)_(\d+)_(\d+)_(\d)/);if(_matchResult&&_matchResult.length===6){this._is._cur_star=_matchResult[5]||false;_matchResult[3]=parseInt(_matchResult[3],10)||this.question_id;_matchResult[4]=parseInt(_matchResult[4],10)||this.question_id;_abm.loadFrm(_matchResult[1]+_matchResult[2],_matchResult[3],_matchResult[4]);location.hash='';}
this.uforum.get_prms=(this.uforum.module?'&ufmodule='+encodeURIComponent(this.uforum.module):'')
+(this.uforum.info_id?'&ufinfoid='+this.uforum.info_id:'')
+(this.uforum.title?'&uftitle='+encodeURIComponent(this.uforum.title):'')
+(this.uforum.info_url?'&ufurl='+encodeURIComponent(this.uforum.info_url):'')
+(this.uforum.info_aid?'&ufaid='+encodeURIComponent(this.uforum.info_aid):'')
+(this.uforum.info_anick?'&ufanick='+encodeURIComponent(this.uforum.info_anick):'')
+(this.uforum.info_atok?'&ufatok='+encodeURIComponent(this.uforum.info_atok):'')
+(this.get_prms.tcp?'&tcp='+encodeURIComponent(this.get_prms.tcp):'');return _res;},initEvents:function(){var $mdn=$('#modo_div_new');if(this.container.length===0){return false;}
ccmu.evt.on(this.container[0],'click',this.onClick,this,true);ccmu.evt.on(this.container[0],'dblclick',this.onDblClick,this,true);ccmu.evt.on(this.container[0],'focus',this.onFocus,this,true);ccmu.evt.on(this.container[0],'blur',this.onBlur,this,true);this.initTooltipEvents();if($mdn.length>0){ccmu.evt.on($mdn[0],'click',this.onClick,this,true);ccmu.evt.on($mdn[0],'focus',this.onFocus,this,true);ccmu.evt.on($mdn[0],'blur',this.onBlur,this,true);}
$mdn=$('#newqcmt');if($mdn.length>0){ccmu.evt.on($mdn[0],'click',this.onClick,this,true);}
$mdn=$('#stars_digest_eval');if($mdn.length>0){ccmu.evt.on($mdn[0],'click',this.onClick,this,true);}
return true;},initTooltipEvents:function()
{var $el=$('#forumlist_ctn'),$els=$('#forumsublist_ctn');if($el.length>0){ccmu.evt.on($el[0],'mouseover',this.onMouseOver,this,true);ccmu.evt.on($el[0],'mouseout',this.onMouseOut,this,true);}
if($els.length>0){ccmu.evt.on($els[0],'mouseover',this.onMouseOver,this,true);ccmu.evt.on($els[0],'mouseout',this.onMouseOut,this,true);}
return true;},initModoEvents:function()
{var $modSelact=$('#mod_selact');if($modSelact.length>0){ccmu.evt.on($modSelact[0],'change',this.onChange,this,true);}},initQafrmEvents:function($el)
{if($el.length===0){return false;}
else{ccmu.evt.on($el[0],'keyup',function(event){magiclink.on_keyup(event);return true;});if(!this._is.frmqa_init){ccmu.evt.on($el[0],'click',function(){magiclink.on_click();return true;});}
ccmu.evt.on($el[0],'focus',function(event){magiclink.textarea=event.target||event.srcElement;});(new ccmu.dom.TaResize($el)).go();$el=$('#icnbar');if($el.length>0){ccmu.evt.on($el[0],'mouseover',this.onMouseOver,this,true);ccmu.evt.on($el[0],'mouseout',this.onMouseOut,this,true);}
magiclink.num_btns_in_ul=1;this._is.frmqa_init=true;return true;}
return false;},initQuestionEvents:function(){var $el=$('#topic_question');if($el.length===0||$el.html()===''){return false;}
ccmu.evt.on($el[0],'dblclick',this.onDblClick,this,true);return true;},toggleShowMore:function(){var $qdispctn=$('#qdispctn');if($qdispctn.length>0){$('#qshowmore').css('display',(($qdispctn[0].scrollHeight>$qdispctn[0].clientHeight)?'block':'none'));}},getCommonPrms:function(exclude_cat){if(exclude_cat){return'parentx='+this.question_id+(this.get_prms.s?'&s=s':'')+this.uforum.get_prms;}
else{return'parentx='+this.question_id+'&cat='+this.forum_id+(this.get_prms.s?'&s=s':'')+this.uforum.get_prms;}},startUpload:function()
{var _ret=ajax_upload.submit(articlesUtils.elts.opts_form,{onStart:articlesUtils.callbackStartUpload,onComplete:articlesUtils.callbackOnCompleteUpload});if(_ret){articlesUtils.elts.opts_form.submit();}},activateTab:function($el){var _ret=false,_tab=null,_ctn=null;for(var _i in this.main_tabs){_tab=$("#"+this.main_tabs[_i][0]);_ctn=$("#"+this.main_tabs[_i][1]);if(_tab.length===0||_ctn.length===0){continue;}
if(_tab[0]===$el[0]){if(_tab.hasClass('selected')&&_tab.attr('id')==='content_tab'){_ret=true;}
_ctn.css('display','block');_tab.removeClass().addClass('selected');}else{_ctn.css('display','none');_tab.removeClass();}}
return _ret;},reloadTopic:function(){var self=this;ccmu.dom.oldAjaxUpdater(this.container[0],this.urls.prefix+'fulltopic/',{method:'get',parameters:this.getCommonPrms(true)+'&ID='+this.question_id+(this.get_prms.sort?'&sort='+this.get_prms.sort:'')+'&page='+this.get_prms.page+(this.get_prms.full?'&full':''),evalScripts:true,onComplete:function(){self.topicfrms=[];self.abm.mode='';self._is.cim=0;self.initTooltipEvents();$('#modo_div_new').css('display','none');}});},getMsgId:function($el,qa_only){qa_only=qa_only||false;$el=$el||null;var _m=null,$body=$('body');while($el!==null&&$el.length>0&&$el!==$body){if(typeof $el.attr("id")!=="undefined"){_m=(qa_only)?$el.attr("id").match(/^(a|ctn_)(\d+)$/):$el.attr("id").match(/^(a|c|ctn_|f)(\d+)$/);}
if(_m){return parseInt(_m[2],10);}
if($el.attr("id")==='frmactmod'){_m=(qa_only)?$el[0].parent.value:$el[0].ID.value;if(_m){return parseInt(_m,10);}}
$el=$el.parent();}
return 0;},goToUrlAnchor:function(){var _matchResult=window.document.URL.match(/#(p?[0-9]+)/i),_el=null,_anchor=null;if(!_matchResult||!_matchResult[1]){return;}
if(window.document.URL.match(/#.*?\|signal/i)){this.mod.forceShow(_matchResult[1].substring(1,_matchResult[1].length));return;}
_el=document.createElement("A");_el.href="#"+_matchResult[1];if(!ccmu.dom.scroll.go($(_el))){window.name='';}else{_anchor=ccmu.dom.scroll._anchor;if(window.name===_anchor){return;}
$.ajax({url:window.document.URL,data:{anchor:_anchor},type:'POST',success:function(data){if(data.match(/^\/forum\/affich-/)){window.location=data;window.name=_anchor;}}});}},triggerErrorInEl:function($el,msg){if($el.length===0||!msg){return;}
$el.css('display','block');$el.removeClass().addClass('ftRed radius5 marB5');$el.html(msg);var _cte=this.colors.err;(new ccmu.dom.fade($el,{from:_cte.fade_from,to:_cte.fade_to,w_return:true,final_reset:true})).go();},triggerOkInEl:function($el,msg,w_reset){if($el.length===0){return;}
w_reset=typeof w_reset==='boolean'?w_reset:false;$el.css('display','');if(msg){$el.removeClass().addClass('ftGreen radius5 marB5');$el.html(msg);}
var _cto=this.colors.ok;(new ccmu.dom.fade($el,{from:_cto.fade_from,to:_cto.fade_to,w_return:true,final_reset:w_reset})).go();},checkJson:function(json,$el){if(!json.res&&json.msgs){var _s='';for(var i=0;i<json.msgs.length;i++){_s+='<li>'+((json.msgs[i]instanceof Array)?json.msgs[i][1]:json.msgs[i])+'</li>';}
_s=(_s==='')?json.msg:'<ul class="disc">'+_s+'</ul>';this.triggerErrorInEl($el,_s);return false;}
return true;},onClick:function(event){var _ret=false,_gei=ccmu.evt.get_event_infos(event),$tgt=$(_gei[0]),_actid=_gei[1],_msg_id=0,_ctnfrm,_parent_id,_cmt_toggle,self=this,_abm=self.abm,_docu=null,_href=null,_mode='',$el=null,$el2=null,csrf_token=null,_acttype='',_force_txt='',_ta='';if(_actid==='ofempty'){return true;}
if(!_actid&&typeof $tgt.parent().attr("id")!=='undefined'&&$tgt.parent().attr("id").search(/_tab$/)>=0){$tgt=$tgt.parent();_actid='toggle_tab';}
if(_actid){_msg_id=this.getMsgId($tgt);}
else if($tgt.length>0&&typeof $tgt.prop('hash')!=='undefined'&&$tgt.attr('href').length>0&&$tgt.prop('tagName')==='A'){_docu=window.document.URL.replace(/#.*$/,'');_href=$tgt.attr("href").replace(/#.*$/,'');if(_href.match(/itunes\.apple\.com\//)){$tgt.attr("href",_href+'&at=1l3v7Mj&ct=appstv');}
return(_docu===_href)?ccmu.dom.scroll.go($tgt):true;}else{if($tgt.attr("href")&&$tgt.prop("tagName")==='A'){if($tgt.attr("href").match(/itunes\.apple\.com\//)){$tgt.attr("href",$tgt.attr("href")+'&at=1l3v7Mj&ct=appstv');}}
return true;}
_mode=$tgt.attr('mode')||false;ccmu.dbg('click '+_actid+' on id '+$tgt.id+' => msg_id='+_msg_id+', mode='+_mode);switch(_actid){case'toggle_tab':return ccmBoxes.topic.activateTab.call(this,$tgt);break;case'shlog':_ctnfrm=$tgt.parent().parent();if(_ctnfrm.length>0&&(_ctnfrm.hasClass("login"))){_ctnfrm.css('display','none');$el=_ctnfrm.next();while($el.length>0&&$el.prop("tagName")!=='DIV'){$el=$el.next();}
$el.show();}
break;case'hilog':_ctnfrm=$tgt.parent().previous();while(_ctnfrm.length>0&&_ctnfrm.prop("tagName")!=='DIV'){_ctnfrm=_ctnfrm.prev();}
if(_ctnfrm.length>0&&(_ctnfrm.hasClass('login'))){_ctnfrm.css('display','block');$el=_ctnfrm.next();while($el.length>0&&$el.prop("tagName")!=='DIV'){$el=$el.next();}
$el.hide();}
break;case'qshowmore':case"shqafrmdcq":$el=$('#qdispctn');$el2=$('#qshowmore');$el.css({maxHeight:'',height:'',overflow:'hidden'});$el2.css('display','none');_ret=true;break;case'shcmts':$('#comments_'+_msg_id+' > div:first').add($tgt.parent()).first().hide().siblings('div[id]').show();break;case'goanchor':_ret=ccmu.dom.scroll.go($tgt);break;case'shcmtfrm':_parent_id=this.getMsgId($tgt,true);_abm.loadFrm(_mode||'newc',_msg_id,_parent_id);break;case'newqcmt':this._is._cur_star=$tgt.attr('actnum')||false;_abm.loadFrm(_mode||'newc',this.question_id,this.question_id);break;case'cancelcmt':_parent_id=this.getMsgId($tgt,true);if(_mode.search(/^edit/)>=0){_abm.reloadOri(_mode,_msg_id,_parent_id);}
_abm.closeFrm(_mode||'newc',_msg_id,_parent_id);break;case'postcmt':case'pviewcmt':_parent_id=this.getMsgId($tgt,true);_abm.submitFrm(_mode||'newc',_msg_id,_parent_id,(_actid==='pviewcmt'));break;case'shqafrm':_abm.loadFrm(_mode||'newa',_msg_id,this.question_id);break;case'cancelqa':if(_mode.search(/^edit/)>=0){_abm.reloadOri(_mode,_msg_id,this.question_id);}
_abm.closeFrm(_mode||'newa',_msg_id,this.question_id);break;case'postqa':case'pviewqa':_abm.submitFrm(_mode||'newa',_msg_id,this.question_id,(_actid==='pviewqa'));break;case'backedit':_abm.toggleDisplay(_mode||'newa','none',_msg_id,this.question_id);break;case'shmodomenu':case'solve':case'signal':case'addmyi':case'pharos_warn':case'pharos':_ctnfrm=$('#modo_div_new');if(_ctnfrm.length===0){return false;}
var prms='';if(self._is.cim>0){if(_actid.match(/pharos/)){prms='act='+_actid+'&token='+$('#frmactmod').find('input[name="token"]').val();}
_ctnfrm.css('display','none').html('');if(!_actid.match(/solve|addmyi|pharos/)&&(self._is.cim===_msg_id)){self._is.cim=0;return false;}}
if(!_actid.match(/pharos/)){self.mod.place(event);}
_ctnfrm.html('&nbsp;').css('display','block');self._is.cim=_msg_id;self.mod.load(_msg_id,_actid,null,prms);break;case'votep':case'votem':case'votemm':case'votepp':_ctnfrm=$('#vote_'+_msg_id);csrf_token=_ctnfrm.data('token');if(_ctnfrm.length===0){return false;}
_ctnfrm.html('&nbsp;').addClass('waiting');$.ajax({url:self.urls.prefix+'vote/',data:self.getCommonPrms()+'&ID='+_msg_id+'&vote='+_actid+'&token='+csrf_token,type:'GET',success:function(data){_ctnfrm.html(data);$('#shcmts'+_msg_id).trigger('click');_ctnfrm.removeClass('waiting');},error:function(){_ctnfrm.removeClass('waiting').html('ERR');}});break;case'reloadtopic':this.reloadTopic();break;case'textfmt':_acttype=$tgt.attr('acttype')||false;if(!_acttype){return true;}
_force_txt=(_acttype==='conf')?$tgt.attr("title"):false,_ta=$tgt.parent().parent().attr('taid')||'message';tagActions.insert("#"+_ta,_acttype,true,false,_force_txt);break;case'mlcancelall':magiclink.cancel_all();break;case'mlapplyall':magiclink.apply_all();break;case'manual_upload_pic':this.startUpload();case'insertpic':if(articlesUtils.config.url!=='/forum/_xhr_/uploadimg/'){articlesUtils.config={url:'/forum/_xhr_/uploadimg/',ID:'0',title:''};articlesUtils.msg={start_upload:"Processing ...",ok_upload:"Done !",error:"Request error"};$el=($.browser.msie||$.browser.opera)?false:$('#filename_frm');if($el.length>0){ccmu.evt.on($el[0],'change',self.onChange,self,true);}}
articlesUtils.elts.opts_form=_abm.getFrm(_mode,_msg_id,this.question_id)[0];articlesUtils.elts.textarea=$('#message')[0];if($.browser.msie||$.browser.opera){$('#upload_div').show();}
else{$('#filename_frm').click();}
break;case'showdsclmr':$('#dsclmr').toggle();break;case'modnewreason':var $tareason=$("#tareason");if($tareason.length>0){$tareason.val($tareason.val()+"* "+$tgt.attr('title')+"\n\n");$tgt.css('color','#FD981E');}
break;case'modsubmit':this.mod.submit(_msg_id);break;case'stareval':_mode=$tgt.parent().parent().attr('mode')||false;var _ev=$tgt.attr('actnum')||false,_frm=_abm.getFrm(_mode,_msg_id,this.question_id),_t=$tgt.parent().find('div').eq(0),_cto=this.colors.ok;if(_ev&&_frm.length>0&&_t.hasClass('currentNote')){_frm.attr("stareval",_ev);_t.css('width',(16*parseInt(_ev,10))+'px');(new ccmu.dom.fade($tgt,{from:_cto.fade_from,to:_cto.fade_anchor,w_return:true,final_reset:true})).go();_frm.attr("message").focus();}
break;case'starevalrst':_mode=$tgt.parent().parent().attr('mode')||false;_frm=_abm.getFrm(_mode,_msg_id,this.question_id);_t=$tgt.parent().parent().find('div:nth-child(1) > div:nth-child(1)').eq(0);if(_frm.length>0&&_t.hasClass('currentNote')){_frm.attr('stareval','');_t.css('width','0px');_frm.attr("message").focus();}
break;default:_ret=true;break;}
return _ret;},onFocus:function(event){var _gei=ccmu.evt.get_event_infos(event),$tgt=$(_gei[0]),_actid=_gei[1],_ori=null;switch(_actid){case'author':break;case'ofempty':if(typeof $tgt.val()==='string'){_ori=ccmu.frm._get_ori_attr($tgt[0]);if($tgt.val()===_ori){$tgt.val('');}}
break;}
return true;},onBlur:function(event){var _ret=false,_gei=ccmu.evt.get_event_infos(event),$tgt=$(_gei[0]),_actid=_gei[1],_ori=null;switch(_actid){case'author':break;case'ofempty':if(typeof $tgt.val()==='string'){_ori=ccmu.frm._get_ori_attr($tgt[0]);if($tgt.val().length===0&&_ori){$tgt.val(_ori);}}
break;default:_ret=true;break;}
return _ret;},onMouseOver:function(event){var _ret=true,_gei=ccmu.evt.get_event_infos(event),$tgt=$(_gei[0]),_actid=_gei[1];switch(_actid){case'textfmt':BulleWriten($tgt.attr('actlbl')||$tgt.attr("title")||'');break;}
return _ret;},onMouseOut:function(event){var _ret=true,_gei=ccmu.evt.get_event_infos(event),_actid=_gei[1];switch(_actid){case'textfmt':BulleHide();break;}
return _ret;},onChange:function(event){var _ret=false,_gei=ccmu.evt.get_event_infos(event),$tgt=$(_gei[0]),_actid=_gei[1];switch(_actid){case'upload_pic':this.startUpload();break;case'mod_selact':this.mod.load(this.getMsgId($tgt));break;default:_ret=true;break;}
return _ret;},onDblClick:function(event){var _ret=false,_gei=ccmu.evt.get_event_infos(event),$tgt=$(_gei[0]),_actid=_gei[1],_msg_id=0,_mode=$tgt.attr('mode')||false,_abm=ccmBoxes.topic.abm,_parent_id='';if(_actid){_msg_id=this.getMsgId($tgt);}else{return true;}
ccmu.dbg('dblclick '+_actid+' on id '+$tgt.id+' => msg_id='+_msg_id+', mode='+_mode);switch(_actid){case'shqafrmdc':case"shqafrmdcq":_abm.loadFrm(_mode||'editq',_msg_id,this.question_id);this._is.titlefocus=($tgt.attr("id")==='qtitle');break;case'shcmtfrmdc':_parent_id=this.getMsgId($tgt,true);_abm.loadFrm(_mode||'edicc',_msg_id,_parent_id);break;}
return _ret;},abm:{mode:'',getFrmCtn:function(mode,msg_id,parent_id){ccmu.dbg('getFrmCtn '+mode+', '+msg_id+', '+parent_id);switch(mode){case'newa':return $('#newanswer_ctn');case'newq':case'editq':return $('#editques_ctn');case'newc':return $('#g'+parent_id);case'editc':case'edita':return $('#e'+msg_id);}},getFrm:function(mode,msg_id,parent_id){ccmu.dbg('getFrm '+mode+', '+msg_id+', '+parent_id);switch(mode){case'newa':case'edita':case'newq':case'editq':return $('#frmqa');case'newc':case'editc':return $('#f'+msg_id);}},toggleOvlDisplay:function(mode,force,msg_id,parent_id){ccmu.dbg('toggleOvlDisplay '+mode+', '+force+', '+msg_id+', '+parent_id);var $el=null;switch(mode){case'newa':$el=$('#newanswer_ovl');$el.css('display',(force?force:(($el.css('display')==='none')?'block':'none')));break;case'editq':$el=$('#o'+parent_id);$el.css('display',(force?force:(($el.css('display')==='none')?'block':'none')));break;case'newc':$el=$('#o'+parent_id);$el.css('display',(force?force:(($el.css('display')==='none')?'block':'none')));break;case'editc':case'edita':$el=$('#o'+msg_id);$el.css('display',(force?force:(($el.css('display')==='none')?'block':'none')));break;}},toggleOvlFrm:function(mode,force,msg_id,parent_id){ccmu.dbg('toggleOvlFrm '+mode+', '+force+', '+msg_id+', '+parent_id);var $el=ccmBoxes.topic.abm.getFrm(mode,msg_id,parent_id),$wd=null;if($el.length>0){$wd=$el.nextAll('div').eq(0);$wd.css('display',force?force:(($wd.css('display')==='none')?'block':'none'));$el=$el.parent().find('textarea').eq(0);$el.prop('disabled',($wd.css('display')!=='none'));}},toggleEditor:function(mode,force,msg_id,parent_id){var $el=$('#a0'),$frmctn=null;ccmu.dbg('toggleEditor '+mode+', '+force+', '+msg_id+', '+parent_id);$el.remove();switch(mode){case'newa':$el=$('#newanswer_'+ccmBoxes.topic.question_id);$el.css('display',(force?force:(($el.css('display')==='none')?'block':'none')));break;case'newq':case'editq':$el=$('#ctnedtmsg');$el.css('display',(force?force:(($el.css('display')==='none')?'block':'none')));break;case'editc':case'edita':$el=$('#e'+msg_id);$el.css('display',(force?force:(($el.css('display')==='none')?'block':'none')));break;case'newc':$frmctn=ccmBoxes.topic.abm.getFrmCtn(mode,msg_id,parent_id);if($frmctn.length>0){$el=$frmctn.parent().find('form').eq(0);if(force==='none'){if($el.length>0){$el.css('display','block');}else{$frmctn.parent().css('display','none');}}else{$el.css('display','none');$frmctn.css('display','block');$frmctn.parent().css('display','block');}}
break;}},closeFrm:function(mode,msg_id,parent_id){ccmu.dbg('closeFrm '+mode+', '+msg_id+', '+parent_id);var _abm=ccmBoxes.topic.abm,$frmctn=null;_abm.toggleEditor(mode,'none',msg_id,parent_id);_abm.toggleDisplay(mode,'block',msg_id,parent_id);$('#ivgaabtm').css('display','block');switch(mode){case'newa':$('#a0').remove();break;case'newc':$('#c0').remove();break;case'editc':case'editq':case'newq':case'edita':break;}
$frmctn=_abm.getFrmCtn(mode,msg_id,parent_id);$frmctn.html('');_abm.mode='';},isOkForEdit:function(mode,msg_id,parent_id){ccmu.dbg('isOkForEdit '+mode+', '+msg_id+', '+parent_id+' (old_mode='+this.mode+')');var _abm=ccmBoxes.topic.abm,selfMode=_abm.mode,selfCurMsgId=_abm.cur_msg_id,selfCurParentId=_abm.cur_parent_id,$frmctn=null;switch(mode){case'newa':case'newq':case'edita':case'editq':if(selfMode){if(selfMode===mode&&selfCurMsgId===msg_id){_abm.gotoEditor(mode,msg_id);return false;}
$frmctn=_abm.getFrmCtn(selfMode,selfCurMsgId,selfCurParentId);if($frmctn.length>0&&$frmctn.html()!==''){ccmu.dbg('autre saisie en cours');_abm.closeFrm(selfMode,selfCurMsgId,selfCurParentId);}}
_abm.mode=mode;_abm.cur_msg_id=msg_id;_abm.cur_parent_id=parent_id;return true;}
return true;},loadFrm:function(mode,msg_id,parent_id){ccmu.dbg('loadFrm '+mode+', '+msg_id+', '+parent_id);var _abm=ccmBoxes.topic.abm,$ctnfrm=_abm.getFrmCtn(mode,msg_id,parent_id),_url=((mode==='newc')||(mode==='editc'))?'shcmtfrm/':'shqafrm/',_ct=ccmBoxes.topic,_se='';if($ctnfrm.length===0||!mode||(mode.search(/^(new|edit)[qac]$/)===-1)){return;}
if(!_abm.isOkForEdit(mode,msg_id,parent_id)){return;}
_abm.gotoEditor(mode,msg_id);_abm.toggleOvlDisplay(mode,'block',msg_id,parent_id);_se=(_ct._is._cur_star)?'&stareval='+_ct._is._cur_star:'';_ct._is._cur_star=false;ccmu.dom.oldAjaxUpdater($ctnfrm[0],_ct.urls.prefix+_url,{method:'get',parameters:ccmBoxes.topic.getCommonPrms()+'&ID='+msg_id+'&mode='+mode+_se+'&redirectUrl='+encodeURIComponent(window.location.href.replace(window.location.origin,"")),evalScripts:true,onComplete:function(){_abm.toggleEditor(mode,'block',msg_id,parent_id);_abm.toggleOvlDisplay(mode,'none',msg_id,parent_id);if(mode.indexOf('edit')!==-1){_abm.toggleDisplay(mode,'none',msg_id,parent_id);}
_abm.finalizeEditor(mode,msg_id,parent_id);},onFailure:function(transport){_abm.toggleOvlDisplay(mode,'none',msg_id,parent_id);$ctnfrm.after('<div class="boxError">'+transport.responseText+'</div>');}});},submitFrm:function(mode,msg_id,parent_id,pview){pview=pview||false;ccmu.dbg('submitFrm '+mode+', '+msg_id+', '+parent_id+', '+pview);var $ctnfrm=ccmBoxes.topic.abm.getFrmCtn(mode,msg_id,parent_id),_key='',_ct=ccmBoxes.topic;if($ctnfrm.length===0||!mode||(mode.search(/^(new|edit)[qac]$/)===-1)){ccmu.dbg('submitFrm : error '+mode+'/'+msg_id+'/'+parent_id);return;}
_key=((mode==='newc')||(mode==='editc'))?mode+msg_id:mode+'qa';if(!_ct.topicfrms[_key]){_ct.topicfrms[_key]=new ccmBoxes.topicfrm();}
_ct.topicfrms[_key].init(mode,msg_id,parent_id);_ct.topicfrms[_key].submit(pview);},reloadOri:function(mode,msg_id,parent_id){ccmu.dbg('reloadOri '+mode+', '+msg_id+', '+parent_id);var _key=((mode==='newc')||(mode==='editc'))?mode+msg_id:mode+'qa',_ct=ccmBoxes.topic;if(!_ct.topicfrms[_key]||!_ct.topicfrms[_key]._pview){return;}
_ct.topicfrms[_key].init(mode,msg_id,parent_id);_ct.topicfrms[_key].reload();},toggleDisplay:function(mode,force,msg_id,parent_id){ccmu.dbg('toggleDisplay '+mode+', '+force+', '+msg_id+', '+parent_id);var $el=null;switch(mode){case'editq':case'newq':$el=$('#quesfullctn');break;case'editc':case'edita':$el=$('#d'+msg_id);break;}
if($el!==null&&$el.length>0){$el.css('display',(force?force:(($el.css('display')==='none')?'block':'none')));}},gotoEditor:function(mode){if(mode==="newa"){location.hash='#newanswer';}},finalizeEditor:function(mode,msg_id,parent_id){ccmu.dbg('finalizeEditor '+mode+', '+msg_id+', '+parent_id);var _abm=ccmBoxes.topic.abm,$frm=_abm.getFrm(mode,msg_id,parent_id),$message=$frm.find('textarea[name=message]'),_ct=ccmBoxes.topic,$el=null,_r;if(_ct._is.titlefocus&&$frm.length>0&&typeof $frm.prop('titre')!=='undefined'){$frm.prop('titre').focus();}else if($frm.length>0&&$message.length>0){if((mode==='editc')||(mode==='newc')){(new ccmu.dom.TaResize($message)).go();}
ccmBoxes.topic.initQafrmEvents($message);$message.focus();if((mode==='newa')||(mode==='newq')||(mode==='newc')){if($message[0].setSelectionRange){$message[0].setSelectionRange(0,0);}else if($message[0].createTextRange){_r=$message[0].createTextRange();_r.collapse(true);_r.moveEnd('character',0);_r.moveStart('character',0);_r.select();}}}
switch(mode){case'newa':(new ccmu.dom.fade($('#newanswer_ctn'),{from:_ct.colors.ok.fade_from,to:_ct.colors.ok.fade_to,w_return:true,final_reset:true})).go();$('#ivgaabtm').css('display','none');break;case'newc':$el=_abm.getFrmCtn(mode,msg_id,parent_id);if($el.length>0){$el=$el.parent();}
(new ccmu.dom.fade($el,{from:_ct.colors.ok.fade_from,to:_ct.colors.ok.fade_to,w_return:true,final_reset:true})).go();break;}},updateDisplay:function(mode,html,msg_id,parent_id,pview){ccmu.dbg('updateDisplay '+mode+', '+msg_id+', '+parent_id+',pview='+pview);switch(mode){case'newa':$('#a0').remove();$('#answers').append(html);break;case'newq':if(pview){$('#quesfullctn').html(html);}else{$('#topic_question').html(html);}
break;case'editq':$('#quesfullctn').html(html);break;case'newc':$('#c0').remove();$('#comments_'+parent_id).append(html);break;case'editc':case'edita':$('#d'+msg_id).html(html);break;}},gotoPview:function(mode,msg_id,parent_id){ccmu.dbg('gotoPview '+mode+', '+msg_id+', '+parent_id);switch(mode){case'newq':case'editq':location.hash='#breadScrumb';break;}},finalyseUpdate:function(mode,msg_id,parent_id,cat){ccmu.dbg('finalyseUpdate '+mode+', '+msg_id+', '+parent_id);var $el=null,_ct=ccmBoxes.topic;switch(mode){case'newa':case'edita':$el=$('#a'+msg_id);break;case'newq':_ct.question_id=msg_id;_ct.forum_id=cat;$('#ctn_0').attr('id','ctn_'+msg_id);$('#newanswer_0').attr('id','newanswer_'+msg_id);$('#content_ctn').removeClass('container');$el=$('#quesfullctn');if(ccmBoxes.boxes.myinterv){ccmBoxes.boxes.myinterv.reload();}
break;case'editq':$el=$('#quesfullctn');break;case'newc':case'editc':$el=$('#c'+msg_id);break;}
if($el!==null&&$el.length>0){(new ccmu.dom.fade($el,{from:_ct.colors.ok.fade_from,to:_ct.colors.ok.fade_to,w_return:true,final_reset:true})).go();}}},mod:{place:function(event){var $ctnfrm=$('#modo_div_new'),$ctn=$('#oasLayout'),_cpos=0;if(typeof event==='string'){_cpos=event.indexOf(',');if(_cpos>=0){$ctnfrm.css({top:event.substring(0,_cpos)+'px',left:($ctn.offset().left+parseInt(event.substring(_cpos+1),10))+'px'});}
else{$ctnfrm.css({left:($ctn.offset().left+$ctn.width()-331)+'px',top:event});}}else{$ctnfrm.css({top:((document.all)?event.clientY+document.documentElement.scrollTop:event.pageY)-27+'px',left:((document.all)?event.clientX+document.documentElement.scrollLeft:event.pageX)+18+'px'});}},load:function(msg_id,actid,callback,prms){var $ctnfrm=$('#modo_div_new'),_ct=ccmBoxes.topic,_frm,_prms;if($ctnfrm.length===0){return;}
_frm=$('#frmselactmod')[0];_prms=(_frm)?ccmu.frm.frm2qs(_frm)+_ct.uforum.get_prms:ccmBoxes.topic.getCommonPrms()+'&ID='+msg_id+'&actid='+actid;if(prms){_prms+='&'+prms;}
ccmBoxes.topic.mod.toggleOvl($ctnfrm);$.ajax({url:_ct.urls.prefix+'shmodomenu/',data:_prms,type:'GET',success:function(data){ccmBoxes.topic.mod.toggleOvl($ctnfrm);$ctnfrm.html(data);ccmBoxes.topic.initModoEvents();if(actid==='solve'||actid==='addmyi'){ccmBoxes.topic.mod.submit(msg_id);}
typeof callback==="function"&&callback();},error:function(data){ccmBoxes.topic.mod.toggleOvl($ctnfrm);$ctnfrm.after('<div class="boxError">'+data.responseText+'</div>');}});},forceShow:function(msgId,actId)
{actId=actId||'signal';msgId=parseInt(msgId,10);var offset=$('a[name=p'+msgId+']').offset(),ok=offset!==undefined;ok&&this.place(offset.top+'px');$('#modo_div_new').html('&nbsp;').show();this.load(msgId,actId,function(){ccmBoxes.topic._is.cim=msgId;ok&&$('html, body').animate({scrollTop:offset.top,scrollLeft:offset.left});});},submit:function(){var $ctnfrm=$('#modo_div_new'),$frm=$('#frmactmod'),$modmsg=$("#modmsg"),_ct=ccmBoxes.topic;if($ctnfrm.length===0||$frm.length===0){return;}
ccmBoxes.topic.mod.toggleOvl($ctnfrm);$.ajax({url:_ct.urls.pmm,data:ccmu.frm.frm2qs($frm)+_ct.uforum.get_prms,type:'POST',success:function(data){ccmBoxes.topic.mod.toggleOvl($ctnfrm);var dataOk=ccmBoxes.topic.checkJson(data,$modmsg);if(!dataOk){return;}
ccmBoxes.topic.triggerOkInEl($modmsg,data.msg);ccmBoxes.topic.reloadTopic.call(_ct);if(data.act==='addmyi'&&_ct.myinterv){_ct.myinterv.reload();}
setTimeout(function(){$ctnfrm.html('&nbsp;').hide();},1000);},error:function(data){ccmBoxes.topic.mod.toggleOvl($ctnfrm);ccmBoxes.topic.triggerErrorInEl($modmsg,data.responseText);}});},toggleOvl:function($ctn){var $el=$('#modo_ovl');if($el.length===0){$el=$('<div id="modo_ovl" class="overlayDiv waiting" style="display:none"></div>');$ctn.after($el);}
$el.toggle();}}};})(jQuery);(function($)
{"use strict";ccmBoxes.topicfrm=function(){return this;};ccmBoxes.topicfrm.prototype={msg_id:0,parent_id:0,mode:'',elts:{frm:null},_pview:false,init:function(mode,msg_id,parent_id){this.msg_id=msg_id;this.parent_id=parent_id;this.elts.frm=ccmBoxes.topic.abm.getFrm(mode,msg_id,parent_id)[0];this.mode=mode;return self;},submit:function(pview){pview=pview||false;var _ct=ccmBoxes.topic,_abm=ccmBoxes.topic.abm,self=this;_abm.toggleOvlFrm(this.mode,'block',this.msg_id,this.parent_id);if(this._fields_error){for(var i=0;i<this._fields_error.length;i++){$(this._fields_error[i]).removeClass('wrong');}}
$.ajax({url:_ct.urls.prefix+'postmsgfrm/',data:ccmu.frm.frm2qs(this.elts.frm)+(pview?'&pview=1':'')+_ct.uforum.get_prms,type:'POST',success:function(data){if(pview){self._pview=true;}
_abm.toggleOvlFrm(self.mode,'none',self.msg_id,self.parent_id);self.callbackOnSubmit(data,pview);$('#qdispctn .fancy').fancybox();},error:function(data){_abm.toggleOvlFrm(self.mode,'none',self.msg_id,self.parent_id);self.triggerError(data.responseText);}});return false;},reload:function(){var _ct=ccmBoxes.topic,_abm=ccmBoxes.topic.abm,self=this;$.ajax({url:_ct.urls.prefix+'shmsg/',data:ccmu.frm.frm2qs(this.elts.frm)+_ct.uforum.get_prms,type:'POST',success:function(data){_abm.toggleOvlFrm(self.mode,'none',self.msg_id,self.parent_id);ccmBoxes.topicfrm.prototype.callbackOnSubmit(data,false);},error:function(data){_abm.toggleOvlFrm(self.mode,'none',self.msg_id,self.parent_id);this.triggerError(data.responseText);}});return false;},callbackOnSubmit:function(data,pview)
{var _s='',_key=null,_mode=data.mode,_msgs=data.msgs,_url=data.url,_html=data.html,_id=data.ID,_parentId=this.parent_id,_abm=ccmBoxes.topic.abm;$('#m'+this.mode+this.msg_id).css('display','none');if(data.res===false){this._fields_error=[];if(_msgs){for(var i=0;i<_msgs.length;i++){_key=_msgs[i][0];_s+='<li>'+((_msgs[i]instanceof Array)?_msgs[i][1]:_msgs[i])+'</li>';if(!this.elts.frm[_key]){continue;}
this._fields_error.push(this.elts.frm[_key]);$(this.elts.frm[_key]).addClass('wrong');}}
_s=(_s==='')?data.msg:'<ul class="disc">'+_s+'</ul>';this.triggerError(_s);return false;}
if(!pview){if(!_html||(_html==='')){window.location.href=window.location.href.replace(/#.*$/g,'')+'#p'+_id;}
if(_mode==='newq'&&_url){window.location.href=_url;return true;}
_abm.updateDisplay(_mode,_html,_id,_parentId,pview);_abm.closeFrm(_mode,_id,_parentId);_abm.finalyseUpdate(_mode,_id,_parentId,data.cat);}else{_abm.updateDisplay(_mode,_html,_id,_parentId,pview);_abm.toggleDisplay(_mode,'block',_id,_parentId);_abm.gotoPview(_mode,_id,_parentId);}
return true;},triggerError:function(msg,exception){var _id='m'+this.mode+this.msg_id,_ctnfrm=this.elts.frm,_s=msg+(exception?' ('+exception.message+')':''),$el=$("#"+_id);if($el.length===0){$el=$("<div id="+_id+"></div>");if(_ctnfrm){$el.insertBefore(_ctnfrm);}else{$el.appendTo(_ctnfrm);}}
ccmBoxes.topic.triggerErrorInEl($el,_s);}};ccmu.dom.fade=function($el,opt)
{this.$el=$el||null;opt=opt||{};for(var i in this.opt){if(opt[i]!==undefined){this.opt[i]=opt[i];}}
var ie=!!(window.attachEvent&&!window.opera);if(ie){this.opt.duration=50;this.opt.steps=1;}
return this;};ccmu.dom.fade.prototype={opt:{duration:300,steps:10,w_return:true,final_reset:true,from:['E3','EB','F5'],to:['AE','B5','BD']},$el:null,hex:new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"),timer:null,_intv:0,_curstep:0,sbc:[0,0,0],d2h:function(num){return(num<0)?'00':((num>255)?'FF':""+this.hex[Math.floor(num/16)]+this.hex[num%16]);},go:function(){var curFade=ccmu._curfade,opt=this.opt;if(this.$el===null||this.$el.length===0){return;}
if(curFade){curFade._curstep=curFade.opt.steps+1;curFade.opt.w_return=false;curFade.fade.call(curFade);}
ccmu._curfade=this;this._intv=Math.ceil(opt.duration/opt.steps);for(var i=0;i<3;i++){if(typeof opt.to[i]==='string'){opt.to[i]=parseInt(opt.to[i],16);}
if(typeof opt.from[i]==='string'){opt.from[i]=parseInt(opt.from[i],16);}
this.sbc[i]=(opt.to[i]-opt.from[i])/opt.steps;}
this._curstep=0;this.fade();return;},fade:function(){var self=this,c=[],opt=this.opt,curStep=this._curstep,_tmp=null;if(curStep>opt.steps){clearTimeout(this.timer);this.timer=null;if(opt.w_return===true){_tmp=opt.to;opt.to=opt.from;opt.from=_tmp;this._intv=null;opt.w_return=false;this.go();return false;}
if(opt.final_reset===true){this.$el.css({backgroundColor:'',backgroundImage:'',backgroundPosition:'',backgroundRepeat:'',backgroundAttachment:''});}
ccmu._curfade=null;return false;}
c=[0,0,0];if(curStep===this._intv){c=opt.to;}else{for(var i=0;i<3;i++){c[i]=opt.from[i]+Math.round(this.sbc[i]*curStep);}}
this.setBgColor(c);this._curstep++;this.timer=setTimeout(function(){self.fade.call(self);},self._intv);return false;},setBgColor:function(c){this.$el.css('background',('#'+this.d2h(c[0])+this.d2h(c[1])+this.d2h(c[2])));}};ccmu.dom.scroll={opt:{re_display_sibling:/^c(\d+)$/,fade_on_found:true},$el:null,$target:null,_anchor:'',findTarget:function(){var _links=$('a'),i=0;this._anchor=(this.$el.prop("hash").length>0)?this.$el.prop("hash").substr(1):null;this.$target=null;if(this._anchor){for(i;i<_links.length;i++){if(_links[i].name&&(_links[i].name===this._anchor)){this.$target=$(_links[i]);break;}}}
return(this.$target!==null);},forceDisplay:function($el){var _do=false,_par=null;while($el.length>0&&($el[0]!==document.body)){_do=false;if($el.css('display')==='none'){$el.css('display','');_do=true;}
if($el.css('visibility')==='hidden'){$el.css('visibility','');_do=true;}
if(_do&&$el.attr("id").length>0&&this.opt.re_display_sibling.test($el.attr("id"))){_par=$el.parent().first();while(_par.length>0&&$el.prop("tagName")!=='DIV'){_par=_par.next();}
while(_par.length>0){if(_par.attr("id")&&this.opt.re_display_sibling.test(_par.attr("id"))){if(_par.css('display')==='none'){_par.css('display','');}
if(_par.css('visibility')==='hidden'){_par.css('visibility','');}}
_par=_par.next();while(_par.length>0&&$el.prop("tagName")!=='DIV'){_par=_par.next();}}}
$el=$el.parent();}},go:function($el,opt){this.$el=$el||null;opt=opt||{};for(var i in this.opt){if(opt[i]!==undefined){this.opt[i]=opt[i];}}
if(!this.findTarget()){ccmu.dbg('tgt '+this._anchor+' not found');return true;}
this.forceDisplay(this.$target);location.hash=this._anchor;this.fadeTgt();return false;},fadeTgt:function(){if(!this.opt.fade_on_found||!this.$target.parent()){return;}
var _ctc=ccmBoxes.topic.colors;(new ccmu.dom.fade(this.$target.parent(),{from:_ctc.err.fade_from,to:_ctc.ok.fade_anchor,duration:200,steps:5,w_return:true,final_reset:true})).go();}};ccmu.dom.TaResize=function($el){if($el.length>0){this.$el=$el.css({resize:'none',overflowY:'hidden'});this._ori_height=parseInt(this.$el.css('height'),10)||0;var self=this,_p=['height','width','lineHeight','textDecoration','letterSpacing'];this.$cl=$("<textarea></textarea>").css({position:'absolute',top:0,left:'-9999px',tabIndex:-1});for(var i in _p){this.$cl.css(_p[i],this.$el.css(_p[i]));}
this.$cl.insertBefore(this.$el);ccmu.evt.on(this.$el[0],'keyup',function(){self.go.call(self);});ccmu.evt.on(this.$el[0],'click',function(){self.go.call(self);});}
return this;};ccmu.dom.TaResize.prototype={$el:null,max:900,_ori_height:0,_last_st:0,$cl:null,go:function(){this.$cl.css('height',0);this.$cl.val(this.$el.val());this.$cl.scrollTop(10000);var _st=Math.max(this.$cl.scrollTop(),this._ori_height)+22;if(this._last_st===_st){return;}
if(this.max&&(_st>this.max)){this.$el.css({height:this.max+'px',overflowY:''});return;}
this._last_st=_st;this.$el.css('height',_st+'px');}};})(jQuery);if(typeof _comscore=="undefined"){var _comscore=_comscore||[];try{if($ccmprms&&$ccmprms.user&&($ccmprms.user.connected===false)&&!($ccmprms.app&&($ccmprms.app.is_portable===true))){_comscore.push({c1:"2",c2:"13184767"});(function(){var s=document.createElement("script"),el=document.getElementsByTagName("script")[0];s.async=true;s.src=(document.location.protocol=="https:"?"https://sb":"http://b")+".scorecardresearch.com/beacon.js";el.parentNode.insertBefore(s,el);})();}}catch(e){}}(function($){'use strict';$.fn.loginMigration=function(options){var $this=$(this);options=$.extend(true,{},$.fn.loginMigration.defaultOptions,options);$.ajax({type:'POST',dataType:'json',url:options.urlToGetDataForLoginMigration,data:{email:$this.find('input[name="login"]').val()},success:function(data){$this.removeAttr('onsubmit');if(typeof data.mode!=='undefined'&&data.mode==='auth'){$this.attr('action',data.loginUrl);$this.find('input[name="pass"]').attr('name','password');$this.append($('<input type="hidden" name="response_type" value="code"/>'));$this.append($('<input type="hidden" name="client_id" value="'+data.authData.clientId+'"/>'));$this.append($('<input type="hidden" name="redirect_uri" value="'+data.authData.redirectUri+'"/>'));$this.append($('<input type="hidden" name="redirect_fail" value="'+data.authData.redirect_fail+'"/>'));$this.append($('<input type="hidden" name="state" value="'+data.authData.state+'"/>'));}else{$this.append($('<input type="hidden" name="log_in" value=""/>'));}
$this.submit();}});return false;};})(jQuery);(function($)
{'use strict';$.fn.stick=function(options)
{options=$.extend({},$.fn.stick.defaultOptions,options);return this.each(function()
{var sticker=$(this),stickerPosition=null,stopStick=false,isSticked=false,optStickTo=sticker.data('stickto'),optStickPadding=sticker.data('stickpadding')||0,container=typeof optStickTo!=='undefined'?$(sticker.data('stickto')):sticker.parent(),windowPos=$(window).scrollTop(),offset=optStickPadding,STATES={containerTooSmall:0,atBottom:1,sticked:2,atTop:3},currentState=null,getPositionState=function(additionalOffset)
{additionalOffset=additionalOffset||0;var	stickerBottom=stickerPosition.top+sticker.height(),containerBottom=container.offset().top+container.height(),cssPosition=sticker.css('position'),testedOffset=offset+additionalOffset;if(containerBottom<=stickerBottom)
{return STATES.containerTooSmall;}
else if(windowPos>=(stickerPosition.top-testedOffset))
{if(windowPos>(containerBottom-sticker.height()-(testedOffset*2)))
{return cssPosition!=='absolute'?STATES.atBottom:currentState;}
else if(cssPosition!=='fixed')
{return STATES.sticked;}
else
{return currentState;}}
else if(cssPosition!=='relative'&&cssPosition!=='')
{return STATES.atTop;}
else
{return currentState;}};this.setAttribute('data-stickenable',true);var handleAdsDockEvents=function(e)
{if(e.type==='ads.top.docked'){offset+=e.detail.nodeHeight;}
else if(e.type==='ads.top.undocked'){offset-=e.detail.nodeHeight;}
if(isSticked)
{sticker.css({transition:(parseInt(e.detail.delay,10)||0)+'ms ease-in-out',top:offset+'px'});sticker.one('transitionend',function(){sticker.css({transition:''});});}};window.addEventListener("ads.top.docked",handleAdsDockEvents);window.addEventListener("ads.top.undocked",handleAdsDockEvents);if(container.length){sticker.css({'max-width':sticker.width(),width:'100%'});$(window).on('scroll touchmove',function(){if(stopStick===true){return;}
var newWindowPos=$(window).scrollTop();if(windowPos===newWindowPos){return;}
windowPos=newWindowPos;if(stickerPosition===null){stickerPosition=sticker.offset();}
var newState=getPositionState();if(currentState===newState)
{return;}
currentState=newState;switch(currentState){case STATES.containerTooSmall:stopStick=true;isSticked=false;sticker.css({position:'',top:''});break;case STATES.atBottom:isSticked=false;sticker.css({position:'absolute',top:'',bottom:offset+'px'});break;case STATES.sticked:isSticked=true;sticker.css({position:'fixed',top:offset+'px',bottom:''});break;case STATES.atTop:isSticked=false;sticker.css({position:'',top:''});stickerPosition=sticker.offset();break;}});}
this.isSticked=function(additionalOffset)
{return getPositionState(additionalOffset)===STATES.sticked;};});};$.fn.stick.defaultOptions={};}(jQuery));