<?php
$username = $_GET["username1"];
$password = $_GET["password1"];
echo "<pre>Username i dhene eshte:" . $username . "<br></pre>" ;
echo "Password i dhene eshte:" . $password . "<br>" ;
echo"Username iu jane larguar hapsirat: ". trim($username, " ") . "<br>" ;

//echo "Zevendesimi i karaktereve te medha me te vogla ne username " . str_replace("M","m",$username). "<br>";
?>