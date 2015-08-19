<?php 

	/* Modération des messages : le type 0 est attribué au post en BDD = il n'est plus traité par load-dedi.php */
 	
	if ($_GET['mod']){
		
		$date_mod = $_GET['mod'];
		
		
		try
            {
                // On se connecte a MySQL
                $bdd = new PDO('mysql:host=localhost;dbname=adventlife', 'adventradio', '4dv3ntr4di0');
            }
            catch(Exception $e)
            {
                // En cas d'erreur, on affiche un message et on arrete tout
                    die('Erreur : '.$e->getMessage());
					echo ("ERREUR : le message n'a pas ete supprimé");
					
            }
            
            $req = $bdd->prepare('UPDATE dedicaces SET type = 0 WHERE created_on = :date_mod');
			$req ->execute(array( 'date_mod' => $date_mod ));
			echo ("Le commentaire à bien été supprimé !");
			
			}else{
				echo ("Modération impossible");
			}
				
?>
