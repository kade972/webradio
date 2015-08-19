<?php 

	/* Modération des messages : le type 0 est attribué au post en BDD = il n'est plus traité par load-dedi.php */
 	
	if ($_GET['mod']){
		
		$id_mod = $_GET['mod'];
		
		
		try
            {
                // On se connecte a MySQL
                $bdd = new PDO('mysql:host=localhost;dbname=adventlife', 'adventradio', '4dv3ntr4di0');
            }
            catch(Exception $e)
            {
                // En cas d'erreur, on affiche un message et on arrete tout
                    die('Erreur : '.$e->getMessage());
					echo ("ERREUR : Réessaye ultérieurement ");
					
            }
            
            $req = $bdd->prepare('UPDATE dedicaces SET joignable = 0 WHERE id = :id_mod');
			$req ->execute(array( 'id_mod' => $id_mod ));
			echo ("Vous ne recevrez plus de message pour votre requête !");
			
			}else{
				echo ("Modération impossible");
			}
				
?>
