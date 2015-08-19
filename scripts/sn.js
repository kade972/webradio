$(document).ready(function() {
			//test underFirewall
			var isAccessible=null;
				function checkConnection() {
					var url="http://adventlife.fr:2199/start/adventlife/" ;
					$.ajax({
						url: url,
						type: "get",
						cache: false,
						dataType: 'jsonp', // for supporting crossdomain
						crossDomain : true,
						asynchronous : false,
						jsonpCallback: 'deadCode',
						timeout : 3500, // milliseconds
						complete : function(xhr, responseText, thrownError) {
							if(xhr.status == "200") {
							   isAccessible = true;
							   goRadio();
							}
							else {
							   isAccessible = false; 
							   goRadio(); 
							}
						}
				   });
				} 
			
			checkConnection();

		
		//hide component
		
 		$("ul.jp-controls li#loading").css('display','none');
        $(".jp-pause").css('display','none');
        $(".jp-mute").css('display','none');
        $(".jp-unmute").css('display','none');
        $(".jp-stop").css('display','none');
        $(".jp-no-solution").css('display','none');
    
    
    
    
        $("#eq").css('display','block');	 
								 
		
	
		
		
		$("ul.jp-controls li#loading").css('display','inline-block');
		
		setTimeout(function() { 
 							 $("ul.jp-controls li#loading").css('display','none');
					
		},8000);
		
		 
	
			
			
		 
		
		function goRadio() {
            //first load
            
                $("#musicbox").replaceWith(function(){
                return $("<iframe width='1' height='1' src='http://www.adventlife.fr:7777/stream'></iframe>");
			
		  });
        };
		
		
		
		
		$('#radioright li').click(function(){
								$(this).addClass('active-pl').siblings().removeClass('active-pl');
								//go adoration flux
		});
		
		//GESTION DES CLICKS
		
		$('.style-all').click(function(){
								$("#musicbox").replaceWith(function(){
               					return $("<iframe width='1' height='1' src='http://www.adventlife.fr:7777/stream'></iframe>");
								});
								
								//change id title/artiste
								$("#txt-tiltle span").attr('id','cc_strinfo_tracktitle_adventlife');
								$("#txt-artist span").attr('id','cc_strinfo_trackartist_adventlife');
								//reload info
								$.getScript( "http://www.adventlife.fr/streaminfo.js" );
								$("#player-container").css('background','url(images/bg-photo-1.jpg) no-repeat');
								$("#title-dedicace a").css('background-color','#30ad3a');
								$("#title-dedicace a:hover").css('background-color','#39b743');
								

								
								//$("#logo-small").css('background-color','#36A290');
		
		});
		
		$('.style-ador').click(function(){
								$("#musicbox").replaceWith(function(){
                return $("<iframe width='1' height='1' src='http://www.adventlife.fr:7778/stream'></iframe>");
				});
				
								//change id title/artiste
								$("#txt-tiltle span").attr('id','cc_strinfo_tracktitle_adoration');
								$("#txt-artist span").attr('id','cc_strinfo_trackartist_adoration');
								//reload info
								$.getScript( "http://www.adventlife.fr/streaminfo.js" );
								$("#player-container").css('background','url(images/bg-photo-2.jpg) no-repeat');
								$("#title-dedicace a").css('background','#2095c6');
								
								
								
		
		});
		
		
		$('.style-french').click(function(){
								$("#jquery_jplayer_1").jPlayer("destroy");
								style = "all";
								
								if (isAccessible) {
		
									var stream = { title: "AdventLife Radio",	mp3: "http://www.adventlife.fr:7779/stream" }, ready = false;
								}else {
									var stream = { title: "AdventLife Radio",	mp3: "http://www.adventlife.fr/radio3.mp3" }, ready = false;	
								}

								
								
								$("#jquery_jplayer_1").jPlayer({
									swfPath: "scripts/",
									ready: function () {
										$(this).jPlayer("setMedia",stream).jPlayer("play");
									},								
									error: function(event) {
								
											if(ready && event.jPlayer.error.type === $.jPlayer.error.URL_NOT_SET) {
								
												// Setup the media stream again and play it.
								
												$(this).jPlayer("setMedia", stream).jPlayer("play");
								
											}
									},

									supplied: "mp3",
									solution: 'html, flash',
									supplied: 'mp3',
									preload: 'none',
									wmode: "window"

								});
								
								//change id title/artiste
								$("#txt-tiltle span").attr('id','cc_strinfo_tracktitle_francophone');
								$("#txt-artist span").attr('id','cc_strinfo_trackartist_francophone');
								//reload info
								$.getScript( "http://www.adventlife.fr/streaminfo.js" );
								$("#player-container").css('background','url(images/bg-photo-3.jpg) no-repeat');
								$("#title-dedicace a").css('background','#F9BD07');
								
								//$("#logo-small").css('background-color','#36A290');
		
		});
		
		$('.style-english').click(function(){
								$("#jquery_jplayer_1").jPlayer("destroy");
								style = "all";
								
								if (isAccessible) {
		
									var stream = { title: "AdventLife Radio",	mp3: "http://www.adventlife.fr:7780/stream" }, ready = false;
								}else {
									var stream = { title: "AdventLife Radio",	mp3: "http://www.adventlife.fr/radio4.mp3" }, ready = false;	
								}

								
								
								$("#jquery_jplayer_1").jPlayer({
									swfPath: "scripts/",
									ready: function () {
										$(this).jPlayer("setMedia",stream).jPlayer("play");
									},								
									error: function(event) {
								

											if(ready && event.jPlayer.error.type === $.jPlayer.error.URL_NOT_SET) {
								
												// Setup the media stream again and play it.
								
												$(this).jPlayer("setMedia", stream).jPlayer("play");
								
											}
									},

									supplied: "mp3",
									solution: 'html, flash',
									supplied: 'mp3',
									preload: 'none',
									wmode: "window"

								});
								
								//change id title/artiste
								$("#txt-tiltle span").attr('id','cc_strinfo_tracktitle_gospel');
								$("#txt-artist span").attr('id','cc_strinfo_trackartist_gospel');
								//reload info
								$.getScript( "http://www.adventlife.fr/streaminfo.js" );
								$("#player-container").css('background','url(images/bg-photo-4.jpg) no-repeat');
								$("#title-dedicace a").css('background','#f5ab21');
								
								//$("#logo-small").css('background-color','#36A290');
		
		});
		
		$('.style-instru').click(function(){
								$("#jquery_jplayer_1").jPlayer("destroy");
								style = "instrumental";
								
								if (isAccessible) {
		
									var stream = { title: "AdventLife Radio",	mp3: "http://www.adventlife.fr:7781/stream" }, ready = false;
								}else {
									var stream = { title: "AdventLife Radio",	mp3: "http://www.adventlife.fr/radio5.mp3" }, ready = false;	
								}

								
								
								$("#jquery_jplayer_1").jPlayer({
									swfPath: "scripts/",
									ready: function () {
										$(this).jPlayer("setMedia",stream).jPlayer("play");
									},								
									error: function(event) {
								
											if(ready && event.jPlayer.error.type === $.jPlayer.error.URL_NOT_SET) {
								
												// Setup the media stream again and play it.
								
												$(this).jPlayer("setMedia", stream).jPlayer("play");
								
											}
									},

									supplied: "mp3",
									solution: 'html, flash',
									supplied: 'mp3',
									preload: 'none',
									wmode: "window"

								});
								
								//change id title/artiste
								$("#txt-tiltle span").attr('id','cc_strinfo_tracktitle_instrumental');
								$("#txt-artist span").attr('id','cc_strinfo_trackartist_instrumental');
								//reload info
								$.getScript( "http://www.adventlife.fr/streaminfo.js" );
								$("#player-container").css('background','url(images/bg-photo-5.jpg) no-repeat');
								$("#title-dedicace a").css('background','#e26f30');
							
							
		
		});
		
		
	
		
		

		
		$('#player-container').mousemove(function(e){
   		 var amountMovedX = (e.pageX * -1 / 55.55);
  		 var amountMovedY = (e.pageY * -1 / 30.55);
   		 $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
		});
		
		$('body').mousemove(function(e){
   		 var amountMovedX = (e.pageX * -1 / 70);
  		 var amountMovedY = (e.pageY * -1 / 60);
   		 $(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
		});
		
		
		
		//load dedi ajax
		function loaddedi(){
   		$("#list-dedi").load('load-dedi.php', function(){
					//load vote func after dedi is load
					dedivote();
					//load scrollbar
					$("#list-dedi").mCustomScrollbar({
					scrollButtons:{ enable:true } });
					//load trunctable
					trunc();
					
					
					
		});
					
				
		};
							
		loaddedi();
    
        //reload dedi evrye 10min
		setInterval(function(){loaddedi()},600000);
    
        //Reload mtadata song evry 20ses
		setInterval(function(){$.getScript( "http://www.adventlife.fr/streaminfo.js" )},10000);
		
		function dedivote(){
			//no text hover si touchscreen
		 var is_touch_device = 'ontouchstart' in document.documentElement;
   		 if(!is_touch_device) {
			 
			$('.dedi-like , .temoignage-like , .priere-like').hover(
				
				  function () {
					$(this).find(".txt-vote").show();
				  }, 
				  function () {
					$(this).find(".txt-vote").hide();
				  }
				); 
		 };
		
			
			$('.dedi-like').click(function(){
				
					var idclick=this.id;
					var dataString = 'id_vote='+idclick
					//$(this).click(function(e){e.preventDefault()});
					$.ajax({
						   
						type: "POST",
						url: "vote.php",
						data: dataString,
						success: function(){
							
						//reload dedi
							
						//loaddedi();
						//$('#'+idclick).find("span").text()
						var el = $('#'+idclick).find("span");
						var num = parseInt(el.text());
						$('#'+idclick).parent().addClass('dedi-voted');
						el.text(num+1);
		  		 		}
					});	
			});
			
			$('.temoignage-like').click(function(){
				
					var idclick=this.id;
					var dataString = 'id_vote='+idclick
					//$(this).click(function(e){e.preventDefault()});
					$.ajax({
						type: "POST",
						url: "vote.php",
						data: dataString,
						success: function(){
						var el = $('#'+idclick).find("span");
						var num = parseInt(el.text());
						$('#'+idclick).parent().addClass('temoignage-voted');
						el.text(num+1);
						}
					});	
			});
			
			
			$('.priere-like').click(function(){
				
					var idclick=this.id;
					var dataString = 'id_vote='+idclick
					//$(this).click(function(e){e.preventDefault()});
					$.ajax({
						type: "POST",
						url: "vote.php",
						data: dataString,
						success: function(){
						var el = $('#'+idclick).find("span");
						var num = parseInt(el.text());
						$('#'+idclick).parent().addClass('priere-voted');
						el.text(num+1);
						}
					});	
			});
		};
	
		
		//DO DEDI
		
		$("#title-dedicace").click(function() {
			$('#bg-lightbox').show();
			$('#lightbox').show();
			$('#song').val($('#txt-tiltle').text() + " - " +$('#txt-artist').text());  
		});
		
		// HIDE DEDI
		
		
		$("#bg-lightbox").click(function() {
			$('#bg-lightbox').hide(); 
			$('#lightbox').hide(); 
			$('#lightbox-help').hide(); 
		});
		//stop hide if in the lightbox
		$("#lightbox").click(function(event) {
			event.stopPropagation();
		});
		
		
	
		
		
		
		//FORM
		$(".submit").click(function() {
 
			/* VALUES */
		    var nom_from = $("#nom_from").val();
			var ville_from = $("#ville_from").val();
			var nom_for = $("#nom_for").val();
			var ville_for = $("#ville_for").val();
			var email_from = $("#email_from").val();
			var email_for = $("#email_for").val();
			var song = $("#song").val();
 			var message = $("#message").val();
			var type = $("#type").val();
			/* DATASTRING */
		    var dataString = 'nom_from='+ nom_from+'&ville_from='+ ville_from +'&nom_for='+ nom_for +'&ville_for='+ ville_for +'&email_from='+ email_from +'&email_for='+ email_for +'&song='+ song + '&message='+ message + '&type='+ type;
 
 
 			
			if(type == '1' && nom_from=='' || type == '1' && ville_from=='' || type == '1' && email_from=='' || type == '1' && email_for =='') {
			$('.success').fadeOut(200).hide();
			$('.error').fadeIn(200).show();
			
		    
			 //console.log ("SOMETHING HAPPENS");
			} else if(type > '1' && nom_from=='' || type > '1' && ville_from=='') {
			
			$('.success').fadeOut(200).hide();
			$('.error').fadeIn(200).show();
			
		    
			 //console.log ("SOMETHING HAPPENS");
			} else {
			$.ajax({
			type: "POST",
		    url: "join.php",
		    data: dataString,
		    	success: function(){
					$('.success').fadeIn(200).show();
		    		$('.error').fadeOut(200).hide();
					
					
					console.log (dataString);	
					console.log ("AJAX DONE");
					//reinitialisation champ
					$("input:text").val("");
					$("textarea:text").val("");
					//hide lightbox
					$('#bg-lightbox').hide();
					$('#lightbox').hide();
					loaddedi();
					
					
					
					
		   		}
			});
			
			
			
				}//EOC
		   return false;
			}); //EOF
		
		//HIDE AND SHOW INPUT
		
		$("#type").change(function() {

		if ( $("#type").val() == "1"){
		
			$(".not-dedi").show();
			
		
		
		}else{
			$(".not-dedi").hide();
			

			};
		 });
		
		//focntion reduction
		function trunc(){
			
			 $('.dedi-mess').truncatable({	limit: 100, more: '... Lire la suite ', less: true, hideText: ' FERMER ' });
			 
		};
		
		//help
		
		$("#help").click(function() {
									
			
			$('#bg-lightbox').show();
			$('#lightbox-help').show();  
		
									
									});
		
		
		
});