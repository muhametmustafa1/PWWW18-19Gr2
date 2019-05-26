
 <?php
    if(isset($_POST['butoni'])){
        $dbhosti = 'localhost:3306';
        $dbuseri = 'root';
        $dbpasswordi = '';
        $db = 'cubitvdatabase';
        $con = mysqli_connect($dbhosti,$dbuseri, $dbpasswordi, $db);
        if(!$con){
            die('Lidhja nuk mund te realizohet'. mysqli_connect_error());
        }
        #echo 'Lidhja me db perfundoi me sukses';

        if(!get_magic_quotes_gpc()){
            $emri = addslashes($_POST['emri']);
        }
        else{
            $username = $_POST['emri'];
        }
        $nrSez = addslashes($_POST['nrSez']);
        $nrEp = addslashes($_POST['nrEp']);


        $sql = "INSERT INTO serialet(Emri, Sezoni, Episodi)"
        . " VALUES('$emri','$nrSez','$nrEp')";
   
   
   $retval = mysqli_query($con, $sql);
   
   if(!$retval){
       die('Lidhja nuk mund te realizohet'. mysqli_connect_error());
   
   }
   
   echo "te dhenat jane regjistruar me sukses";
   
   
   mysqli_close($con);   
    }
?>