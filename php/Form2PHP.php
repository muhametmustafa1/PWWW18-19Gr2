<?php
$username = $_GET["username2"];

echo "<pre>Username i dhene eshte:" . $username . "<br> </pre>" ;
$sp=printf("[%8s]<br>",$username);
echo trim($username, " ");
?>