<?php
	header('Access-Control-Allow-Origin: *');
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
            
            // Si tout va bien, on peut continuer
            
            // On rÈcupere tout le contenu de la table jeux_video
            $reponse = $bdd->query('SELECT * FROM actu_replay ORDER BY id DESC');
			
			
            
            // On affiche chaque entrÈe une a une
            while ($donnees = $reponse->fetch())
            {
			if ( $donnees['new_prog']){
			// sermon
            ?>
			<div class="actu-radio"><span id="actu-replay" ></span><span id="title-actu-replay"><?php echo $donnees['new_prog']; ?></span><span id="bt-play-actu<?php echo $donnees['id']; ?>"><a  href="<?php echo $donnees['lien_prog']; ?>" target="_blank" data-timing="<?php echo $donnees['timing']; ?>" >bt-play</a></span></div>
                
        
       <?php
	   // IF NEXT EVENT
	   };
	   if ( $donnees['txt_next_event']){
	   ?>
	   		
			<div class="actu-radio"><span id="actu-rdv" ></span><span id="title-actu-replay"><?php echo $donnees['txt_next_event']; ?></span></div>
			</div>
	   		
	   
	   <?php
	   // IF TEMOIGNAGE
	   }
}

$reponse->closeCursor(); // Termine le traitement de la requete

?> 