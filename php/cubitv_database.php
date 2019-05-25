<?php
//Shembulli permes te cilit mund te hapet dhe lidhet PHP
$dbhosti = 'localhost:3306';
$dbuseri = 'root';
$dbpasswordi = '';
$con = mysqli_connect($dbhosti,$dbuseri, $dbpasswordi);
if(!$con){
    die('Lidhja nuk mund te realizohet'. mysqli_connect_error());
}
echo 'Lidhja me db perfundoi me sukses';

$sql = 'CREATE Database cubitvdatabase';
$retval = mysqli_query($con, $sql);

if(!$retval){
    die('Lidhja nuk mund te realizohet'. mysqli_connect_error());

}

mysqli_close($con);

?>