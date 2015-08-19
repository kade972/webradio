<?php
            try
            {
                // On se connecte a MySQL
                $bdd = new PDO('mysql:host=localhost;dbname=adventlife', 'kade972', 'chattons');
            }
            catch(Exception $e)
            {
                // En cas d'erreur, on affiche un message et on arrete tout
                    die('Erreur : '.$e->getMessage());
            }
            
            // Si tout va bien, on peut continuer
            
            // On récupere tout le contenu de la table jeux_video
            $reponse = $bdd->query('SELECT * FROM dedicaces ORDER BY dedi_id DESC');
			
			
            
            // On affiche chaque entrée une a une
            while ($donnees = $reponse->fetch())
            {
            ?>
		<div class="dedicace">
			<div class="dedi-content">
				<span class="ico-micro"></span>
				<span lass="dedi-from"><?php echo $donnees['nom_from']; ?></span>
				<span>-></span>
				<span class="dedi-for"><?php echo $donnees['nom_for']; ?></span>
				<span class="ico-map"><img src="images/ico-map.png" /></span>
				<span class="dedi-map"><?php echo $donnees['ville_from']; ?></span>
                <span>-></span>
                <span class="dedi-map"><?php echo $donnees['ville_for']; ?></span>
				<span class="ico-music"><img src="images/ico-music.png" /></span>
				<span class="dedi-music"><?php echo $donnees['song']; ?></span>
				<div class="dedi-mess text"><?php echo $donnees['message']; ?></div>
			</div>
			<div id="<?php echo $donnees['dedi_id']; ?>" class="dedi-like">
				<a href="#"><?php if ( $donnees['vote'] < '1'){?><img src="images/ico-heart-empty.png" />&nbsp;<?php }else{?><img src="images/ico-heartfull.png" />&nbsp;<?php }  echo $donnees['vote']; ?></a>
			</div>
		</div>
		
        
       <?php
}

$reponse->closeCursor(); // Termine le traitement de la requete

?> 