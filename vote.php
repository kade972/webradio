<?php 

		/* vote.php */
 			//$_POST['id_vote'] = 228;
	if ($_POST){
		
		$id_vote = $_POST['id_vote']; 
		//si deja votÈ
		if (isset($_COOKIE[$id_vote])) 
		{
			header('HTTP/1.1 500 Looks like mysql error, could not insert record!');
			exit();
		}
		//sinon on store un cooki
		setcookie($id_vote, time() + 365*24*3600);
		
		
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
			$type_dedi = $bdd->prepare('SELECT nom_from,email_from, message, type FROM dedicaces WHERE id = :id_vote');
			$type_dedi ->execute(array( 'id_vote' => $id_vote ));
			$type_dedi=$type_dedi->fetch();
			//echo 'le type est'. $type_dedi['type'] . 'et le mail est ' . $type_dedi['email_from'];
			
			if ($type_dedi['type'] == 2 ){
				
						/*send mail*/
						 
						$subject = $type_dedi['nom_from'];
						$subject .=  ", on vient de prier pour ta requete !"; 
						$message = "Bonjour," . $type_dedi['nom_from'] ."<br /><br />"; 
						$message .= "Un internaute sur AdventLife vient de s'engager &agrave; prier pour ta requ&ecirc;te : <strong>"; 
						$message .= $type_dedi['message'];
						$message .= "</strong><br /><br />";  
						$message .= "N'h&eacute;site pas &agrave; revenir poster un <strong>t&eacute;moignage</strong> sur AdventLife de ce que Dieu a fait en  <a href=\"http://adventlife.fr/prieres\">CLIQUANT ICI</a><br /><br />Que Dieu te b&eacute;nisse.<br /><br /><br /><br />**Merci de ne pas r&eacute;pondre &agrave; ce mail ! **"; 
						$message = stripslashes($message);
						$headers = 'MIME-Version: 1.0'. "\r\n"; 
						$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";  
						$headers .= 'From: Adventlife  <contact@adventlife.fr>' . "\r\n";
						$headers .= "Reply-To: Adventlife <contact@adventlife.fr>";
						mail($type_dedi['email_from'], $subject, $message, $headers);
						 
					
				
			}
			
			
			
			
			
			
			
            $req = $bdd->prepare('UPDATE dedicaces SET vote = vote+1 WHERE id = :id_vote');
			$req ->execute(array( 'id_vote' => $id_vote ));
			
			
			
			
			// creation du cookies 
			setcookie('pseudo', 'M@teo21', time() + 365*24*3600);
			
            /*$req2 = $bdd->prepare('SELECT vote FROM dedicaces WHERE id = :id_vote ');
			$req2 ->execute(array( 'id_vote' => $id_vote ));
			$donnees = $req2->fetch();
			echo $donnees['vote'];
		*/
			}
				
?>
