<?php
session_start();
if(!isset($_SESSION['numri']) && !isset($_SESSION['thanks'])){
$_SESSION["thanks"] = "Faleminderit që na vizituat!";
$_SESSION["numri"] = 0;
}
else {
  $_SESSION['numri'] += 1;
}
if($_SESSION['numri']>=10){
  $_SESSION["thanks"] = "Faleminderit që na vizituat mbi 10 here!";
}
$mesazhi = "Ju na keni vizituar " .$_SESSION['numri']. " here". "<br>". $_SESSION['thanks'];
?>
