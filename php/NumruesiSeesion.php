<?php
session_start();
if(isset($_SESSION['numruesi'])){
$_SESSION['numruesi']+=1;
}
else {
$_SESSION['numruesi']=1;
}
$mesazhi="ju keni vizituar faqen ". $_SESSION['numruesi'] ." ne kete session";
?>
