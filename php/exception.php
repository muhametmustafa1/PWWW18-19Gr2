<?php
$username = $_GET["username_1"];
$password = $_GET["password_1"];

//trigger exception in a "try" block
try {
  if($username==null ) {
    throw new Exception("Duhet te jepni nje emer!");
  }
}

//catch exception
catch(Exception $e) {
  echo 'Mesazhi: ' .$e->getMessage();
}finally {
echo "<br>Username eshte: ".$username ;
echo  "<br> Password-i eshte: " . $password;
}
?>
