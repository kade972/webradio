$(document).ready(function() {


	
	//load dedi ajax
		function loaddedi(){
   		$("#list-dedi").load('load-dedi.php', function(){
					//load vote func after dedi is load
					dedivote();
					//load trunctable
					trunc();
					
					
					
		});
					
				
		};
							
		loaddedi();
    
        //reload dedi evrye 10min
		//setInterval(function(){loaddedi()},600000);
    
		
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
		
		//focntion reduction
		function trunc(){
			
			 $('.dedi-mess').truncatable({	limit: 80, more: '... Lire la suite ', less: true, hideText: ' FERMER ' });
			 
		};
		
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
				//hide lightbox
					$('#bg-lightbox').hide();
					$('#lightbox').hide();
			$.ajax({
				
			type: "POST",
		    url: "join.php",
		    data: dataString,
		    	success: function(){
					$('.success').fadeIn(200).show();
		    		$('.error').fadeOut(200).hide();
					//reinitialisation champ
					$("input:text").val("");
					$("textarea:text").val("");
					//hide lightbox
					$('#bg-lightbox').hide();
					$('#lightbox').hide();
					//reload dedi afeter post ok
			loaddedi();
					
					
					
					
		   		}
				
			});
			
			
			
			
				}//EOC
		   return false;
			}); //EOF
			
			/////
			
			
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
		
		//LIGHTBOX
		
		$("#button").click(function() {
			$('#bg-lightbox').show();
			$('#lightbox').show();
			//$('#song').val($('#txt-tiltle').text() + " - " +$('#txt-artist').text());  
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
});