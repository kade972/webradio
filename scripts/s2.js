$(document).ready(function(){function e(){var e="http://adventlife.fr:2199/start/adventlife/";$.ajax({url:e,type:"get",cache:!1,dataType:"jsonp",crossDomain:!0,asynchronous:!1,jsonpCallback:"deadCode",timeout:3500,complete:function(e){"200"==e.status?(n=!0,t()):(n=!1,t())}})}function t(){if(n)var e={title:"AdventLife Radio",mp3:"http://www.adventlife.fr:7777/stream"},t=!1;else var e={title:"AdventLife Radio",mp3:"http://www.adventlife.fr/radio1.mp3"},t=!1;$("#jquery_jplayer_1").jPlayer({swfPath:"scripts/",ready:function(){$(this).jPlayer("setMedia",e).jPlayer("play")},pause:function(){$(this).jPlayer("clearMedia"),$(this).jPlayer("setMedia",e)},error:function(a){t&&a.jPlayer.error.type===$.jPlayer.error.URL_NOT_SET&&$(this).jPlayer("setMedia",e).jPlayer("play")},supplied:"mp3",solution:"html, flash",supplied:"mp3",preload:"none",wmode:"window"})}function a(){$("#list-dedi").load("load-dedi.php",function(){i(),$("#list-dedi").mCustomScrollbar({scrollButtons:{enable:!0}}),l()})}function r(){$("#all-actu").load("actu-replay.php",function(){$("#bt-play-actu1").click(function(t){if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))if(alert("Vous êtes sur Tablette/Mobile le lien s'ouvrira dans une nouvelle fenêtre !"),t.preventDefault(),0==o){e=0,$("#bt-play-actu2 a").css("background",'url("../adventradio/images/bt-play-actu.png") center center no-repeat'),o=1,$("#bt-play-actu1 a").css("background",'url("../adventradio/images/bt-stop-actu.gif") center center no-repeat'),$("#jquery_jplayer_1").jPlayer("stop");var a=$("#bt-play-actu1 a").attr("href");window.open(a)}else{o=0,clearTimeout(timer_reload);var i=setInterval(function(){r()},6e5);$("#bt-play-actu1 a").css("background",'url("../adventradio/images/bt-play-actu.png") center center no-repeat'),$("#jquery_jplayer_1").jPlayer("play");var a=$("#bt-play-actu1 a").attr("href")}else if(t.preventDefault(),0==o){e=0,$("#bt-play-actu2 a").css("background",'url("../adventradio/images/bt-play-actu.png") center center no-repeat'),o=1,$("#bt-play-actu1 a").css("background",'url("../adventradio/images/bt-stop-actu.gif") center center no-repeat'),$("#jquery_jplayer_1").jPlayer("stop");var a=$("#bt-play-actu1 a").attr("href"),l=$("#bt-play-actu1 a").attr("data-timing");clearInterval(i);var n=6e4*Math.floor(l),s=l-Math.floor(l);s=Math.round(100*s)/100,s=s.toString();var s=100*s;n+=1e3*s,timer_reload=setTimeout(function(){window.location.reload()},n),$("#musicbox").replaceWith(function(){return $("<iframe id='musicbox' width='1' height='1' src='"+a+"'></iframe>")}),$("#musicbox2").replaceWith(function(){return $('<div id="musicbox2"></div>')})}else{o=0,clearTimeout(timer_reload);var i=setInterval(function(){r()},6e5);$("#bt-play-actu1 a").css("background",'url("../adventradio/images/bt-play-actu.png") center center no-repeat'),$("#jquery_jplayer_1").jPlayer("play");var a=$("#bt-play-actu1 a").attr("href");$("#musicbox").replaceWith(function(){return $('<div id="musicbox"></div>')})}});var e=0;$("#bt-play-actu2").click(function(t){if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))if(alert("Vous êtes sur Tablette/Mobile le lien s'ouvrira dans une nouvelle fenêtre !"),t.preventDefault(),0==o){e=0,$("#bt-play-actu1 a").css("background",'url("../adventradio/images/bt-play-actu.png") center center no-repeat'),o=1,$("#bt-play-actu2 a").css("background",'url("../adventradio/images/bt-stop-actu.gif") center center no-repeat'),$("#jquery_jplayer_1").jPlayer("stop");var a=$("#bt-play-actu2 a").attr("href");window.open(a)}else{o=0,clearTimeout(timer_reload);var i=setInterval(function(){r()},6e5);$("#bt-play-actu2 a").css("background",'url("../adventradio/images/bt-play-actu.png") center center no-repeat'),$("#jquery_jplayer_1").jPlayer("play");var a=$("#bt-play-actu2 a").attr("href")}else if(t.preventDefault(),0==e){o=0,$("#bt-play-actu1 a").css("background",'url("../adventradio/images/bt-play-actu.png") center center no-repeat'),e=1,$("#bt-play-actu2 a").css("background",'url("../adventradio/images/bt-stop-actu.gif") center center no-repeat'),$("#jquery_jplayer_1").jPlayer("stop");var a=$("#bt-play-actu2 a").attr("href"),l=$("#bt-play-actu2 a").attr("data-timing"),n=6e4*Math.floor(l);clearInterval(i);var s=l-Math.floor(l);s=Math.round(100*s)/100,s=s.toString();var s=100*s;n+=1e3*s,timer_reload=setTimeout(function(){window.location.reload()},n),$("#musicbox2").replaceWith(function(){return $("<iframe id='musicbox2' width='1' height='1' src='"+a+"'></iframe>")}),$("#musicbox").replaceWith(function(){return $('<div id="musicbox"></div>')})}else{e=0,clearTimeout(timer_reload);var i=setInterval(function(){r()},6e5);$("#bt-play-actu2 a").css("background",'url("../adventradio/images/bt-play-actu.png") center center no-repeat'),$("#jquery_jplayer_1").jPlayer("play");var a=$("#bt-play-actu2 a").attr("href");$("#musicbox2").replaceWith(function(){return $('<div id="musicbox2"></div>')})}})})}function i(){var e="ontouchstart"in document.documentElement;e||$(".dedi-like , .temoignage-like , .priere-like").hover(function(){$(this).find(".txt-vote").show()},function(){$(this).find(".txt-vote").hide()}),$(".dedi-like").click(function(){var e=this.id,t="id_vote="+e;$.ajax({type:"POST",url:"vote.php",data:t,success:function(){var t=$("#"+e).find("span"),a=parseInt(t.text());$("#"+e).parent().addClass("dedi-voted"),t.text(a+1)}})}),$(".temoignage-like").click(function(){var e=this.id,t="id_vote="+e;$.ajax({type:"POST",url:"vote.php",data:t,success:function(){var t=$("#"+e).find("span"),a=parseInt(t.text());$("#"+e).parent().addClass("temoignage-voted"),t.text(a+1)}})}),$(".priere-like").click(function(){var e=this.id,t="id_vote="+e;$.ajax({type:"POST",url:"vote.php",data:t,success:function(){var t=$("#"+e).find("span"),a=parseInt(t.text());$("#"+e).parent().addClass("priere-voted"),t.text(a+1)}})})}function l(){$(".dedi-mess").truncatable({limit:100,more:"... Lire la suite ",less:!0,hideText:" FERMER "})}var n=null;e(),$("#jquery_jplayer_1").bind($.jPlayer.event.playing,function(){$("ul.jp-controls li#loading").css("display","none"),$("#eq").css("display","block")}),$("#jquery_jplayer_1").bind($.jPlayer.event.ready,function(){$("ul.jp-controls li#loading").css("display","inline-block")}),$("#jquery_jplayer_1").bind($.jPlayer.event.pause,function(){$("#eq").css("display","none")}),$("#radioright li").click(function(){$(this).addClass("active-pl").siblings().removeClass("active-pl")}),$(".style-all").click(function(){if($("#jquery_jplayer_1").jPlayer("destroy"),style="all",n)var e={title:"AdventLife Radio",mp3:"http://www.adventlife.fr:7777/stream"},t=!1;else var e={title:"AdventLife Radio",mp3:"http://www.adventlife.fr/radio1.mp3"},t=!1;$("#jquery_jplayer_1").jPlayer({swfPath:"scripts/",ready:function(){$(this).jPlayer("setMedia",e).jPlayer("play")},error:function(a){t&&a.jPlayer.error.type===$.jPlayer.error.URL_NOT_SET&&$(this).jPlayer("setMedia",e).jPlayer("play")},supplied:"mp3",solution:"html, flash",supplied:"mp3",preload:"none",wmode:"window"}),$("#txt-tiltle span").attr("id","cc_strinfo_tracktitle_adventlife"),$("#txt-artist span").attr("id","cc_strinfo_trackartist_adventlife"),$.getScript("http://www.adventlife.fr/streaminfo.js"),$("#player-container").css("background","url(images/bg-photo-1.jpg) no-repeat"),$("#title-dedicace a").css("background-color","#185383"),$("#title-dedicace a:hover").css("background-color","#e9700b")}),$(".style-ador").click(function(){if($("#jquery_jplayer_1").jPlayer("destroy"),style="adoration",n)var e={title:"AdventLife Radio",mp3:"http://www.adventlife.fr:7778/stream"},t=!1;else var e={title:"AdventLife Radio",mp3:"http://www.adventlife.fr/radio2.mp3"},t=!1;$("#jquery_jplayer_1").jPlayer({swfPath:"scripts/",ready:function(){$(this).jPlayer("setMedia",e).jPlayer("play")},error:function(a){t&&a.jPlayer.error.type===$.jPlayer.error.URL_NOT_SET&&$(this).jPlayer("setMedia",e).jPlayer("play")},supplied:"mp3",solution:"html, flash",supplied:"mp3",preload:"none",wmode:"window"}),$("#txt-tiltle span").attr("id","cc_strinfo_tracktitle_adoration"),$("#txt-artist span").attr("id","cc_strinfo_trackartist_adoration"),$.getScript("http://www.adventlife.fr/streaminfo.js"),$("#player-container").css("background","url(images/bg-photo-2.jpg) no-repeat"),$("#title-dedicace a").css("background","#2095c6")}),$(".style-french").click(function(){if($("#jquery_jplayer_1").jPlayer("destroy"),style="all",n)var e={title:"AdventLife Radio",mp3:"http://www.adventlife.fr:7779/stream"},t=!1;else var e={title:"AdventLife Radio",mp3:"http://www.adventlife.fr/radio3.mp3"},t=!1;$("#jquery_jplayer_1").jPlayer({swfPath:"scripts/",ready:function(){$(this).jPlayer("setMedia",e).jPlayer("play")},error:function(a){t&&a.jPlayer.error.type===$.jPlayer.error.URL_NOT_SET&&$(this).jPlayer("setMedia",e).jPlayer("play")},supplied:"mp3",solution:"html, flash",supplied:"mp3",preload:"none",wmode:"window"}),$("#txt-tiltle span").attr("id","cc_strinfo_tracktitle_souvenir"),$("#txt-artist span").attr("id","cc_strinfo_trackartist_souvenir"),$.getScript("http://www.adventlife.fr/streaminfo.js"),$("#player-container").css("background","url(images/bg-photo-3.jpg) no-repeat"),$("#title-dedicace a").css("background","#084271")}),$(".style-english").click(function(){if($("#jquery_jplayer_1").jPlayer("destroy"),style="all",n)var e={title:"AdventLife Radio",mp3:"http://www.adventlife.fr:7780/stream"},t=!1;else var e={title:"AdventLife Radio",mp3:"http://www.adventlife.fr/radio4.mp3"},t=!1;$("#jquery_jplayer_1").jPlayer({swfPath:"scripts/",ready:function(){$(this).jPlayer("setMedia",e).jPlayer("play")},error:function(a){t&&a.jPlayer.error.type===$.jPlayer.error.URL_NOT_SET&&$(this).jPlayer("setMedia",e).jPlayer("play")},supplied:"mp3",solution:"html, flash",supplied:"mp3",preload:"none",wmode:"window"}),$("#txt-tiltle span").attr("id","cc_strinfo_tracktitle_gospel"),$("#txt-artist span").attr("id","cc_strinfo_trackartist_gospel"),$.getScript("http://www.adventlife.fr/streaminfo.js"),$("#player-container").css("background","url(images/bg-photo-4.jpg) no-repeat"),$("#title-dedicace a").css("background","#f5ab21")}),$(".style-instru").click(function(){if($("#jquery_jplayer_1").jPlayer("destroy"),style="instrumental",n)var e={title:"AdventLife Radio",mp3:"http://www.adventlife.fr:7781/stream"},t=!1;else var e={title:"AdventLife Radio",mp3:"http://www.adventlife.fr/radio5.mp3"},t=!1;$("#jquery_jplayer_1").jPlayer({swfPath:"scripts/",ready:function(){$(this).jPlayer("setMedia",e).jPlayer("play")},error:function(a){t&&a.jPlayer.error.type===$.jPlayer.error.URL_NOT_SET&&$(this).jPlayer("setMedia",e).jPlayer("play")},supplied:"mp3",solution:"html, flash",supplied:"mp3",preload:"none",wmode:"window"}),$("#txt-tiltle span").attr("id","cc_strinfo_tracktitle_instrumental"),$("#txt-artist span").attr("id","cc_strinfo_trackartist_instrumental"),$.getScript("http://www.adventlife.fr/streaminfo.js"),$("#player-container").css("background","url(images/bg-photo-5.jpg) no-repeat"),$("#title-dedicace a").css("background","#e26f30")}),$("#player-container").mousemove(function(e){var t=-1*e.pageX/55.55,a=-1*e.pageY/30.55;$(this).css("background-position",t+"px "+a+"px")}),$("body").mousemove(function(e){var t=-1*e.pageX/70,a=-1*e.pageY/60;$(this).css("background-position",t+"px "+a+"px")}),a();var o=0;r(),setInterval(function(){a()},6e5);setInterval(function(){r()},3e5);setInterval(function(){$.getScript("http://www.adventlife.fr/streaminfo.js")},1e4),$("#title-dedicace").click(function(){$("#bg-lightbox").show(),$("#lightbox").show(),$("#song").val($("#txt-tiltle").text()+" - "+$("#txt-artist").text())}),$("#bg-lightbox").click(function(){$("#bg-lightbox").hide(),$("#lightbox").hide(),$("#lightbox-help").hide()}),$("#lightbox").click(function(e){e.stopPropagation()}),$(".submit").click(function(){var e=$("#nom_from").val(),t=$("#ville_from").val(),r=$("#nom_for").val(),i=$("#ville_for").val(),l=$("#email_from").val(),n=$("#email_for").val(),o=$("#song").val(),s=$("#message").val(),c=$("#type").val(),d="nom_from="+e+"&ville_from="+t+"&nom_for="+r+"&ville_for="+i+"&email_from="+l+"&email_for="+n+"&song="+o+"&message="+s+"&type="+c;return"1"==c&&""==e||"1"==c&&""==t||"1"==c&&""==l||"1"==c&&""==n?($(".success").fadeOut(200).hide(),$(".error").fadeIn(200).show()):c>"1"&&""==e||c>"1"&&""==t?($(".success").fadeOut(200).hide(),$(".error").fadeIn(200).show()):$.ajax({type:"POST",url:"join.php",data:d,success:function(){$(".success").fadeIn(200).show(),$(".error").fadeOut(200).hide(),$("input:text").val(""),$("textarea:text").val(""),$("#bg-lightbox").hide(),$("#lightbox").hide(),a()}}),!1}),$("#type").change(function(){"1"==$("#type").val()?$(".not-dedi").show():$(".not-dedi").hide()}),$("#help").click(function(){$("#bg-lightbox").show(),$("#lightbox-help").show()})});