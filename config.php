<?php 
	########## MySql details (Replace with yours) #############
$username = "adventradio"; //mysql username
$password = "4dv3ntr4di0"; //mysql password
$hostname = "localhost"; //hostname
$databasename = 'adventlife'; //databasename
 
$connecDB = mysql_connect($hostname, $username, $password);
 
// Check connection
if (!$connecDB) {
  	die('Could not connect: ' . mysql_error());
  }
 
$db_selected = mysql_select_db($databasename,$connecDB);
 
// Check DB
if (!$db_selected) {
  die ('Can\'t use  : ' . mysql_error());
  }
 

 
	?>