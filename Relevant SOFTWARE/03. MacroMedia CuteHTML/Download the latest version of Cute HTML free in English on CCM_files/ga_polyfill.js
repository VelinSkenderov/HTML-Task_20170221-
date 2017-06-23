
var GAPolyfill={actionsRE:/^([\w\d_-]+)?\.?(_track(Event|Pageview)|_set(CustomVar|Account))$/,buffer:[],isReady:false,ready:function()
{GAPolyfill.isReady=true;for(var i=0,l=GAPolyfill.buffer.length;i<l;++i)
{window[window.GoogleAnalyticsObject].apply(window,GAPolyfill.buffer[i]);}},converters:{_setAccount:function(args,namespace)
{return['create'].concat(args,namespace?{name:namespace}:[]);},_setCustomVar:function(args)
{return['set','dimension'+args[0],args[2]];},_trackPageview:function(args)
{return['send','pageview'].concat(args);},_trackEvent:function(args)
{if(typeof args[4]==='boolean'&&args[4])
{args[4]={nonInteraction:true};}
return['send','event'].concat(args);}},convertArgs:function(args)
{var match=args[0].match(this.actionsRE);if(!match){return null;}
var converter=this.converters[match[2]];if(typeof converter==='undefined'){return null;}
args.shift();return converter.apply(null,[args,match[1]]);}};_gaq.push=function(args)
{args=GAPolyfill.convertArgs(args);if(args!==null)
{if(!GAPolyfill.isReady)
{GAPolyfill.buffer.push(args);}
else
{window[window.GoogleAnalyticsObject].apply(window[window.GoogleAnalyticsObject],args);}}};ga(GAPolyfill.ready);(function()
{for(var i=0,l=_gaq.length;i<l;++i)
{_gaq.push(_gaq.shift());}}());