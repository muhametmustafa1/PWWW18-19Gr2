<?php
//perdorrimi i cookies ne phpp
$vlera='ka nje vlere te qfardoshme';
// E FSHIJME NESE IA NDRYSHOJM KOHEN PSH E BEJME -
setcookie("CookiePerTestim", $vlera,time()+ 3600);
echo $_COOKIE["CookiePerTestim"]; // ME HEREN E DYTE BEN,PRA REFRESH JA BEN
echo "<br>";
print_r($_COOKIE);
?>
