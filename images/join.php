<?php 
		/* Gestion du formulaire et envoie de mail*/
 
		//include db configuration file
		include_once("config.php");
		iconv_set_encoding("internal_encoding", "UTF-8");
 
			if($_POST)
				{
				/* VALUES */
				$nom_from=$_POST['nom_from'];
				$nom_from=addslashes ($nom_from);
				$ville_from=$_POST['ville_from'];
				$ville_from=addslashes ($ville_from);
				$nom_for=$_POST['nom_for'];
				$nom_for=addslashes ($nom_for);
				$ville_for=$_POST['ville_for'];
				$ville_for=addslashes ($ville_for);
				$email_from=$_POST['email_from'];
				$email_for=$_POST['email_for'];
				$song=$_POST['song'];
				$song=addslashes ($song);
				$message_raw=$_POST['message'];
				$message_raw=addslashes ($message_raw);
				$created_on = date('Y-m-d H:i:s');
				$type = $_POST['type'];
				
				mysql_query("INSERT INTO dedicaces (song, nom_from, nom_for, ville_from, ville_for, email_from, email_for, message , type , created_on) VALUES ( '".$song."','".$nom_from."', '".$nom_for."', '".$ville_from."', '".$ville_for."', '".$email_from."', '".$email_for."', '".$message_raw."', '".$type."' , '".$created_on."')")or die(mysql_error());
						
				mysql_close($connecDB);
				
				
				
				 	//IF DEDICACE
				 	if ($type == 1) {
						/*send mail*/
						 
						$subject = $nom_for;
						$subject .=  ", une dÈdicace de " . $nom_from." pour toi sur radio AdventLife"; 
						$message = "Bonjour," . $nom_for ."<br /><br />"; 
						$message .= $nom_from . "(" . $ville_from .") te dÈdicace le chant * ". $song ." * sur AdventLife Radio accompagnÈe de ce message :<br /><br />";
						$message .= "\"" . $message_raw . "\""; 
						$message .= "<br /><br /> ** Pour Ècouter le morceau dÈdicacÈ sur RADIO AdventLife nous vous proposons deux liens:<br /> YOUTUBE :<br /> http://www.youtube.com/results?search_query=" . urlencode($song) . "<br /> GOOGLE :<br /> https://www.google.fr/search?q=" . urlencode($song) . "<br /> <br /> (/!\ Pour des raisons de droit d'auteur, il se peut que certain chant ne puisse Ítre trouvÈ sur YouTube)"; 
						$message .= "<br /><br />---------------------------<br />";  
						$message .= "/!\NE REPONDEZ PAS A CE MAIL : Vous pouvez envoyer un mail de remerciemant en envoyant un mail ‡ : " . $nom_from . " <" .$email_from. "><br />"; 
						$message = stripslashes($message);
						$message2 = "de " . $nom_from . " ( " .  $ville_from . ")  Pour " . $nom_for . " (".  $ville_for . ")<br /><br /> Les mails : "  . $email_from  . " Pour  " . $email_for ;
						$message2 .= " message: " . $message_raw  ;
						$message2 .= " <br /><br /> *** Pour modÈrÈ ce message cliquer ici : http://www.adventlife.fr/adventradio/V3/mod.php?mod=" . urlencode($created_on)  ;
						
						
						$headers = 'MIME-Version: 1.0'. "\r\n"; 
						$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; 
						$headers .= 'From: Adventlife  <www-data@sd-28998.dedibox.fr>' . "\r\n";
						$headers .= "Reply-To: Adventlife <contact@adventlife.fr>";
						//$headers .= "Reply-To:" . $_POST['hismail'];
						if(@mail($email_for, $subject, $message, $headers))
						{ 
							echo "answer=" . $email_for . $subject . $message . $headers; 
							mail('bluebird972@gmail.com', 'Nouvelle DÈdicace sur RADIO AdventLife', $message2, $headers);
						}  
						else  
						{ 
							echo "answer=error type 1"; 
							mail('bluebird972@gmail.com', 'Nouvelle DÈdicace sur RADIO AdventLife (E)', $message2);
						} 
			 	
				 	} else {
				 	
				 	//IF priere ou temoignage
						/*send mail*/
						 
						$message2 = "de " . $nom_from . " ( " .  $ville_from . ")  <br /><br /> Le mail : "  . $email_from ;
						$message2 .= " message: " . $message_raw  ;
						$message2 .= " <br /><br /> *** Pour modÈrÈ ce message cliquer ici : http://www.adventlife.fr/adventradio/V3/mod.php?mod=" . urlencode($created_on)  ;
						
						
						$headers = "MIME-Version: 1.0\r"; 
						$headers .= "Content-type: text/html; charset=utf-8\r";
						$headers .= 'From: Adventlife  <www-data@sd-28998.dedibox.fr>' . "\r\n";
						$headers .= "Reply-To: Adventlife <contact@adventlife.fr>";
						
							echo "answer=ok"; 
							mail('bluebird972@gmail.com, mperonet@gmail.com', 'Nouvelle requete de priËre ou tÈmoignage sur RADIO AdventLife', $message2, $headers);
						
							 	
				 	} 
					
					
				//SINON RENVOI ERREUR				
				} else { 
 
						header('HTTP/1.1 500 Looks like mysql error, could not insert record!');
						exit();
				}
 
		?>