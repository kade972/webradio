<?php 
		/* Gestion du formulaire et envoie de mail*/
 
		//include db configuration file
		//include_once("config.php");
		iconv_set_encoding("internal_encoding", "UTF-8");
 
			if($_POST)
				{
				/* VALUES */
				$message_joindre=$_POST['message_joindre'];
				$message_joindre=addslashes ($message_joindre);
				$message_id=$_POST['message_id'];
				$message_id=addslashes ($message_id); 
				$mail_joindre=$_POST['mail_joindre'];
				$mail_joindre=addslashes ($mail_joindre);
                $nom_joindre=$_POST['nom_joindre'];
				$nom_joindre=addslashes ($nom_joindre);
				$created_on = date('Y-m-d H:i:s');
				
				
				
                
                
                ///////////////recuperation du mail en rapport avec l'id
				
            try
            {
            // On se connecte a MySQL
            $bdd = new PDO('mysql:host=localhost;dbname=adventlife', 'adventradio', '4dv3ntr4di0');
            }
            catch(Exception $e)
            {
            // En cas d'erreur, on affiche un message et on arrete tout
                die('Erreur : '.$e->getMessage());
            }
            
			//recuperation type
			$type_dedi = $bdd->prepare('SELECT nom_from,email_from, message, type FROM dedicaces WHERE id = :message_id');
			$type_dedi ->execute(array( 'message_id' => $message_id ));
			$type_dedi=$type_dedi->fetch();
			//echo 'le type est'. $type_dedi['type'] . 'et le mail est ' . $type_dedi['email_from'];
                
            $email_from=$type_dedi['email_from'];
            $nom_from =$type_dedi['nom_from'];
            $message_old=$type_dedi['message'];
                ////////////////
				
				 	//IF DEDICACE
			
						/*send mail*/
						 
						$subject = $type_dedi['nom_from'];
						$subject .=  ", tu as reçu un message de " . $nom_joindre." concernant ta requète de prière"; 
						$message = "Bonjour," . $type_dedi['nom_from'] ."<br /><br />"; 
                        $message .= $nom_joindre ." viens de t'envoyer ce mesage :<br />";
                        $message .= stripslashes($message_joindre); 
                        $message .= "<br /><br /><br />---------------------------<br /><br />";  
				        $message .= " Pour rappel, ta requète de prière sur AdventLife est :<br />";		
                        $message .= $message_old . "<br />"; 
						$message .= "<br /><br />---------------------------<br /><br />";  
                        $message .= "<br /><br /> Si tu ne souhaites plus recevoir de message pour ta requête clique sur ce lien :"; 
                        $message .= "http://www.adventlife.fr/adventradio/mod_stop_mp.php?mod=" . $message_id; 
						
						$message2 = "de " . $nom_joindre . "  Pour " . $nom_from ."<br /><br /> Les mails : "  . $joindre_email  . " Pour  " . $email_from ;
						$message2 .= " message: " . $message_joindre ;
						
						 
						
						$headers = 'MIME-Version: 1.0'. "\r\n"; 
						$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; 
						$headers .= 'From: Adventlife  <david@adventlife.fr>' . "\r\n";
						$headers .= 'Reply-To: Adventlife <contact@adventlife.fr>';
						$headers .= 'Reply-To:' . $mail_joindre;
						if(@mail($email_from, $subject, $message, $headers))
						{ 
							//echo "answer=" . $email_from . $subject . $message . $headers; 
							mail('bluebird972@gmail.com', 'Nouveau message sur une requête', $message2, $headers);
						}  
						else  
						{ 
							echo "answer=error type 1"; 
							mail('bluebird972@gmail.com', 'Nouvelle Dédicace sur RADIO AdventLife (E)', $message2);
						} 
			 	
				 	
					
					
				//SINON RENVOI ERREUR				
				} else { 
 
						header('HTTP/1.1 500 Looks like mysql error, could not insert record!');
						exit();
				}
 
		?>