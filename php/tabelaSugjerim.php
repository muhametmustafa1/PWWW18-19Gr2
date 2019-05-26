<?php
//Krijimi i tabelave 
$dbhosti = 'localhost:3306';
$dbuseri = 'root';
$dbpasswordi = '';
$db = 'cubitvdatabase';
$con = mysqli_connect($dbhosti,$dbuseri, $dbpasswordi, $db);
if(!$con){
    die('Lidhja nuk mund te realizohet'. mysqli_connect_error());
}
#echo 'Lidhja me db perfundoi me sukses';

$sql = 'CREATE TABLE serialet('
    .'Id integer AUTO_INCREMENT,'
    .'Emri varchar(20),'
    .'Sezoni integer,'
    .'Episodi integer)';


$retval = mysqli_query($con, $sql);

if(!$retval){
    die('Lidhja nuk mund te realizohet'. mysqli_connect_error());

}




mysqli_close($con);

?>