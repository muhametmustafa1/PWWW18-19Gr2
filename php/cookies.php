<?php
$cookie_name = "user";
$cookie_value = "CubiTv";
setcookie($cookie_name, $cookie_value, time() + 5, "/"); // 86400 = 1 day
if(!isset($_COOKIE[$cookie_name])) {
     echo "Cookie named '" . $cookie_name . "' is not set!";
} else {
     echo "Cookie '" . $cookie_name . "' is set!<br>";
     echo "Value is: " . $_COOKIE[$cookie_name];
}
?>
