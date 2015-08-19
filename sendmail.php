<?php 
$to =  ($_POST['hismail']);  
$subject = ($_POST['hisname']);
$subject .=  ", une dédicace de " . $_POST['yourname']." pour toi sur radio AdventLife"; 
$message = "Bonjour," . $_POST['hisname'] ."\n\n"; 
$message .= "Tu as reçu une dédicace de ". $_POST['yourname'] . "(" . $_POST['yourtown'] .") sur AdventLife Radio accompagnée de ce message :\n\n";
$message .= "\"" . $_POST['message'] . "\""; 
$message .= "\n\nPour écouter le morceau dédicacé sur AdventLife RADIO  : http://www.adventlife.fr/adventradio/Adventradio.php?dedisong=" .$_POST['dedisong'] . "\n (Ecoutable pendant 24H)"; 
$message .= "\n\n---------------------------\n"; 
$message .= "/!\NE REPONDEZ PAS A CE MAIL : Vous pouvez envoyer un mail de remerciement en envoyant un mail à : " . $_POST['yourname'] . " <" . $_POST['yourmail']  . ">\n"; 
$message = stripslashes($message);
$message2 = "de " . $_POST['yourname'] . " ( " .  $_POST['yourtown'] . ")  Pour " . $_POST['hisname'] . " (".  $_POST['histown'] . ")\n\n Les mails : "  . $_POST['yourmail']  . " Pour  " . $_POST['hismail'];
$message2 .= " message " . $_POST['message']  ;
$headers = "MIME-Version: 1.0\r\n"; 
$headers .= "Content-type: text/plain; charset=utf-8\r\n"; 
$headers .= 'From: Adventlife  <www-data@sd-28998.dedibox.fr>' . "\r\n";
$headers .= "Reply-To: Adventlife <contact@adventlife.fr>";
if(@mail($to, $subject, $message, $headers))
{ 
    echo "answer=ok"; 
	mail('bluebird972@gmail.com', 'Nouvelle Dédicace sur RADIO AdventLife', $message2);
}  
else  
{ 
    echo "answer=error"; 
	mail('bluebird972@gmail.com', 'Nouvelle Dédicace sur RADIO AdventLife (E)', $message2);
} 
?>



